"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import type { NewsArticle } from "@/lib/types"
import { getNewsArticles } from "@/lib/news-data"

export default function NewsTeaser() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadNews() {
      setIsLoading(true)
      try {
        const data = await getNewsArticles()
        setArticles(data.slice(0, 3))
      } catch (err) {
        console.error("Error loading news:", err)
        setError("Failed to load news articles")
      } finally {
        setIsLoading(false)
      }
    }

    loadNews()
  }, [])

  if (isLoading || articles.length === 0) {
    return null // Don't show anything while loading or if no articles
  }

  return (
    <section className="py-16 px-6 bg-firm-ivory">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold font-serif text-firm-navy mb-2">Legal News & Insights</h2>
            <p className="text-firm-slate">Stay informed with the latest legal updates from our attorneys.</p>
          </div>
          <Link href="/news" className="mt-4 md:mt-0">
            <Button variant="outline" className="group">
              View All News
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.slug} href={`/news/${article.slug}`} className="block h-full">
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-firm-slate line-clamp-3 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-firm-slate/70">📅 {article.date}</p>
                    <p className="text-sm text-firm-slate/70">By {article.author}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
