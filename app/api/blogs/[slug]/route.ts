import { getBlogPostBySlug } from "@/lib/data"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug
  const blog = getBlogPostBySlug(slug)

  if (!blog) {
    return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
  }

  return NextResponse.json(blog)
}
