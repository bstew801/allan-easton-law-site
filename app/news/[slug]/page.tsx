import type { Metadata } from "next"
import { notFound } from "next/navigation"
import NewsDetail from "@/components/news-detail"
import { getNewsArticleBySlug } from "@/lib/news-data"

interface NewsDetailPageProps {
  params: {
    slug: string
  }
}

export const metadata: Metadata = {
  title: "News Article | Allan & Easton Law",
  description: "Read our latest legal news and insights.",
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = await getNewsArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return <NewsDetail article={article} />
}
