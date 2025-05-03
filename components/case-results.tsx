import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

interface CaseResult {
  id: string
  title: string
  category: string
  outcome: string
  description: string
  highlight?: boolean
}

const caseResults: CaseResult[] = [
  {
    id: "case-1",
    title: "DUI Charges Dismissed",
    category: "DUI Defense",
    outcome: "All charges dismissed",
    description:
      "Our client was facing a DUI charge with potential license suspension. We successfully challenged the legality of the traffic stop and the accuracy of the field sobriety tests, resulting in all charges being dismissed.",
    highlight: true,
  },
  {
    id: "case-2",
    title: "Felony Drug Possession",
    category: "Drug Charges",
    outcome: "Reduced to misdemeanor",
    description:
      "Client was facing felony drug possession charges. Through careful negotiation and highlighting our client's commitment to rehabilitation, we secured a reduction to a misdemeanor with no jail time.",
  },
  {
    id: "case-3",
    title: "Domestic Violence Case",
    category: "Domestic Violence",
    outcome: "Case dismissed",
    description:
      "Our client was wrongfully accused of domestic violence. We conducted a thorough investigation, interviewed witnesses, and presented evidence that led to the complete dismissal of all charges.",
    highlight: true,
  },
  {
    id: "case-4",
    title: "Aggravated Assault",
    category: "Violent Crimes",
    outcome: "Not guilty verdict",
    description:
      "Client was facing serious aggravated assault charges. After a week-long trial where we presented evidence of self-defense and challenged the prosecution's witnesses, the jury returned a not guilty verdict.",
  },
  {
    id: "case-5",
    title: "Multiple DUI Offender",
    category: "DUI Defense",
    outcome: "No jail time",
    description:
      "Client with previous DUI convictions was facing mandatory jail time. We negotiated an alternative sentencing arrangement that included treatment and community service instead of incarceration.",
  },
  {
    id: "case-6",
    title: "Theft Charges",
    category: "Property Crimes",
    outcome: "Charges reduced",
    description:
      "Client was facing felony theft charges. We negotiated with the prosecutor and secured a reduction to a misdemeanor with probation and no jail time, protecting our client's future employment opportunities.",
  },
  {
    id: "case-7",
    title: "Marijuana Possession",
    category: "Drug Charges",
    outcome: "Case dismissed",
    description:
      "Client was charged with marijuana possession. We successfully challenged the search that led to the discovery of the evidence, resulting in the case being dismissed.",
    highlight: true,
  },
  {
    id: "case-8",
    title: "White Collar Crime",
    category: "Financial Crimes",
    outcome: "Charges significantly reduced",
    description:
      "Client was facing multiple counts of fraud with potential prison time. Our defense strategy and negotiation resulted in a single reduced charge with probation and no incarceration.",
  },
]

export default function CaseResults() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif text-firm-navy mb-4">Our Case Results</h2>
          <p className="text-lg text-firm-slate max-w-3xl mx-auto">
            While every case is unique and results cannot be guaranteed, these examples demonstrate our commitment to
            achieving the best possible outcomes for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseResults.map((caseResult) => (
            <Card
              key={caseResult.id}
              className={`border-none shadow-sm hover:shadow-md transition-shadow ${
                caseResult.highlight ? "ring-1 ring-firm-burgundy" : ""
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-semibold text-firm-navy">{caseResult.title}</CardTitle>
                  {caseResult.highlight && <CheckCircle className="h-5 w-5 text-firm-burgundy" />}
                </div>
                <div className="flex items-center justify-between mt-1">
                  <Badge variant="outline" className="text-xs font-normal text-firm-slate">
                    {caseResult.category}
                  </Badge>
                  <span className="text-sm font-medium text-firm-burgundy">{caseResult.outcome}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-firm-slate text-sm">{caseResult.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-firm-slate italic text-sm max-w-2xl mx-auto">
            Note: These case results are representative examples. The outcome of any legal matter depends on the facts
            and circumstances of each case. Past results do not guarantee or predict future outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}
