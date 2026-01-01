import { useState, useEffect } from 'react'
import type { Coordinates } from '@/types/parking'

interface GeolocationState {
  coordinates: Coordinates | null
  error: string | null
  loading: boolean
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    coordinates: null,
    error: null,
    loading: true,
  })

  useEffect(() => {
    if (!navigator.geolocation) {
      setState({
        coordinates: null,
        error: 'Geolocation is not supported by your browser',
        loading: false,
      })
      return
    }

    const onSuccess = (position: GeolocationPosition) => {
      setState({
        coordinates: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        error: null,
        loading: false,
      })
    }

    const onError = (error: GeolocationPositionError) => {
      setState({
        coordinates: null,
        error: error.message,
        loading: false,
      })
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [])

  return state
}
