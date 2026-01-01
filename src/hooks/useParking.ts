import { useQuery, useMutation } from '@tanstack/react-query'
import { parkingApi } from '@/api/parking'
import type { ParkingFilters } from '@/types/parking'

export function useParking(filters?: ParkingFilters) {
  return useQuery({
    queryKey: ['parking', filters],
    queryFn: () => parkingApi.getAll(filters),
  })
}

export function useParkingDetails(id: string) {
  return useQuery({
    queryKey: ['parking', id],
    queryFn: () => parkingApi.getById(id),
    enabled: !!id,
  })
}

export function useSearchParking() {
  return useMutation({
    mutationFn: (filters: ParkingFilters) => parkingApi.search(filters),
  })
}

export function useNearbyParking(lat: number, lng: number, radius?: number) {
  return useQuery({
    queryKey: ['parking', 'nearby', lat, lng, radius],
    queryFn: () => parkingApi.getNearby(lat, lng, radius),
    enabled: !!lat && !!lng,
  })
}

export function useCheckAvailability() {
  return useMutation({
    mutationFn: ({
      parkingLotId,
      startDate,
      endDate,
    }: {
      parkingLotId: string
      startDate: string
      endDate: string
    }) => parkingApi.checkAvailability(parkingLotId, startDate, endDate),
  })
}
