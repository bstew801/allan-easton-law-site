import type { Metadata } from "next"
import HeroBannerBlackRed from "@/components/hero-banner-black-red"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LandingGoldNavy from "@/components/landing-gold-navy"
import HeroBannerHeadroomFixed from "@/components/hero-banner-headroom-fixed"

export const metadata: Metadata = {
  title: "Theme Comparison | Allan & Easton Law",
  description: "Compare different theme options for Allan & Easton Law website.",
}

export default function ThemeComparison() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Theme Comparison</h1>
        <p className="mb-8 text-gray-600">
          Compare different theme options for the Allan & Easton Law website. Select a tab below to preview each theme
          style.
        </p>

        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="current">Current Theme</TabsTrigger>
            <TabsTrigger value="gold-navy">Gold & Navy</TabsTrigger>
            <TabsTrigger value="black-red">Black & Red Hero</TabsTrigger>
          </TabsList>

          <div className="border rounded-lg overflow-hidden">
            <TabsContent value="current" className="mt-0">
              <div className="bg-white">
                <HeroBannerHeadroomFixed />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Current Theme</h2>
                  <p>
                    This is your current theme with burgundy, navy, and gold accents. The hero banner features your team
                    photo and transparent gradient overlay with a fixed aspect ratio of 21:9.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gold-navy" className="mt-0">
              <div className="bg-white">
                <div className="h-[600px] overflow-hidden">
                  <LandingGoldNavy />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Gold & Navy Theme</h2>
                  <p>
                    This theme features a navy background with gold accents for a more traditional, prestigious law firm
                    appearance. It has high contrast and creates a sense of authority and tradition.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="black-red" className="mt-0">
              <div className="bg-white">
                <HeroBannerBlackRed />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Black & Red Hero</h2>
                  <p>
                    This hero banner alternative uses a darker overlay with burgundy accents for a more dramatic
                    appearance. It maintains the same layout but with slightly different styling.
                  </p>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
