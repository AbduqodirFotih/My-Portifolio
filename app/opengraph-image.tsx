import { ImageResponse } from "next/og"

export const alt = "Abduqodir Fotih - FullStack Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  const tags = ["Python", "FastAPI", "Next.js", "Docker", "CI/CD"]

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "radial-gradient(circle at 20% 20%, #0c2a4a 0%, #03060f 60%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "40px" }}>
          <div
            style={{
              width: "96px",
              height: "96px",
              borderRadius: "24px",
              background: "linear-gradient(135deg, #22d3ee, #3b82f6, #9333ea)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "44px",
              fontWeight: 900,
            }}
          >
            AF
          </div>
          <div style={{ fontSize: "28px", color: "#22d3ee", fontFamily: "monospace" }}>
            {"< FullStack Developer />"}
          </div>
        </div>
        <div
          style={{
            fontSize: "96px",
            fontWeight: 800,
            backgroundImage: "linear-gradient(90deg, #22d3ee, #a78bfa)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1.1,
          }}
        >
          Abduqodir Fotih
        </div>
        <div style={{ fontSize: "34px", color: "#a1a1aa", marginTop: "24px" }}>
          3+ yil tajriba · 20+ loyiha · PDP University
        </div>
        <div style={{ display: "flex", gap: "16px", marginTop: "48px" }}>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                padding: "10px 24px",
                borderRadius: "999px",
                border: "2px solid rgba(34, 211, 238, 0.4)",
                color: "#22d3ee",
                fontSize: "26px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
