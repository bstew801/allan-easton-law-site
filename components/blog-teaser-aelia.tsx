"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import type { AELIABlogPost } from "@/lib/types"
import { fetchAELIABlogPosts } from "@/lib/aelia-data"

export default function BlogTeaserAELIA() {
  const [posts, setPosts] = useState<AELIABlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await fetchAELIABlogPosts()
        setPosts(data.slice(0, 3))
      } catch (err) {
        console.error("Error fetching blog teasers:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  if (isLoading || posts.length === 0) {
    return null // Don't show anything while loading or if no posts
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold font-serif text-firm-navy mb-2">Latest from Our AELIA Blog</h2>
            <p className="text-firm-slate">Real answers for real people — written by our legal assistant AELIA.</p>
          </div>
          <Link href="/blog/aelia" className="mt-4 md:mt-0">
            <Button variant="outline" className="group">
              View All AELIA Posts
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/aelia/${post.slug}`} className="block h-full">
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-firm-slate line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-firm-slate/70">📅 {post.date}</p>
                    <p className="text-sm text-firm-slate/70">By {post.author}</p>
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
