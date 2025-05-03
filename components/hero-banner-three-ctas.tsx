"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroBannerThreeCTAs() {
  return (
    <section className="relative w-full aspect-[21/10] md:aspect-[21/8] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?key=bd1qk"
          alt="Allan & Easton Legal Team"
          className="absolute inset-0 w-full h-full object-cover object-top brightness-75"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent z-10"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-20 flex flex-col items-start pt-48 md:pt-64 px-6 md:px-24 text-white max-w-2xl space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          Experienced Legal Team
          <br />
          Fighting For You
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg text-white/90"
        >
          Former prosecutors with over 40 years of criminal law experience. You don't have to face this alone. We know
          the system — and we know how to fight for you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex gap-4 flex-wrap"
        >
          <Link href="/contact">
            <button className="bg-firm-burgundy text-white px-6 py-3 rounded-full shadow hover:scale-105 transition-all duration-200 ease-in-out">
              Request a Free Consultation
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-white text-firm-burgundy border border-firm-burgundy px-6 py-3 rounded-full hover:bg-gray-100 transition duration-200 ease-in-out">
              Learn More About Us
            </button>
          </Link>
          <Link href="/case-review">
            <button className="bg-firm-slate text-white px-6 py-3 rounded-full shadow hover:scale-105 transition-all duration-200 ease-in-out">
              Start My Case Review
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
