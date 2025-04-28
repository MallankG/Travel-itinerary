"use client"
import { useTheme } from "../../contexts/ThemeContext"

const WeatherWidget = ({ weather }) => {
  const { theme } = useTheme()

  // Weather icon based on condition
  const getWeatherIcon = () => {
    switch (weather.condition) {
      case "sunny":
        return (
          <svg viewBox="0 0 24 24" className="weather-icon sunny">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        )
      case "cloudy":
        return (
          <svg viewBox="0 0 24 24" className="weather-icon cloudy">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
          </svg>
        )
      case "rainy":
        return (
          <svg viewBox="0 0 24 24" className="weather-icon rainy">
            <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
            <line x1="8" y1="16" x2="8.01" y2="16"></line>
            <line x1="8" y1="20" x2="8.01" y2="20"></line>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
            <line x1="12" y1="22" x2="12.01" y2="22"></line>
            <line x1="16" y1="16" x2="16.01" y2="16"></line>
            <line x1="16" y1="20" x2="16.01" y2="20"></line>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className={`weather-widget ${theme}`}>
      <div className="weather-header">
        <div>
          <p className="weather-location">Weather in {weather.location.split(",")[0]}</p>
          <div className="weather-temp">
            <svg viewBox="0 0 24 24" className="temp-icon">
              <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
            </svg>
            <span>{weather.temperature}°C</span>
          </div>
        </div>
        <div className="weather-condition">{getWeatherIcon()}</div>
      </div>
      <div className="weather-details">
        <span>Humidity: {weather.humidity}%</span>
        <span>Wind: {weather.wind} km/h</span>
      </div>
    </div>
  )
}

export default WeatherWidget
