"use client"

import { useEffect, useState } from "react"

// Types each word, pauses, deletes it and moves on to the next one.
export default function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    setIndex(0)
    setText("")
    setDeleting(false)
  }, [words])

  useEffect(() => {
    const word = words[index % words.length] ?? ""
    let delay = deleting ? 40 : 90
    if (!deleting && text === word) delay = 1800
    if (deleting && text === "") delay = 300

    const timer = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === "") {
        setDeleting(false)
        setIndex((value) => value + 1)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index, words])

  return (
    <span aria-label={words.join(", ")}>
      <span aria-hidden="true">{text}</span>
      <span aria-hidden="true" className="inline-block w-[2px] h-[1em] -mb-[0.15em] ml-0.5 bg-primary animate-pulse" />
    </span>
  )
}
