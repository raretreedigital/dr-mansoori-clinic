import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, MessageCircle, Navigation } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Contact Us
            </h1>
            <p className="text-muted-foreground">
              We&apos;re here to help. Reach out to us through any of the following channels.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Phone Card */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Phone Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Clinic Landline</p>
                  <a 
                    href="tel:042989995" 
                    className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    04 298 9995
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Mobile Number</p>
                  <a 
                    href="tel:+971557749338" 
                    className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    055 774 9338
                  </a>
                </div>
                <Button asChild className="w-full mt-2" size="lg">
                  <a href="tel:042989995">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For quick inquiries, message us directly on WhatsApp. We typically respond within a few hours.
                </p>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-1">WhatsApp Number</p>
                  <span className="text-xl font-semibold text-foreground">055 774 9338</span>
                </div>
                <Button 
                  asChild 
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white" 
                  size="lg"
                >
                  <a 
                    href="https://wa.me/971557749338"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Location Card - Full Width */}
            <Card className="border-0 shadow-md md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Clinic Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Mansoori Clinic<br />
                      Opposite Deira City Center Parking 3<br />
                      Zeenah Building, 1st Floor, Office 103<br />
                      Dubai, United Arab Emirates
                    </p>
                    <Button asChild variant="outline" size="lg">
                      <a 
                        href="https://maps.app.goo.gl/jANFTAZ9255fvLmi8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Landmark</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The clinic is conveniently located opposite the Deira City Center Parking 3 entrance. 
                      Look for the Zeenah Building and take the elevator to the 1st floor, Office 103.
                    </p>
                  </div>
                </div>

                {/* Embedded Map */}
                <div className="mt-6 rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.841091749651!2d55.32818!3d25.26282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d4c79d04f6d%3A0x7a47c8d1e31c4f4d!2sDeira%20City%20Centre!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mansoori Clinic Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
