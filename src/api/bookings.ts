import apiClient from './client'
import type { Booking, CreateBookingData, BookingStats } from '@/types/booking'
import type { ApiResponse, PaginatedResponse } from '@/types/api'

export const bookingsApi = {
  getAll: async (status?: string): Promise<Booking[]> => {
    const { data } = await apiClient.get<PaginatedResponse<Booking>>(
      '/bookings',
      { params: { status } }
    )
    return data.data
  },

  getById: async (id: string): Promise<Booking> => {
    const { data } = await apiClient.get<ApiResponse<Booking>>(
      `/bookings/${id}`
    )
    return data.data
  },

  create: async (bookingData: CreateBookingData): Promise<Booking> => {
    const { data } = await apiClient.post<ApiResponse<Booking>>(
      '/bookings',
      bookingData
    )
    return data.data
  },

  cancel: async (id: string): Promise<Booking> => {
    const { data } = await apiClient.patch<ApiResponse<Booking>>(
      `/bookings/${id}/cancel`
    )
    return data.data
  },

  getStats: async (): Promise<BookingStats> => {
    const { data } = await apiClient.get<ApiResponse<BookingStats>>(
      '/bookings/stats'
    )
    return data.data
  },

  getUserBookings: async (userId: string): Promise<Booking[]> => {
    const { data } = await apiClient.get<PaginatedResponse<Booking>>(
      `/bookings/user/${userId}`
    )
    return data.data
  },
}
