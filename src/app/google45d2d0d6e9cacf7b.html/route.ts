export async function GET() {
  return new Response("google-site-verification: google45d2d0d6e9cacf7b.html", {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
  });
}
