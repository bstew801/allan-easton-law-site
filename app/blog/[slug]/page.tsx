import type { Metadata } from "next"
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/data"
import BlogDetail from "@/components/blog-detail"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found | Allan & Easton Law",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Allan & Easton Law Blog`,
    description: post.excerpt,
  }
}

export function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogDetail post={post} />
}
