import type { Metadata } from "next"
import AELIAChat from "@/components/aelia-chat"

export const metadata: Metadata = {
  title: "Chat with AELIA | Allan & Easton Law",
  description:
    "Get immediate answers to your legal questions from AELIA, our AI legal assistant specializing in Utah criminal defense.",
}

export default function ChatPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold font-serif text-slate-800 text-center mb-2">Chat with AELIA</h1>
      <p className="text-center text-slate-600 mb-8">
        Your private legal assistant is here to help answer your questions.
      </p>
      <AELIAChat />
    </div>
  )
}
