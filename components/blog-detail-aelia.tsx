"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { AELIABlogPost } from "@/lib/types"
import { fetchAELIABlogPostBySlug } from "@/lib/aelia-data"

interface BlogDetailAELIAProps {
  slug: string
}

export default function BlogDetailAELIA({ slug }: BlogDetailAELIAProps) {
  const [blog, setBlog] = useState<AELIABlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!slug) return

      try {
        const data = await fetchAELIABlogPostBySlug(slug)
        if (data) {
          setBlog(data)
        } else {
          throw new Error("Blog post not found")
        }
      } catch (err) {
        console.error("Error fetching blog post:", err)
        setError("Failed to load this blog post. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogPost()
  }, [slug])

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <p className="text-lg text-firm-slate">Loading post...</p>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <p className="text-lg text-firm-burgundy">{error || "Blog post not found"}</p>
        <Link href="/blog/aelia" className="mt-4 inline-block">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
      <Link href="/blog/aelia">
        <Button variant="outline" size="sm" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Button>
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold font-serif text-firm-navy">{blog.title}</h1>

      <div className="flex justify-between items-center text-sm text-firm-slate/70">
        <p>Published: {blog.date}</p>
        <p>By {blog.author}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {blog.categories.map((category) => (
          <span key={category} className="text-xs bg-firm-ivory px-2 py-1 rounded text-firm-navy">
            {category}
          </span>
        ))}
      </div>

      <div className="prose prose-slate max-w-none">
        {blog.body.split("\n\n").map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      <div className="border-t border-firm-slate/20 pt-6 mt-8">
        <h3 className="text-lg font-semibold mb-2">Need legal help?</h3>
        <p className="text-firm-slate mb-4">
          If you're facing a similar situation, our attorneys are here to help. Contact us for a free consultation.
        </p>
        <Link href="/contact">
          <Button className="bg-firm-burgundy hover:bg-firm-navy">Request a Consultation</Button>
        </Link>
      </div>
    </div>
  )
}
