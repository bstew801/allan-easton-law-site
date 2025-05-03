import { getAllBlogPosts } from "@/lib/data"
import { NextResponse } from "next/server"

export async function GET() {
  const blogs = getAllBlogPosts()
  return NextResponse.json(blogs)
}
