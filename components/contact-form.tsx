"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
    }, 1500)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank you!</h3>
        <p className="text-green-700">We've received your message and will be in touch shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-firm-slate mb-1">
          Your Name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="John Doe"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border-firm-slate/30 focus:border-firm-navy focus:ring-firm-navy"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-firm-slate mb-1">
          Phone Number
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(801) 555-1234"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full border-firm-slate/30 focus:border-firm-navy focus:ring-firm-navy"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-firm-slate mb-1">
          Tell us what you're dealing with
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Please provide a brief description of your legal situation..."
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="w-full border-firm-slate/30 focus:border-firm-navy focus:ring-firm-navy"
        />
      </div>

      <Button type="submit" className="w-full bg-firm-burgundy hover:bg-firm-navy" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>

      <p className="text-xs text-firm-slate text-center mt-4">
        By submitting this form, you agree to be contacted regarding your request. Your information will remain
        confidential.
      </p>
    </form>
  )
}
