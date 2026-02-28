import OpenAI from "openai";

export const runtime = "nodejs"; // keep it server-side
export const dynamic = "force-dynamic";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Your portfolio "knowledge base"
 * Keep this short + high-signal. Update as your portfolio grows.
 */
const PORTFOLIO_CONTEXT = `
You are an assistant for Malith Bandara’s portfolio website.
Answer concisely, friendly, and confidently.
If asked for links, provide the GitHub/live links when available.
If you don't know something, say so and suggest what info is needed.

Profile:
- Name: Malith Bandara
- Role: Software Engineering undergraduate / Full-stack developer
- Stack: React, Next.js, Node.js, Express, MongoDB, TypeScript, Tailwind, Docker, Git
- Experience: Digital Technology Intern at GE Aerospace (intern/rotations)
- Education: SLIIT (Software Engineering), expected graduation Feb 2026

Projects:
1) AI-Dress-Mart — GitHub: https://github.com/it22249166/AI-Dress-Mart
2) Foods-Ordering-App — GitHub: https://github.com/it22249166/Foods-Ordering-App
3) Image Processing Tool — GitHub: https://github.com/it22249166/Image-Processing-Tool.git
`;

export async function POST(req: Request) {
  try {
    const { messages } = (await req.json()) as {
      messages: Array<{ role: "user" | "assistant"; content: string }>;
    };

    const last = messages?.[messages.length - 1]?.content ?? "";

    const response = await client.responses.create({
      model: "gpt-5", // or another available model in your account
      input: [
        { role: "system", content: PORTFOLIO_CONTEXT },
        { role: "user", content: last },
      ],
    });

    // The SDK returns output in structured form; easiest is to read "output_text"
    // (supported in Responses API examples/docs)
    const text = (response as any).output_text ?? "Sorry — I couldn’t generate a response.";

    return Response.json({ text });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err?.message ?? "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}