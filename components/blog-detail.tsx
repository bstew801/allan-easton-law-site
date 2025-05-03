import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { BlogPost } from "@/lib/types"

export default function BlogDetail({ post }: { post: BlogPost }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
      <Link href="/blog">
        <Button variant="outline" size="sm" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Button>
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold font-serif text-slate-800">{post.title}</h1>
      <p className="text-sm text-slate-500">Published: {post.date}</p>

      <div className="prose prose-slate max-w-none">
        {post.body.split("\n\n").map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      <div className="border-t border-slate-200 pt-6 mt-8">
        <h3 className="text-lg font-semibold mb-2">Need legal help?</h3>
        <p className="text-slate-600 mb-4">
          If you're facing a similar situation, our attorneys are here to help. Contact us for a free consultation.
        </p>
        <Link href="/contact">
          <Button>Request a Consultation</Button>
        </Link>
      </div>
    </div>
  )
}
