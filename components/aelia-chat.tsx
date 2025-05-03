"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SendIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AELIAChat() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi, I'm AELIA — your private legal assistant. What can I help you with today?" },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: input }])
    setInput("")

    // Simulate bot typing
    setIsTyping(true)

    // Simulate bot response after a delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "Thank you for sharing. A member of our legal team will review this shortly and get back to you. For immediate assistance, please call our office at (801) 555-1234.",
        },
      ])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  return (
    <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}>
            <div
              className={cn(
                "max-w-[80%] px-4 py-2 rounded-lg",
                msg.role === "user"
                  ? "bg-burgundy-600 text-white rounded-tr-none"
                  : "bg-slate-100 text-slate-800 rounded-tl-none",
              )}
            >
              <p>{msg.content}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-100 text-slate-800 px-4 py-2 rounded-lg rounded-tl-none">
              <p>AELIA is typing...</p>
            </div>
          </div>
        )}
      </div>

      <div className="border-t p-4 flex gap-2">
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1"
        />
        <Button onClick={handleSend} disabled={!input.trim()} className="shrink-0">
          <SendIcon className="h-4 w-4" />
        </Button>
      </div>

      <div className="bg-slate-50 p-3 text-xs text-slate-500 text-center">
        AELIA provides general information, not legal advice. For specific legal matters, please consult with an
        attorney.
      </div>
    </div>
  )
}
