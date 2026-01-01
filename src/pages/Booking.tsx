import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { bookingSchema } from '@/lib/validation'
import { formatCurrency } from '@/lib/utils'

export default function Booking() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingSchema),
  })

  const onSubmit = async () => {
    setIsLoading(true)
    // Simulate booking
    setTimeout(() => {
      setIsLoading(false)
      navigate('/bookings')
    }, 2000)
  }

  return (
    <div className="container py-8 max-w-4xl">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
        ← Back
      </Button>

      <h1 className="text-3xl font-bold mb-8">Book Your Parking Spot</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Booking Details</CardTitle>
              <CardDescription>Fill in your information to complete the booking</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date & Time</Label>
                    <Input
                      id="startDate"
                      type="datetime-local"
                      {...register('startDate', { valueAsDate: true })}
                      disabled={isLoading}
                    />
                    {errors.startDate && (
                      <p className="text-sm text-destructive">{errors.startDate.message as string}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endDate">End Date & Time</Label>
                    <Input
                      id="endDate"
                      type="datetime-local"
                      {...register('endDate', { valueAsDate: true })}
                      disabled={isLoading}
                    />
                    {errors.endDate && (
                      <p className="text-sm text-destructive">{errors.endDate.message as string}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vehicleModel">Vehicle Model</Label>
                  <Input
                    id="vehicleModel"
                    placeholder="e.g., Toyota Camry 2022"
                    {...register('vehicleModel')}
                    disabled={isLoading}
                  />
                  {errors.vehicleModel && (
                    <p className="text-sm text-destructive">{errors.vehicleModel.message as string}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="licensePlate">License Plate</Label>
                  <Input
                    id="licensePlate"
                    placeholder="e.g., ABC-1234"
                    {...register('licensePlate')}
                    disabled={isLoading}
                  />
                  {errors.licensePlate && (
                    <p className="text-sm text-destructive">{errors.licensePlate.message as string}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    placeholder="e.g., +1 234 567 8900"
                    {...register('phoneNumber')}
                    disabled={isLoading}
                  />
                  {errors.phoneNumber && (
                    <p className="text-sm text-destructive">{errors.phoneNumber.message as string}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? 'Processing...' : 'Confirm Booking'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-1">Location</p>
                <p className="text-sm text-muted-foreground">Downtown Parking Center</p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Rate</p>
                <p className="text-sm text-muted-foreground">$5/hour</p>
              </div>
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total</span>
                  <span className="text-2xl font-bold text-primary">{formatCurrency(25)}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Estimated for 5 hours</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
