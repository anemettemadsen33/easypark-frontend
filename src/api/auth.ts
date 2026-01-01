import apiClient from './client'
import type { AuthResponse, LoginCredentials, RegisterCredentials, User } from '@/types/user'
import type { ApiResponse } from '@/types/api'

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>(
      '/auth/login',
      credentials
    )
    return data.data
  },

  register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>(
      '/auth/register',
      credentials
    )
    return data.data
  },

  logout: async (): Promise<void> => {
    await apiClient.post('/auth/logout')
  },

  getProfile: async (): Promise<User> => {
    const { data } = await apiClient.get<ApiResponse<User>>('/auth/profile')
    return data.data
  },

  updateProfile: async (updates: Partial<User>): Promise<User> => {
    const { data } = await apiClient.patch<ApiResponse<User>>(
      '/auth/profile',
      updates
    )
    return data.data
  },
}
