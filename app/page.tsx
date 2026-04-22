import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Mansoori Clinic DXB
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto text-pretty">
              Professional healthcare services in the heart of Dubai, 
              opposite Deira City Center Parking 3.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="tel:042989995">
                  <Phone className="h-5 w-5 mr-2" />
                  Call 04 298 9995
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <a 
                  href="https://maps.app.goo.gl/jANFTAZ9255fvLmi8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  View on Map
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Info Cards Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Location Card */}
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Opposite Deira City Center Parking 3,<br />
                    Zeenah Building, 1st Floor, Office 103<br />
                    Dubai, UAE
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/jANFTAZ9255fvLmi8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline"
                  >
                    Get Directions
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>

              {/* Timings Card */}
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    Clinic Timings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-muted-foreground text-sm">
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 7:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sun - Wed</span>
                      <span>11:00 AM - 7:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Thursday</span>
                      <span>11:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between text-destructive">
                      <span>Friday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                  <Link 
                    href="/timings"
                    className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline mt-4"
                  >
                    View Full Schedule
                  </Link>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="border-0 shadow-md md:col-span-2 lg:col-span-1">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Landline</p>
                      <a href="tel:042989995" className="text-foreground font-medium hover:text-primary">
                        04 298 9995
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Mobile / WhatsApp</p>
                      <a href="tel:+971557749338" className="text-foreground font-medium hover:text-primary">
                        055 774 9338
                      </a>
                    </div>
                  </div>
                  <Link 
                    href="/contact"
                    className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline mt-4"
                  >
                    All Contact Options
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="py-12 bg-accent/10">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Need Quick Assistance?
            </h2>
            <p className="text-muted-foreground mb-6">
              Message us directly on WhatsApp for faster response
            </p>
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white">
              <a 
                href="https://wa.me/971557749338"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
