import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Star } from 'lucide-react'

export default function ParkingDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="container py-8">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
        ← Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
            <p className="text-muted-foreground">Parking Image Gallery</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Downtown Parking Center</CardTitle>
              <CardDescription>
                <MapPin className="inline h-4 w-4 mr-1" />
                123 Main Street, Downtown
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="font-semibold">4.5</span>
                  <span className="text-sm text-muted-foreground ml-1">(120 reviews)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-primary">$5/hr</p>
                  <p className="text-sm text-muted-foreground">Hourly Rate</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">$30/day</p>
                  <p className="text-sm text-muted-foreground">Daily Rate</p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Features</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">24/7 Access</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Security Camera</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Covered</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">EV Charging</span>
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={() => navigate(`/booking/${id}`)}>
                Book Now
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <p className="text-muted-foreground">Map with Directions</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>About This Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Secure parking facility located in the heart of downtown. Easy access to major
                attractions, shopping centers, and business districts. Open 24/7 with state-of-the-art
                security systems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
