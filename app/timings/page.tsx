import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Info } from "lucide-react"

const schedule = [
  { day: "Saturday", hours: "10:00 AM - 7:00 PM", isOpen: true },
  { day: "Sunday", hours: "11:00 AM - 7:00 PM", isOpen: true },
  { day: "Monday", hours: "11:00 AM - 7:00 PM", isOpen: true },
  { day: "Tuesday", hours: "11:00 AM - 7:00 PM", isOpen: true },
  { day: "Wednesday", hours: "11:00 AM - 7:00 PM", isOpen: true },
  { day: "Thursday", hours: "11:00 AM - 6:00 PM", isOpen: true },
  { day: "Friday", hours: "Closed", isOpen: false },
]

function getCurrentDay(): string {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return days[new Date().getDay()]
}

export default function TimingsPage() {
  const today = getCurrentDay()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Clinic Timings
            </h1>
            <p className="text-muted-foreground">
              Our weekly schedule for your convenience
            </p>
          </div>

          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <ul className="divide-y divide-border">
                {schedule.map((item) => (
                  <li 
                    key={item.day}
                    className={`flex items-center justify-between px-6 py-4 ${
                      item.day === today ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.day === today && (
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      )}
                      <span className={`font-medium ${item.day === today ? "text-primary" : "text-foreground"}`}>
                        {item.day}
                        {item.day === today && (
                          <span className="text-xs text-muted-foreground ml-2">(Today)</span>
                        )}
                      </span>
                    </div>
                    <span className={item.isOpen ? "text-muted-foreground" : "text-destructive font-medium"}>
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mt-8 p-4 bg-accent/10 rounded-lg flex items-start gap-3">
            <Info className="h-5 w-5 text-accent mt-0.5 shrink-0" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Note</p>
              <p>
                Timings may vary during public holidays. Please call ahead to confirm availability 
                on special occasions.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
