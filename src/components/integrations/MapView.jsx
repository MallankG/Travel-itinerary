"use client"

import { useState, useEffect } from "react"
import { useTheme } from "../../contexts/ThemeContext"

const MapView = ({ location }) => {
  const { theme } = useTheme()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading the map
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [location])

  return (
    <div className={`map-view ${theme}`}>
      {isLoading ? (
        <div className="map-loading">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div className="map-content">
          {/* This is a mock map UI */}
          <div className="map-pin">
            <svg viewBox="0 0 24 24" className="pin-icon">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div className="map-location-label">{location}</div>
          <div className="map-controls">
            <button className="map-control-button">+</button>
            <button className="map-control-button">-</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MapView
