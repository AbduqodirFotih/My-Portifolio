import { NextResponse } from "next/server"

// Forwards contact-form messages to Telegram.
// Requires TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID (see .env.example).

const LIMITS = { name: 100, email: 200, message: 3000 }
const RATE_WINDOW_MS = 60_000
const RATE_MAX = 3
const recent = new Map<string, number[]>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const hits = (recent.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS)
  hits.push(now)
  recent.set(ip, hits)
  return hits.length > RATE_MAX
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 })
  }

  // Honeypot field: real visitors never fill it in.
  if (body.website) return NextResponse.json({ ok: true })

  const name = String(body.name ?? "").trim()
  const email = String(body.email ?? "").trim()
  const message = String(body.message ?? "").trim()

  if (
    !name ||
    !message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return NextResponse.json({ error: "invalid" }, { status: 400 })
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown"
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 })
  }

  const text = `📩 Portfolio: yangi xabar\n\n👤 ${name}\n✉️ ${email}\n\n${message}`
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  })

  if (!response.ok) {
    return NextResponse.json({ error: "send_failed" }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
