"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import type { AELIABlogPost } from "@/lib/types"
import { fetchAELIABlogPosts } from "@/lib/aelia-data"

export default function BlogListAELIA() {
  const [blogs, setBlogs] = useState<AELIABlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await fetchAELIABlogPosts()
        setBlogs(data)
      } catch (err) {
        console.error("Error fetching blogs:", err)
        setError("Failed to load blog posts. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 text-center">
        <p className="text-lg text-firm-slate">Loading blog posts...</p>
      </div>
    )
  }

  if (error && blogs.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 text-center">
        <p className="text-lg text-firm-burgundy">{error}</p>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-serif text-firm-navy mb-4">AELIA Legal Blog</h1>
        <p className="text-firm-slate max-w-2xl mx-auto">
          Real answers for real people — written by our legal assistant AELIA and our attorneys.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((post) => (
          <Link key={post.slug} href={`/blog/aelia/${post.slug}`} className="block h-full">
            <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-firm-slate mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-firm-slate/70">📅 {post.date}</p>
                  <p className="text-sm text-firm-slate/70">By {post.author}</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <span key={category} className="text-xs bg-firm-ivory px-2 py-1 rounded text-firm-navy">
                      {category}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
