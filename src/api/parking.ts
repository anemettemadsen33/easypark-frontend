import apiClient from './client'
import type { ParkingLot, ParkingFilters } from '@/types/parking'
import type { ApiResponse, PaginatedResponse } from '@/types/api'

export const parkingApi = {
  getAll: async (filters?: ParkingFilters): Promise<ParkingLot[]> => {
    const { data } = await apiClient.get<PaginatedResponse<ParkingLot>>(
      '/parking',
      { params: filters }
    )
    return data.data
  },

  getById: async (id: string): Promise<ParkingLot> => {
    const { data } = await apiClient.get<ApiResponse<ParkingLot>>(
      `/parking/${id}`
    )
    return data.data
  },

  search: async (filters: ParkingFilters): Promise<ParkingLot[]> => {
    const { data } = await apiClient.get<PaginatedResponse<ParkingLot>>(
      '/parking/search',
      { params: filters }
    )
    return data.data
  },

  getNearby: async (lat: number, lng: number, radius = 5): Promise<ParkingLot[]> => {
    const { data } = await apiClient.get<PaginatedResponse<ParkingLot>>(
      '/parking/nearby',
      { params: { lat, lng, radius } }
    )
    return data.data
  },

  checkAvailability: async (
    parkingLotId: string,
    startDate: string,
    endDate: string
  ): Promise<{ available: boolean; availableSpots: number }> => {
    const { data } = await apiClient.get<ApiResponse<{ available: boolean; availableSpots: number }>>(
      `/parking/${parkingLotId}/availability`,
      { params: { startDate, endDate } }
    )
    return data.data
  },
}
