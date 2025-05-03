"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SendIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AELIAChatUpgraded() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi, I'm AELIA — your private legal assistant. What can I help you with today?" },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

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
            "Thank you for sharing. I'll analyze your situation based on Utah law. For immediate assistance, please call our office at (801) 375-8800.",
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
    <div className="flex flex-col h-[500px] bg-white">
      <div className="bg-firm-navy text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-firm-burgundy rounded-full w-8 h-8 flex items-center justify-center mr-3">
            <span className="text-lg">💬</span>
          </div>
          <h3 className="font-serif font-bold">AELIA Legal Assistant</h3>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}>
            <div
              className={cn(
                "max-w-[80%] px-4 py-2 rounded-lg",
                msg.role === "user"
                  ? "bg-firm-burgundy text-white rounded-tr-none"
                  : "bg-firm-ivory text-firm-navy rounded-tl-none",
              )}
            >
              <p>{msg.content}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-firm-ivory text-firm-navy px-4 py-2 rounded-lg rounded-tl-none">
              <p className="flex items-center">
                <span className="animate-pulse mr-2">•••</span>
                AELIA is typing
              </p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4 flex gap-2">
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 border-firm-slate/30 focus:border-firm-navy focus:ring-firm-navy"
        />
        <Button onClick={handleSend} disabled={!input.trim()} className="shrink-0 bg-firm-burgundy hover:bg-firm-navy">
          <SendIcon className="h-4 w-4" />
        </Button>
      </div>

      <div className="bg-firm-ivory p-3 text-xs text-firm-slate text-center">
        AELIA provides general information, not legal advice. For specific legal matters, please consult with an
        attorney.
      </div>
    </div>
  )
}
