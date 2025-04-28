"use client"

import { createContext, useContext, useState } from "react"

// Create app context
const AppContext = createContext()

// App provider component
export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("home")
  const [travelPreferences, setTravelPreferences] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userData, setUserData] = useState({
    name: "Chhavi",
    avatar: null,
  })

  // Mock trip data
  const [tripData] = useState({
    id: "tokyo-trip",
    destination: "TOKYO",
    dateRange: "27 JAN - 31 JAN 2025",
    duration: { days: 5, nights: 4 },
    image: "/images/tokyo.jpg",
  })

  // Mock flight data
  const [flightData] = useState({
    id: "del-nrt-flight",
    date: "Sat, 27 JAN, 10:00 am",
    departure: { code: "DEL", city: "Delhi, India" },
    arrival: { code: "NRT", city: "Tokyo, Japan" },
    price: 549.0,
    airline: "Japan Airlines",
    flightNumber: "JL 472",
    departureTime: "10:00 AM",
    arrivalTime: "8:45 PM",
    duration: "9h 45m",
    class: "Economy",
    baggage: "2 x 23kg",
    meal: "Included",
  })

  // Mock hotel data
  const [hotelData] = useState([
    {
      id: "hotel-1",
      name: "Shinagawa Prince Hotel",
      rating: 4.5,
      price: 120,
      checkIn: "28 JAN 2025, 11:00 am",
      checkOut: "30 JAN 2025, 9:00 am",
      nights: 3,
      image: "/images/hotel1.jpg",
      confirmed: true,
      location: "Central Tokyo, 2.5 km from Tokyo Station",
      amenities: ["Free WiFi", "Swimming Pool", "Breakfast", "Fitness Center", "Room Service", "Air Conditioning"],
    },
    {
      id: "hotel-2",
      name: "Mercure Tokyo Hotel",
      rating: 4.2,
      price: 95,
      checkIn: "30 JAN 2025, 11:00 am",
      checkOut: "31 JAN 2025, 9:00 am",
      nights: 2,
      image: "/images/hotel2.jpg",
      confirmed: true,
      location: "Shinjuku, 1.8 km from Shinjuku Station",
      amenities: ["Free WiFi", "Breakfast", "Air Conditioning", "Laundry Service"],
    },
  ])

  // Mock activity data
  const [activityData] = useState([
    {
      id: "activity-1",
      title: "Sensō-ji Temple & Nakamise Shopping Street",
      timing: "9:00 am (Morning)",
      duration: "4.5 hrs",
      pickup: "From Hotel",
      image: "/images/senso-ji.jpg",
      day: "27",
      description:
        "Visit Tokyo's oldest temple, Sensō-ji, and explore the vibrant Nakamise Shopping Street. Experience traditional Japanese culture and shop for souvenirs, local snacks, and crafts.",
    },
    {
      id: "activity-2",
      title: "Tokyo Sky Tree",
      timing: "2:00 pm (Afternoon)",
      duration: "3 hours",
      pickup: "From Nakamise Street",
      image: "/images/skytree.jpg",
      day: "27",
      description:
        "Ascend the Tokyo Sky Tree, one of the world's tallest towers, for breathtaking panoramic views of Tokyo. The observation decks offer 360-degree views of the sprawling metropolis.",
    },
    {
      id: "activity-3",
      title: "Kimono Wearing",
      timing: "Anytime before 8:00pm",
      duration: "1.5 hours",
      pickup: "From Hotel",
      image: "/images/kimono.jpg",
      day: "27",
      description:
        "Experience traditional Japanese culture by trying on an authentic kimono. Professional staff will help you select and wear a kimono of your choice, perfect for memorable photos in Tokyo.",
    },
    {
      id: "activity-4",
      title: "Tokyo Disneyland",
      timing: "10:00 am (Full Day)",
      duration: "8 hours",
      pickup: "From Hotel",
      image: "/images/disneyland.jpg",
      day: "28",
      description:
        "Enjoy a magical day at Tokyo Disneyland, featuring unique attractions, parades, and entertainment that blend Disney magic with Japanese culture.",
    },
    {
      id: "activity-5",
      title: "Shibuya Crossing & Shopping",
      timing: "2:00 pm (Afternoon)",
      duration: "4 hours",
      pickup: "From Hotel",
      image: "/images/shibuya.jpg",
      day: "29",
      description:
        "Experience the famous Shibuya Crossing, one of the busiest intersections in the world, and explore the surrounding shopping district with trendy boutiques and department stores.",
    },
  ])

  // Weather data
  const [weatherData] = useState({
    location: "Tokyo, Japan",
    temperature: 18,
    condition: "sunny",
    humidity: 65,
    wind: 12,
  })

  const value = {
    activeTab,
    setActiveTab,
    travelPreferences,
    setTravelPreferences,
    isAuthenticated,
    setIsAuthenticated,
    userData,
    setUserData,
    tripData,
    flightData,
    hotelData,
    activityData,
    weatherData,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// Custom hook to use app context
export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
