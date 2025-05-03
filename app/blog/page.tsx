import type { Metadata } from "next"
import BlogList from "@/components/blog-list"

export const metadata: Metadata = {
  title: "Legal Blog | Allan & Easton Law",
  description:
    "Read our latest articles on Utah criminal defense, DUI laws, domestic violence cases, and more. Real answers for real people by our legal assistant AELIA.",
}

export default function BlogPage() {
  return <BlogList />
}
