import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllBlogPosts } from "@/lib/data"

export default function BlogList() {
  const blogs = getAllBlogPosts()

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-serif text-slate-800 mb-4">Utah Legal Blog</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Real answers for real people — written weekly by our legal assistant AELIA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block h-full">
            <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <p className="text-sm text-slate-500">📅 {post.date}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
