import { Button } from "@/components/ui/button"
import Navigation from "./navigation"
import Link from "next/link"
import Testimonials from "./testimonials"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Shield, Scale, Award } from "lucide-react"

export default function Homepage() {
  const services = [
    {
      title: "DUI Defense",
      description: "Strategic, compassionate defense tailored to your situation.",
      icon: <Shield className="h-8 w-8 text-primary" />,
    },
    {
      title: "Domestic Violence",
      description: "Sensitive representation for complex family situations.",
      icon: <Scale className="h-8 w-8 text-primary" />,
    },
    {
      title: "Drug Charges",
      description: "Experienced advocacy for substance-related offenses.",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <div>
      <Navigation />
      <section className="text-center py-20 bg-gray-50 px-6">
        <h1 className="text-5xl font-bold mb-4">You Deserve a Legal Team That Fights for You</h1>
        <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
          Allan & Easton defends good people facing tough legal moments. Let's talk about your options.
        </p>
        <div className="space-x-4">
          <Link href="/contact">
            <Button size="lg">Request a Free Consultation</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Legal Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card key={i} className="transition-all hover:shadow-lg">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Testimonials />

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Case?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Schedule a free 30-minute consultation with one of our attorneys. We'll listen to your story and help you
            understand your options.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
