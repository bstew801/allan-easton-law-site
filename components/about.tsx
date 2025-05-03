import Navigation from "./navigation"

export default function About() {
  return (
    <div>
      <Navigation />
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-4xl font-bold">About Allan & Easton</h1>
        <p className="text-muted-foreground text-lg">
          With decades of combined experience, John L. Allan and John J. Easton have defended thousands of Utahns facing
          life-changing charges. We believe in second chances, strategic clarity, and unwavering respect for our
          clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-semibold">John L. Allan</h2>
            <p className="text-muted-foreground mt-2">
              Former prosecutor turned defense advocate. Brings over 20 years of courtroom insight.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-semibold">John J. Easton</h2>
            <p className="text-muted-foreground mt-2">
              Dedicated to personalized legal care, especially in complex or emotionally charged cases.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
