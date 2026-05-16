import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const sitePassword = process.env.SITE_PASSWORD;

  if (!sitePassword) {
    return NextResponse.json({ error: "Password not configured" }, { status: 500 });
  }

  if (password === sitePassword) {
    const token = Buffer.from(`${sitePassword}:${Date.now()}`).toString("base64");
    return NextResponse.json({ token });
  }

  return NextResponse.json({ error: "Wrong password" }, { status: 401 });
}
