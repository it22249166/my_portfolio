import QRCode from "qrcode";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") || "https://your-portfolio-link.com";

  const png = await QRCode.toBuffer(text, { type: "png", width: 512, margin: 2 });

  return new Response(png, {
    headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=86400" },
  });
}