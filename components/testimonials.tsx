"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    text: "John Allan fought for my son when nobody else would. He took the time to understand our situation and never made us feel judged. Forever grateful for his help.",
    case: "Drug Possession Defense",
  },
  {
    id: 2,
    name: "Mike T.",
    text: "Facing a DUI charge was terrifying. The team at Allan & Easton guided me through every step of the process and helped me get my life back on track.",
    case: "DUI Defense",
  },
  {
    id: 3,
    name: "Rebecca L.",
    text: "John Easton's experience with domestic violence cases was evident from our first meeting. He handled my case with sensitivity and achieved the outcome my family needed.",
    case: "Domestic Violence Defense",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <section className="py-16 bg-firm-ivory px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-serif text-firm-navy text-center mb-12">What Our Clients Say</h2>

        <div className="relative">
          <Card className="border-none shadow-md">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <div className="bg-firm-burgundy rounded-full p-2 text-white">
                  <Quote size={24} />
                </div>
              </div>

              {testimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className={`transition-opacity duration-500 text-center ${
                    idx === activeIndex ? "block opacity-100" : "hidden opacity-0"
                  }`}
                >
                  <p className="text-lg mb-6 text-firm-slate">{testimonial.text}</p>
                  <p className="font-semibold text-firm-navy">{testimonial.name}</p>
                  <p className="text-firm-slate text-sm">{testimonial.case}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="rounded-full border-firm-slate"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {testimonials.map((_, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="sm"
                className={`w-2 h-2 rounded-full p-0 ${
                  idx === activeIndex ? "bg-firm-burgundy border-firm-burgundy" : "bg-firm-slate/30"
                }`}
                onClick={() => {
                  setAutoplay(false)
                  setActiveIndex(idx)
                }}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="rounded-full border-firm-slate"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
