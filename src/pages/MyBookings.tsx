import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Clock, Calendar } from 'lucide-react'
import { formatCurrency, formatDateTime } from '@/lib/utils'

export default function MyBookings() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'active' | 'past'>('upcoming')

  // Mock data
  const bookings = [
    {
      id: '1',
      parkingLot: 'Downtown Parking Center',
      address: '123 Main Street, Downtown',
      startDate: new Date('2026-01-15T09:00:00'),
      endDate: new Date('2026-01-15T17:00:00'),
      status: 'upcoming',
      amount: 40,
    },
  ]

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

      <div className="flex gap-2 mb-6">
        <Button
          variant={activeTab === 'upcoming' ? 'default' : 'outline'}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </Button>
        <Button
          variant={activeTab === 'active' ? 'default' : 'outline'}
          onClick={() => setActiveTab('active')}
        >
          Active
        </Button>
        <Button
          variant={activeTab === 'past' ? 'default' : 'outline'}
          onClick={() => setActiveTab('past')}
        >
          Past
        </Button>
      </div>

      <div className="space-y-4">
        {bookings.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground mb-4">No {activeTab} bookings found</p>
              <Button>Find Parking</Button>
            </CardContent>
          </Card>
        ) : (
          bookings.map((booking) => (
            <Card key={booking.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{booking.parkingLot}</CardTitle>
                    <CardDescription>
                      <MapPin className="inline h-4 w-4 mr-1" />
                      {booking.address}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">
                    {booking.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground">Start:</span>
                    <span className="ml-2 font-medium">{formatDateTime(booking.startDate)}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground">End:</span>
                    <span className="ml-2 font-medium">{formatDateTime(booking.endDate)}</span>
                  </div>
                  <div className="pt-3 border-t flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Amount</p>
                      <p className="text-2xl font-bold text-primary">{formatCurrency(booking.amount)}</p>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline">View Details</Button>
                      {activeTab === 'upcoming' && (
                        <Button variant="destructive">Cancel</Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
