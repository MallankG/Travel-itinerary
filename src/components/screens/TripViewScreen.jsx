"use client"

import { useState } from "react"
import StatusBar from "../layout/StatusBar"
import BottomNavigation from "../layout/BottomNavigation"
import UserHeader from "../ui/UserHeader"
import TripCard from "../ui/TripCard"
import FlightCard from "../ui/FlightCard"
import HotelList from "../ui/HotelList"
import ActivityCalendar from "../ui/ActivityCalendar"
import ActivityList from "../ui/ActivityList"
import WeatherWidget from "../integrations/WeatherWidget"
import { useApp } from "../../contexts/AppContext"
import { useTheme } from "../../contexts/ThemeContext"

const TripViewScreen = ({ onItemClick }) => {
  const { tripData, flightData, hotelData, activityData, weatherData } = useApp()
  const { theme } = useTheme()
  const [selectedDay, setSelectedDay] = useState("27")

  // Filter activities by selected day
  const filteredActivities = activityData.filter((activity) => activity.day === selectedDay)

  return (
    <div className={`trip-view-screen ${theme}`}>
      {/* Status bar */}
      <StatusBar />

      {/* Header */}
      <UserHeader />

      <div className="trip-view-content">
        {/* Trip Card */}
        <div className="section">
          <p className="section-title">Your Upcoming Trip</p>
          <TripCard trip={tripData} onClick={() => onItemClick("trip", tripData.id, tripData)} />
        </div>

        <div className="flex-row">
          <div className="flex-column">
            {/* Flight Details */}
            <div className="section">
              <div className="section-header">
                <p className="section-title">Flight Details</p>
                <p className="price">${flightData.price.toFixed(2)}</p>
              </div>
              <FlightCard flight={flightData} onClick={() => onItemClick("flight", flightData.id, flightData)} />
            </div>

            {/* Weather Widget */}
            <WeatherWidget weather={weatherData} />
          </div>
        </div>

        {/* Accommodation */}
        <div className="section">
          <div className="section-header">
            <p className="section-title">Accommodation</p>
            <p className="see-all">See all</p>
          </div>
          <HotelList hotels={hotelData} onHotelClick={(hotel) => onItemClick("hotel", hotel.id, hotel)} />
        </div>

        {/* Activities */}
        <div className="section">
          <div className="section-header">
            <p className="section-title">Activities</p>
            <p className="see-all">See all</p>
          </div>

          <div className="activity-filters">
            <button className="filter-button active">Day Plan</button>
            <button className="filter-button">All Activities</button>
          </div>

          {/* Calendar */}
          <ActivityCalendar selectedDay={selectedDay} onDaySelect={setSelectedDay} />

          <div className="day-info">
            <span className="day-badge">
              Day {Number.parseInt(selectedDay) - 26} - {selectedDay} JAN 2025
            </span>
            <span className="activity-count">• {filteredActivities.length} Activities</span>
          </div>

          {/* Activities list */}
          <ActivityList
            activities={filteredActivities}
            onActivityClick={(activity) => onItemClick("activity", activity.id, activity)}
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

export default TripViewScreen
