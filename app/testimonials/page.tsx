import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Client Testimonials | Allan & Easton Law",
  description:
    "Read what our clients have to say about their experience with Allan & Easton Law. Real clients, real results across Utah.",
}

export default function TestimonialsPage() {
  const reviews = [
    {
      name: "Jonathan K.",
      quote:
        "Because of his knowledge and experience, he was able to negotiate with the prosecutor to have my charges DISMISSED!!!",
    },
    {
      name: "Emilee F.",
      quote:
        "John Allan is very to the point and straightforward... He got me the results I was hoping for and I couldn't be happier.",
    },
    {
      name: "Edye H.",
      quote:
        "That was the most important decision I made about my defense and my future. I would be spending years in prison otherwise.",
    },
    {
      name: "Carrie M.",
      quote: "John Easton worked so hard and got me the absolute best deal. He truly cared about me personally.",
    },
    {
      name: "Alexis G.",
      quote:
        "John Allan did a wonderful job for me on my case, and my anxiety immediately settled after calling him the first time.",
    },
    {
      name: "Chandra M.",
      quote:
        "John Easton has saved me from my own stupidity several times. I would not have had the opportunity to change my life without him.",
    },
  ]

  return (
    <div>
      <section className="bg-firm-ivory py-16 px-4 md:px-10 text-center space-y-6">
        <h1 className="text-4xl font-bold font-serif text-firm-navy">What Our Clients Say</h1>
        <p className="text-lg text-firm-slate max-w-3xl mx-auto">
          Real clients. Real results. Here's what people across Utah have said about their experience with Allan &
          Easton.
        </p>
      </section>

      <section className="bg-white py-10 px-4 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow border border-firm-slate/10 text-left hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="text-firm-burgundy mr-2 text-3xl font-serif">"</div>
                <div>
                  <p className="italic text-firm-slate">{review.quote}</p>
                  <p className="mt-3 text-sm text-firm-slate/70">— {review.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=allan+%26+easton+law+utah+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-firm-burgundy hover:text-firm-navy hover:underline text-base font-medium"
          >
            <span className="text-yellow-500 mr-1">★★★★★</span> Read more 5-star reviews on Google
          </a>
        </div>
      </section>

      <section className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-firm-navy text-center mb-8">
            Our Commitment to Client Satisfaction
          </h2>
          <div className="bg-firm-ivory p-8 rounded-lg">
            <p className="text-firm-slate mb-4">
              At Allan & Easton Law, we measure our success by the satisfaction of our clients. We're proud of the
              positive feedback we've received over the years, which reflects our commitment to:
            </p>
            <ul className="space-y-2 text-firm-slate">
              <li className="flex items-start">
                <span className="text-firm-burgundy mr-2">•</span>
                <span>Clear, honest communication throughout your case</span>
              </li>
              <li className="flex items-start">
                <span className="text-firm-burgundy mr-2">•</span>
                <span>Personalized attention to your unique situation</span>
              </li>
              <li className="flex items-start">
                <span className="text-firm-burgundy mr-2">•</span>
                <span>Aggressive advocacy to protect your rights and interests</span>
              </li>
              <li className="flex items-start">
                <span className="text-firm-burgundy mr-2">•</span>
                <span>Compassionate support during a difficult time</span>
              </li>
              <li className="flex items-start">
                <span className="text-firm-burgundy mr-2">•</span>
                <span>Results that help you move forward with your life</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-firm-burgundy py-12 px-4 md:px-10 text-white text-center">
        <h2 className="text-2xl font-bold font-serif">Let's Talk About Your Case</h2>
        <p className="mt-3">We've helped thousands. Let us help you next.</p>
        <Link href="/contact">
          <Button size="lg" className="mt-6 bg-white text-firm-burgundy hover:bg-gray-100 rounded-full font-semibold">
            Request Free Consultation
          </Button>
        </Link>
      </section>
    </div>
  )
}
