export interface ParkingLot {
  id: string
  name: string
  address: string
  description: string
  latitude: number
  longitude: number
  pricePerHour: number
  pricePerDay: number
  totalSpots: number
  availableSpots: number
  features: string[]
  images: string[]
  rating: number
  reviewCount: number
  createdAt: string
  updatedAt: string
}

export interface ParkingSpot {
  id: string
  parkingLotId: string
  spotNumber: string
  level: string
  isAvailable: boolean
  type: 'standard' | 'compact' | 'large' | 'ev' | 'disabled'
}

export interface ParkingFilters {
  location?: string
  startDate?: Date
  endDate?: Date
  minPrice?: number
  maxPrice?: number
  features?: string[]
  sortBy?: 'price' | 'distance' | 'rating'
}

export interface Coordinates {
  lat: number
  lng: number
}
