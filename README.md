# 🅿️ EasyPark Frontend - Smart Parking Management System

A modern, responsive web application for smart parking management built with React 18, TypeScript, and Vite. Find, book, and manage parking spots with ease.

![Built with React](https://img.shields.io/badge/React-18.3-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.4-purple.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg)

## ✨ Features

- 🔍 **Smart Search** - Find parking spots with advanced filters and Google Maps integration
- 📅 **Easy Booking** - Book parking spots with date/time selection
- 💳 **Secure Payments** - Stripe integration ready for secure transactions
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🌙 **Dark Mode** - Built-in light and dark theme support
- 🔐 **Authentication** - Secure user authentication with JWT
- 📊 **User Dashboard** - Manage bookings and profile in one place
- 🗺️ **Google Maps** - Interactive maps with real-time parking availability
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Google Maps API key (optional, for maps functionality)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/anemettemadsen33/easypark-frontend.git
cd easypark-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key_here
```

4. **Start development server**
```bash
npm run dev
```

5. **Open your browser**
```
http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🏗️ Project Structure

```
src/
├── api/                      # API client & endpoints
│   ├── client.ts            # Axios instance with interceptors
│   ├── auth.ts              # Authentication API
│   ├── parking.ts           # Parking lots API
│   ├── bookings.ts          # Bookings API
│   └── payments.ts          # Payment API
│
├── components/              # React components
│   ├── ui/                  # UI components (Button, Input, Card, etc.)
│   ├── layout/
│   │   ├── Header.tsx       # App header with navigation
│   │   ├── Footer.tsx       # App footer
│   │   └── Layout.tsx       # Main layout wrapper
│   ├── parking/             # Parking-related components
│   ├── booking/             # Booking-related components
│   └── auth/
│       └── ProtectedRoute.tsx # Auth guard component
│
├── pages/                   # Page components
│   ├── Home.tsx            # Homepage
│   ├── Search.tsx          # Search results page
│   ├── ParkingDetails.tsx  # Parking details page
│   ├── Booking.tsx         # Booking page
│   ├── MyBookings.tsx      # User bookings list
│   ├── Profile.tsx         # User profile page
│   ├── Login.tsx           # Login page
│   └── Register.tsx        # Registration page
│
├── hooks/                   # Custom React hooks
│   ├── useParking.ts       # Parking data hook
│   ├── useBooking.ts       # Booking hook
│   └── useGeolocation.ts   # Geolocation hook
│
├── context/                 # React Context
│   ├── AuthContext.tsx     # Auth state management
│   └── ThemeContext.tsx    # Theme state
│
├── types/                   # TypeScript types
│   ├── parking.ts          # Parking types
│   ├── user.ts             # User types
│   ├── booking.ts          # Booking types
│   └── api.ts              # API response types
│
├── lib/                     # Utilities
│   ├── utils.ts            # Utility functions
│   ├── constants.ts        # App constants
│   └── validation.ts       # Zod validation schemas
│
├── App.tsx                  # Root component with routing
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

## 🛠️ Tech Stack

### Core
- **React 18.3** - UI library
- **TypeScript 5.5** - Type safety
- **Vite 5.4** - Build tool & dev server

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Re-usable component library
- **Lucide React** - Icon library

### State Management & Data Fetching
- **TanStack Query** - Server state management
- **React Context** - Global client state
- **Axios** - HTTP client

### Forms & Validation
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Routing
- **React Router DOM 6** - Client-side routing

### UI Features
- **next-themes** - Dark/light mode
- **sonner** - Toast notifications
- **date-fns** - Date manipulation

## 🎨 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

## 🔑 Key Features Explained

### Authentication
- JWT-based authentication
- Secure token storage in localStorage
- Auto-redirect on unauthorized access
- Remember me functionality
- Protected routes for authenticated users

### Booking System
- Date and time selection
- Vehicle information management
- Real-time price calculation
- Booking status tracking (upcoming, active, completed, cancelled)
- Booking history

### Maps Integration
Ready for Google Maps integration:
- Search parking by location
- Display parking on interactive maps
- Get directions to parking spots
- Show user's current location

### Payment Integration
Prepared for Stripe integration:
- Secure payment processing
- Multiple payment methods
- Payment history tracking

## 🎨 Theming

The app supports light and dark modes out of the box. Toggle between themes using the theme switcher in the header.

### Customizing Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: 'your-color',
      // ... other colors
    }
  }
}
```

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_BASE_URL` | Backend API URL | Yes |
| `VITE_GOOGLE_MAPS_API_KEY` | Google Maps API key | Optional |
| `VITE_STRIPE_PUBLIC_KEY` | Stripe publishable key | Optional |

## 📱 Responsive Design

The application is fully responsive and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)

## 🧪 API Integration

The app expects a backend API with the following endpoints:

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/logout` - User logout
- `GET /auth/profile` - Get user profile
- `PATCH /auth/profile` - Update user profile

### Parking
- `GET /parking` - Get all parking lots
- `GET /parking/:id` - Get parking details
- `GET /parking/search` - Search parking lots
- `GET /parking/nearby` - Get nearby parking
- `GET /parking/:id/availability` - Check availability

### Bookings
- `GET /bookings` - Get user bookings
- `GET /bookings/:id` - Get booking details
- `POST /bookings` - Create booking
- `PATCH /bookings/:id/cancel` - Cancel booking
- `GET /bookings/stats` - Get booking statistics

### Payments
- `POST /payments/create-intent` - Create payment intent
- `POST /payments/confirm` - Confirm payment
- `GET /payments/history` - Get payment history

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the amazing component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Lucide](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS

## 📧 Support

For support, email support@easypark.com or open an issue on GitHub.

---

Made with ❤️ by the EasyPark Team
