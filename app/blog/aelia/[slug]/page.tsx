import type { Metadata } from "next"
import BlogDetailAELIA from "@/components/blog-detail-aelia"

interface AELIABlogDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: AELIABlogDetailPageProps): Promise<Metadata> {
  // You could fetch the blog post here to get the title and description
  // For now, we'll use a generic title and description
  return {
    title: `Blog Post | Allan & Easton Law Blog`,
    description: "Read our detailed legal analysis on this topic by our AI legal assistant AELIA.",
  }
}

export default function AELIABlogDetailPage({ params }: AELIABlogDetailPageProps) {
  return <BlogDetailAELIA slug={params.slug} />
}
