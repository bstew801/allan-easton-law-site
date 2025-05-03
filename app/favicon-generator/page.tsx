import FaviconGenerator from "@/components/favicon-generator"

export default function FaviconGeneratorPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Favicon Generator</h1>
      <p className="mb-8">
        This tool creates a simple favicon based on the courthouse logo design. You can download the generated favicon
        and use it for your website.
      </p>

      <FaviconGenerator />

      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">How to use this favicon:</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Download the favicon using the button above</li>
          <li>Rename it to "favicon.ico" (or keep as PNG if preferred)</li>
          <li>Place it in the "public" folder of your Next.js project</li>
          <li>The favicon is already configured in your layout.tsx file</li>
        </ol>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-md mt-6">
          <h3 className="font-semibold text-amber-800">For best results:</h3>
          <p className="text-amber-700">
            For a professional favicon, consider using a graphics editor to create multiple sizes (16x16, 32x32,
            192x192, 512x512) based on your actual courthouse logo. This generator provides a simplified version for
            demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  )
}
