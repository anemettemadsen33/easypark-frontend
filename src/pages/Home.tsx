import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Search, MapPin, Clock, Shield, Star } from 'lucide-react'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Find & Book Parking
              <span className="text-primary"> Effortlessly</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Smart parking management system for modern cities. Book parking spots in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" onClick={() => navigate('/search')}>
                <Search className="mr-2 h-5 w-5" />
                Find Parking Now
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/register')}>
                Sign Up Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose EasyPark?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We make parking simple, secure, and convenient for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 space-y-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Easy Search</h3>
                <p className="text-sm text-muted-foreground">
                  Find parking spots near you with our advanced search and map features.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 space-y-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">24/7 Access</h3>
                <p className="text-sm text-muted-foreground">
                  Book and access parking anytime, anywhere. No waiting, no hassle.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 space-y-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">
                  Pay securely with multiple payment options. Your data is protected.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 space-y-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Top Rated</h3>
                <p className="text-sm text-muted-foreground">
                  Choose from verified parking spots with real user reviews and ratings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Book parking in three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="font-semibold text-lg">Search Location</h3>
              <p className="text-sm text-muted-foreground">
                Enter your destination and find available parking spots nearby.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="font-semibold text-lg">Book Your Spot</h3>
              <p className="text-sm text-muted-foreground">
                Select your preferred parking, choose time, and make a secure payment.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="font-semibold text-lg">Park & Go</h3>
              <p className="text-sm text-muted-foreground">
                Arrive at your spot, scan your QR code, and start parking. It's that easy!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Find Your Perfect Parking Spot?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied users who've made parking stress-free.
          </p>
          <Button size="lg" variant="secondary" onClick={() => navigate('/search')}>
            <MapPin className="mr-2 h-5 w-5" />
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  )
}
