import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-800 mb-4">Page Not Found</h1>
      <p className="text-lg text-slate-600 mb-8 max-w-md">
        We couldn't find the page you were looking for. Let's get you back on track.
      </p>
      <Link href="/">
        <Button size="lg">Return to Homepage</Button>
      </Link>
    </div>
  )
}
