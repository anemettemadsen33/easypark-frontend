import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { bookingsApi } from '@/api/bookings'
import type { CreateBookingData } from '@/types/booking'
import { toast } from 'sonner'

export function useBookings(status?: string) {
  return useQuery({
    queryKey: ['bookings', status],
    queryFn: () => bookingsApi.getAll(status),
  })
}

export function useBookingDetails(id: string) {
  return useQuery({
    queryKey: ['bookings', id],
    queryFn: () => bookingsApi.getById(id),
    enabled: !!id,
  })
}

export function useCreateBooking() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreateBookingData) => bookingsApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] })
      toast.success('Booking created successfully!')
    },
    onError: (error: unknown) => {
      const err = error as { response?: { data?: { message?: string } } }
      toast.error(err.response?.data?.message || 'Failed to create booking')
    },
  })
}

export function useCancelBooking() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => bookingsApi.cancel(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] })
      toast.success('Booking cancelled successfully')
    },
    onError: (error: unknown) => {
      const err = error as { response?: { data?: { message?: string } } }
      toast.error(err.response?.data?.message || 'Failed to cancel booking')
    },
  })
}

export function useBookingStats() {
  return useQuery({
    queryKey: ['bookings', 'stats'],
    queryFn: () => bookingsApi.getStats(),
  })
}
