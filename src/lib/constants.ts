export const APP_NAME = 'EasyPark'
export const APP_DESCRIPTION = 'Smart Parking Management System'

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'
export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''
export const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY || ''

export const ROUTES = {
  HOME: '/',
  SEARCH: '/search',
  PARKING_DETAILS: '/parking/:id',
  BOOKING: '/booking/:id',
  MY_BOOKINGS: '/bookings',
  PROFILE: '/profile',
  LOGIN: '/login',
  REGISTER: '/register',
} as const

export const PARKING_FEATURES = [
  'Covered Parking',
  'Security Camera',
  '24/7 Access',
  'EV Charging',
  'Valet Service',
  'Car Wash',
  'Disabled Access',
  'Indoor Parking',
] as const

export const BOOKING_STATUS = {
  UPCOMING: 'upcoming',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const
