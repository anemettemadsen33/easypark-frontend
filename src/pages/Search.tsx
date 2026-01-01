import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Search as SearchIcon, MapPin, Filter } from 'lucide-react'

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Find Parking</h1>
        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              placeholder="Enter location or address..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12"
            />
          </div>
          <Button size="lg">
            <SearchIcon className="mr-2 h-5 w-5" />
            Search
          </Button>
          <Button size="lg" variant="outline">
            <Filter className="mr-2 h-5 w-5" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Available Parking</h2>
          <Card>
            <CardHeader>
              <CardTitle>Downtown Parking Center</CardTitle>
              <CardDescription>
                <MapPin className="inline h-4 w-4 mr-1" />
                123 Main Street, Downtown
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-primary">$5/hr</p>
                  <p className="text-sm text-muted-foreground">15 spots available</p>
                </div>
                <Button>View Details</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-lg p-4 h-96 flex items-center justify-center">
          <p className="text-muted-foreground">Map View (Google Maps Integration)</p>
        </div>
      </div>
    </div>
  )
}
