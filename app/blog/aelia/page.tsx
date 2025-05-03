import type { Metadata } from "next"
import BlogListAELIA from "@/components/blog-list-aelia"

export const metadata: Metadata = {
  title: "AELIA Legal Blog | Allan & Easton Law",
  description:
    "Read our latest articles on Utah criminal defense, DUI laws, domestic violence cases, and more. Real answers for real people by our legal assistant AELIA.",
}

export default function AELIABlogPage() {
  return <BlogListAELIA />
}
