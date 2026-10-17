"use client"

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react"
import { useLanguage } from "@/lib/language-context"
import { skillGroups } from "@/components/skills"

type Line = { id: number; content: ReactNode }

const PROMPT = (
  <>
    <span className="text-primary">fotih@portfolio</span>:<span className="text-secondary">~</span>$
  </>
)

const quickCommands = ["help", "whoami", "skills", "projects", "contact", "sudo hire-me"]

export default function Terminal() {
  const { t, language } = useLanguage()
  const [lines, setLines] = useState<Line[]>([])
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const idRef = useRef(0)
  const bodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const nextId = () => idRef.current++

  useEffect(() => {
    setLines([
      { id: nextId(), content: <span className="text-muted-foreground">{t.terminal.welcome}</span> },
    ])
  }, [language, t.terminal.welcome])

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight })
  }, [lines])

  const run = (raw: string): ReactNode | "clear" => {
    const command = raw.trim().toLowerCase()
    switch (command) {
      case "":
        return null
      case "help":
        return (
          <div className="grid grid-cols-[auto_1fr] gap-x-4">
            {Object.entries(t.terminal.commands).map(([name, description]) => (
              <div key={name} className="contents">
                <span className="text-primary">{name}</span>
                <span className="text-muted-foreground">{description}</span>
              </div>
            ))}
          </div>
        )
      case "whoami":
        return (
          <div>
            <p className="text-foreground font-bold">{t.name}</p>
            <p className="text-muted-foreground">{t.terminal.whoami}</p>
          </div>
        )
      case "skills":
        return (
          <div>
            {skillGroups.map((group) => (
              <p key={group.category}>
                <span className="text-secondary">{group.category.padEnd(13, " ")}</span>
                <span className="text-muted-foreground">{group.skills.join(", ")}</span>
              </p>
            ))}
          </div>
        )
      case "projects":
        return (
          <div>
            {t.projects.items.map((project, i) => (
              <p key={project.title}>
                <span className="text-secondary">[{i + 1}]</span> {project.title}
                {"url" in project && project.url && (
                  <>
                    {" → "}
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                      {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </a>
                  </>
                )}
              </p>
            ))}
          </div>
        )
      case "contact":
        return (
          <div>
            <p>
              <span className="text-secondary">email    </span>
              <a href="mailto:abduqodirjamolkhonov@gmail.com" className="text-primary underline">
                abduqodirjamolkhonov@gmail.com
              </a>
            </p>
            <p>
              <span className="text-secondary">telegram </span>
              <a href="https://t.me/Abduqodir_Fotih" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                @Abduqodir_Fotih
              </a>
            </p>
            <p>
              <span className="text-secondary">github   </span>
              <a href="https://github.com/AbduqodirFotih" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                github.com/AbduqodirFotih
              </a>
            </p>
          </div>
        )
      case "sudo hire-me":
      case "hire-me":
        setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 900)
        return <span className="text-emerald-400">{t.terminal.hired}</span>
      case "clear":
        return "clear"
      default:
        return (
          <span className="text-red-400">
            {t.terminal.notFound}: {raw.trim()}. {t.terminal.hint}
          </span>
        )
    }
  }

  const execute = (raw: string) => {
    const output = run(raw)
    if (output === "clear") {
      setLines([])
    } else {
      setLines((previous) => [
        ...previous,
        {
          id: nextId(),
          content: (
            <span>
              {PROMPT} {raw}
            </span>
          ),
        },
        ...(output ? [{ id: nextId(), content: output }] : []),
      ])
    }
    if (raw.trim()) setHistory((previous) => [...previous, raw])
    setHistoryIndex(-1)
    setInput("")
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    execute(input)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp" && history.length) {
      e.preventDefault()
      const index = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(index)
      setInput(history[index])
    } else if (e.key === "ArrowDown" && historyIndex !== -1) {
      e.preventDefault()
      const index = historyIndex + 1
      if (index >= history.length) {
        setHistoryIndex(-1)
        setInput("")
      } else {
        setHistoryIndex(index)
        setInput(history[index])
      }
    }
  }

  return (
    <div className="glass-effect rounded-2xl overflow-hidden font-mono text-sm shadow-2xl text-left">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-muted-foreground">fotih@portfolio: ~</span>
      </div>

      <div
        ref={bodyRef}
        className="h-80 overflow-y-auto p-4 space-y-2 cursor-text"
        onClick={() => inputRef.current?.focus({ preventScroll: true })}
      >
        {lines.map((line) => (
          <div key={line.id} className="whitespace-pre-wrap break-words">
            {line.content}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="shrink-0">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 min-w-0 bg-transparent outline-none text-foreground caret-primary"
            aria-label={t.terminal.hint}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </form>
      </div>

      <div className="flex flex-wrap gap-2 px-4 py-3 border-t border-white/10">
        {quickCommands.map((command) => (
          <button
            key={command}
            type="button"
            onClick={() => execute(command)}
            className="px-3 py-1 rounded-md border border-primary/30 text-primary text-xs hover:bg-primary/10 transition-colors"
          >
            {command}
          </button>
        ))}
      </div>
    </div>
  )
}
