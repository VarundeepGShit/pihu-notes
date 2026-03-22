import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY not configured" },
      { status: 500 }
    );
  }

  try {
    const { question, expectedKeyPoints, modelAnswer, userAnswer } =
      await req.json();

    if (!question || !userAnswer) {
      return NextResponse.json(
        { error: "Missing question or userAnswer" },
        { status: 400 }
      );
    }

    const systemPrompt = `You are a friendly but accurate medical examiner evaluating an MBBS 3rd year student's viva answer.

Rules:
- Score from 0 to 10 (integers only)
- Identify which key points the student covered and which they missed
- Give brief, encouraging feedback (2-3 sentences max)
- Be fair — partial credit for partially correct answers
- If the answer is completely wrong, be kind but honest

Return ONLY valid JSON in this exact format:
{
  "score": <number 0-10>,
  "feedback": "<encouraging feedback string>",
  "matchedKeyPoints": ["<point1>", "<point2>"],
  "missedKeyPoints": ["<point1>", "<point2>"]
}`;

    const userPrompt = `Question: ${question}

Expected key points: ${expectedKeyPoints.join(", ")}

Model answer: ${modelAnswer}

Student's answer: ${userAnswer}

Evaluate the student's answer and return JSON.`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-20250414",
        max_tokens: 512,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Anthropic API error:", errorText);
      return NextResponse.json(
        { error: "AI evaluation failed" },
        { status: 502 }
      );
    }

    const data = await response.json();
    const text =
      data.content?.[0]?.text || "";

    // Parse the JSON from Claude's response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json(
        { error: "Failed to parse AI response" },
        { status: 502 }
      );
    }

    const evaluation = JSON.parse(jsonMatch[0]);

    return NextResponse.json({
      score: Math.min(10, Math.max(0, evaluation.score)),
      feedback: evaluation.feedback || "Good attempt!",
      matchedKeyPoints: evaluation.matchedKeyPoints || [],
      missedKeyPoints: evaluation.missedKeyPoints || [],
    });
  } catch (error) {
    console.error("Viva evaluation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
