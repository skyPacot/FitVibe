export async function GET() {
  const quotes = [
    "Push yourself, because no one else will do it for you.",
    "Success starts with self-discipline.",
    "Small progress is still progress.",
    "Stay consistent and trust the process.",
    "Your only limit is you.",
    "The body achieves what the mind believes",
    "Push harder than yesterday if you want a different tomorrow.",
    "The real workout starts when you want tot stop."
  ];

  const random = quotes[Math.floor(Math.random() * quotes.length)];

  return Response.json({ quote: random });
}