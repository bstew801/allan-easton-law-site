import Link from "next/link"

export default function ReadyToDefend() {
  return (
    <section className="bg-firm-burgundy py-12 px-4 md:px-10 text-white text-center">
      <h2 className="text-2xl font-bold">Ready to Defend Your Rights</h2>
      <p className="mt-4">
        Contact Allan & Easton today for a free consultation and take the first step towards a strong defense.
      </p>
      <Link
        href="/contact"
        className="inline-block mt-6 bg-white text-firm-burgundy px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        Get in Touch
      </Link>
    </section>
  )
}
