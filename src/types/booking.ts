import type { ParkingLot } from './parking'

export interface Booking {
  id: string
  userId: string
  parkingLotId: string
  parkingLot?: ParkingLot
  spotId: string
  spotNumber: string
  startDate: string
  endDate: string
  vehicleModel: string
  licensePlate: string
  phoneNumber: string
  totalAmount: number
  status: 'upcoming' | 'active' | 'completed' | 'cancelled'
  paymentStatus: 'pending' | 'paid' | 'refunded'
  qrCode?: string
  createdAt: string
  updatedAt: string
}

export interface CreateBookingData {
  parkingLotId: string
  startDate: Date
  endDate: Date
  vehicleModel: string
  licensePlate: string
  phoneNumber: string
}

export interface BookingStats {
  totalBookings: number
  activeBookings: number
  upcomingBookings: number
  totalSpent: number
}
