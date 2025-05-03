import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { NewsArticle } from "@/lib/types"

interface NewsDetailProps {
  article: NewsArticle
}

export default function NewsDetail({ article }: NewsDetailProps) {
  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-firm-slate">Article not found</p>
        <Link href="/news" className="mt-4 inline-block">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/news">
        <Button variant="outline" size="sm" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to News
        </Button>
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold font-serif text-firm-navy">{article.title}</h1>
      <p className="text-sm text-firm-slate mt-2">
        🗓 {article.date} · By {article.author}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {article.categories.map((category) => (
          <span key={category} className="text-xs bg-firm-ivory px-2 py-1 rounded text-firm-navy">
            {category}
          </span>
        ))}
      </div>

      <div className="prose prose-lg text-firm-slate mt-8 max-w-none">
        {article.body.split("\n\n").map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      <div className="border-t border-firm-slate/20 pt-6 mt-12">
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
