"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { getNewsArticles } from "@/lib/news-data"
import type { NewsArticle } from "@/lib/types"

export default function NewsList() {
  const [news, setNews] = useState<NewsArticle[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadNews() {
      setIsLoading(true)
      try {
        const articles = await getNewsArticles()
        setNews(articles)
      } catch (error) {
        console.error("Error loading news:", error)
        setError("Failed to load news articles. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    loadNews()
  }, [])

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-firm-slate">Loading news articles...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-firm-burgundy">{error}</p>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
      <h1 className="text-4xl font-bold text-center font-serif text-firm-navy">Legal News & Insights</h1>
      <p className="text-center text-firm-slate">
        Curated legal updates, written by our experienced attorneys to keep you informed and empowered.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {news.map((item, idx) => (
          <Link href={`/news/${item.slug}`} key={idx}>
            <div className="p-6 border border-firm-slate/20 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition bg-white">
              <h2 className="text-xl font-semibold text-firm-navy">{item.title}</h2>
              <p className="text-sm text-firm-slate mt-1">
                🗓 {item.date} · By {item.author}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.categories.map((category) => (
                  <span key={category} className="text-xs bg-firm-ivory px-2 py-1 rounded text-firm-navy">
                    {category}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-firm-slate">{item.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
