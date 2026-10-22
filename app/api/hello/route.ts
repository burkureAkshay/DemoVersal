import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    message: "Hello from the sample Next.js API route.",
    platform: "Vercel-ready",
  });
}
