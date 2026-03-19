export interface Quote {
  text: string;
  type: "love" | "motivation" | "pihu";
}

export const quotes: Quote[] = [
  { text: "You're not just studying to pass exams — you're becoming someone who'll save lives. I'm so proud of you, Sammy.", type: "love" },
  { text: "Every page you read today is one step closer to the white coat ceremony. And I'll be there, cheering the loudest.", type: "love" },
  { text: "When it gets hard, remember — the girl who chose medicine is the bravest person I know.", type: "love" },
  { text: "You don't need to be perfect. You just need to show up. And baby, you always show up.", type: "love" },
  { text: "Future Dr. Sammy has a nice ring to it, doesn't it? Keep going. 💕", type: "love" },
  { text: "I made these notes because I believe in you more than you believe in yourself sometimes. That's my job.", type: "love" },
  { text: "Take a deep breath. You've survived 100% of your hardest days so far. This exam is just another one.", type: "motivation" },
  { text: "Three years in, and you're still going strong. That's not luck — that's heart. 🩷", type: "love" },
  { text: "Even on the days you feel like you know nothing — remember, you know more medicine than most people ever will.", type: "motivation" },
  { text: "I can't hold your hand during the exam, but I can make sure you walk in prepared. That's what these notes are for.", type: "love" },
  { text: "Sammy, you're going to look back at this time and think — 'I really did that.' Because you will.", type: "love" },
  { text: "One topic at a time. One page at a time. One day at a time. You've got this.", type: "motivation" },
  { text: "The world needs more doctors who care as much as you do. Don't let one tough chapter change that.", type: "motivation" },
  { text: "Hey you. Yes, you. The one stressing over biostatistics at 2am. I love you. Now go crush it.", type: "love" },
  { text: "Every mnemonics, every table, every late night — it all adds up. Trust the process, trust yourself.", type: "motivation" },
  { text: "Pihu says: If you remembered to eat today AND study, you're already winning! 🌟", type: "pihu" },
  { text: "Pihu says: The examiner loves a good diagram. ALWAYS draw it. Label it. Get those marks!", type: "pihu" },
  { text: "Pihu says: Confused? Good. That means you're learning something new. Let's figure it out together!", type: "pihu" },
  { text: "Remember why you started this journey. I remember — and I've never been more proud to be by your side.", type: "love" },
  { text: "After all this is over, we're going on the best vacation. But first — let's ace these exams. Deal? 🤝", type: "love" },
  { text: "You're not alone in this. Every note has a little piece of my heart in it. Literally.", type: "love" },
  { text: "Pihu says: Sleep is not the enemy! A rested brain remembers 40% more. Go to bed, Sammy! 😴", type: "pihu" },
  { text: "Someday you'll tell your patients about the crazy nights you spent studying. And they'll be grateful you did.", type: "motivation" },
  { text: "I believe in you like you believe in medicine — completely, deeply, and without hesitation.", type: "love" },
  { text: "Pihu says: Revision > Reading new stuff. Go back to your weak topics. That's where the marks hide! 📚", type: "pihu" },
];

export function getDailyQuote(): Quote {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return quotes[dayOfYear % quotes.length];
}

export function getRandomQuote(): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
