import apiClient from './client'
import type { ApiResponse } from '@/types/api'

interface PaymentIntent {
  clientSecret: string
  amount: number
}

interface PaymentConfirmation {
  success: boolean
  paymentId: string
  bookingId: string
}

interface PaymentHistory {
  id: string
  amount: number
  date: string
  status: string
}

export const paymentsApi = {
  createPaymentIntent: async (
    bookingId: string,
    amount: number
  ): Promise<PaymentIntent> => {
    const { data } = await apiClient.post<ApiResponse<PaymentIntent>>(
      '/payments/create-intent',
      { bookingId, amount }
    )
    return data.data
  },

  confirmPayment: async (
    paymentId: string,
    bookingId: string
  ): Promise<PaymentConfirmation> => {
    const { data } = await apiClient.post<ApiResponse<PaymentConfirmation>>(
      '/payments/confirm',
      { paymentId, bookingId }
    )
    return data.data
  },

  getPaymentHistory: async (): Promise<PaymentHistory[]> => {
    const { data } = await apiClient.get<ApiResponse<PaymentHistory[]>>(
      '/payments/history'
    )
    return data.data
  },
}
