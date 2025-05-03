"use client"

import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import AELIAChatUpgraded from "@/components/aelia-chat-upgraded"

export default function AELIAChatPopup() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className="bg-firm-burgundy text-white px-5 py-3 rounded-full shadow-lg hover:bg-firm-navy transition-colors duration-200"
            aria-label="Open AELIA Chat"
          >
            💬 Chat with AELIA
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-md p-0 rounded-xl overflow-hidden">
          <AELIAChatUpgraded />
        </DialogContent>
      </Dialog>
    </div>
  )
}
