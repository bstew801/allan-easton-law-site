import { NextResponse } from "next/server"
import { getAllAELIABlogPosts } from "@/lib/aelia-data"

export async function GET() {
  try {
    const posts = getAllAELIABlogPosts()
    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error fetching AELIA blog posts:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}
