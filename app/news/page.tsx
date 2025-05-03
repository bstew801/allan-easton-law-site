import type { Metadata } from "next"
import NewsList from "@/components/news-list"

export const metadata: Metadata = {
  title: "Legal News & Insights | Allan & Easton Law",
  description: "Stay informed with the latest legal news and insights from Allan & Easton Law's experienced attorneys.",
}

export default function NewsPage() {
  return <NewsList />
}
