"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function FaviconGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [faviconUrl, setFaviconUrl] = useState<string | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 32
    canvas.height = 32

    // Draw background
    ctx.fillStyle = "#1F3B4D" // firm-navy color
    ctx.fillRect(0, 0, 32, 32)

    // Load and draw the courthouse logo
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = "/images/courthouse-logo.png"
    img.onload = () => {
      // Calculate dimensions to fit the logo properly within the favicon
      const scale = Math.min(canvas.width / img.width, canvas.height / img.height) * 0.8
      const x = (canvas.width - img.width * scale) / 2
      const y = (canvas.height - img.height * scale) / 2

      ctx.drawImage(img, x, y, img.width * scale, img.height * scale)

      // Convert canvas to blob and create download link
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          setFaviconUrl(url)
        }
      })
    }
  }, [])

  return (
    <div className="p-6 border rounded-lg bg-white">
      <h3 className="text-lg font-semibold mb-4">Favicon Preview</h3>
      <div className="flex flex-col items-center space-y-4">
        <canvas ref={canvasRef} className="border" style={{ width: "64px", height: "64px" }}></canvas>
        <p className="text-sm text-gray-500">This is your new courthouse logo rendered as a favicon.</p>
        {faviconUrl && (
          <a
            id="favicon-download"
            className="px-4 py-2 bg-firm-burgundy text-white rounded hover:bg-firm-navy transition-colors"
            href={faviconUrl}
            download="favicon.png"
          >
            Download Favicon
          </a>
        )}
      </div>
    </div>
  )
}
