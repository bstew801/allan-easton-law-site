import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Scale, FileText, Users, AlertTriangle, Briefcase } from "lucide-react"

export default function ServiceGrid() {
  const services = [
    {
      title: "DUI Defense",
      description: "Strategic, compassionate defense tailored to your situation.",
      icon: <Shield className="h-8 w-8 text-firm-burgundy" />,
    },
    {
      title: "Domestic Violence",
      description: "Sensitive representation for complex family situations.",
      icon: <Users className="h-8 w-8 text-firm-burgundy" />,
    },
    {
      title: "Drug Charges",
      description: "Experienced advocacy for substance-related offenses.",
      icon: <AlertTriangle className="h-8 w-8 text-firm-burgundy" />,
    },
    {
      title: "Criminal Defense",
      description: "Protecting your rights throughout the legal process.",
      icon: <Scale className="h-8 w-8 text-firm-burgundy" />,
    },
    {
      title: "Record Expungement",
      description: "Help clearing your record for a fresh start.",
      icon: <FileText className="h-8 w-8 text-firm-burgundy" />,
    },
    {
      title: "Legal Consultation",
      description: "Expert guidance on your legal options and rights.",
      icon: <Briefcase className="h-8 w-8 text-firm-burgundy" />,
    },
  ]

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold font-serif text-firm-navy text-center mb-12">Our Legal Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl text-firm-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-firm-slate">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
