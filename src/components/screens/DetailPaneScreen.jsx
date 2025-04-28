"use client"
import Button from "../ui/Button"
import MapView from "../integrations/MapView"
import { useTheme } from "../../contexts/ThemeContext"

const DetailPaneScreen = ({ itemType, itemId, itemData, onClose }) => {
  const { theme } = useTheme()

  if (!itemData) return null

  return (
    <div className={`detail-pane ${theme}`}>
      <div className="detail-pane-header">
        <h2>
          {itemType === "trip" && "Trip Details"}
          {itemType === "flight" && "Flight Details"}
          {itemType === "hotel" && "Hotel Details"}
          {itemType === "activity" && "Activity Details"}
        </h2>
        <button className="close-button" onClick={onClose}>
          <span>×</span>
        </button>
      </div>

      <div className="detail-pane-content">
        {itemType === "trip" && <TripDetails trip={itemData} />}
        {itemType === "flight" && <FlightDetails flight={itemData} />}
        {itemType === "hotel" && <HotelDetails hotel={itemData} />}
        {itemType === "activity" && <ActivityDetails activity={itemData} />}
      </div>
    </div>
  )
}

const TripDetails = ({ trip }) => {
  return (
    <div className="detail-section">
      <div className="detail-image-container">
        <img src={trip.image || "/placeholder.svg"} alt={trip.destination} className="detail-image" />
        <div className="image-overlay">
          <div className="image-overlay-content">
            <h2>{trip.destination}</h2>
            <p>{trip.dateRange}</p>
          </div>
        </div>
      </div>

      <div className="detail-info-grid">
        <div className="info-card">
          <p className="info-label">Duration</p>
          <p className="info-value">
            {trip.duration.days} Days, {trip.duration.nights} Nights
          </p>
        </div>
        <div className="info-card">
          <p className="info-label">Weather</p>
          <p className="info-value">15°C - 22°C</p>
        </div>
      </div>

      <div className="detail-section-item">
        <h3>Trip Overview</h3>
        <p>
          Explore the vibrant city of Tokyo, Japan. From ancient temples to modern skyscrapers, Tokyo offers a unique
          blend of traditional and contemporary experiences. Your trip includes visits to iconic landmarks, cultural
          experiences, and local cuisine.
        </p>
      </div>

      <div className="detail-section-item">
        <h3>Location</h3>
        <div className="map-container">
          <MapView location="Tokyo, Japan" />
        </div>
      </div>

      <Button className="primary-button full-width">Download Itinerary</Button>
    </div>
  )
}

const FlightDetails = ({ flight }) => {
  return (
    <div className="detail-section">
      <div className="flight-card-detail">
        <div className="flight-date">{flight.date}</div>
        <div className="flight-route">
          <div className="flight-location">
            <span className="flight-code">{flight.departure.code}</span>
            <span className="flight-city">{flight.departure.city}</span>
          </div>
          <div className="flight-path">
            <div className="flight-path-line"></div>
            <div className="flight-icon">✈️</div>
            <div className="flight-path-line"></div>
          </div>
          <div className="flight-location">
            <span className="flight-code">{flight.arrival.code}</span>
            <span className="flight-city">{flight.arrival.city}</span>
          </div>
        </div>
      </div>

      <div className="detail-info-grid">
        <div className="info-card">
          <p className="info-label">Airline</p>
          <p className="info-value">{flight.airline}</p>
        </div>
        <div className="info-card">
          <p className="info-label">Flight Number</p>
          <p className="info-value">{flight.flightNumber}</p>
        </div>
        <div className="info-card">
          <p className="info-label">Departure</p>
          <p className="info-value">{flight.departureTime}</p>
        </div>
        <div className="info-card">
          <p className="info-label">Arrival</p>
          <p className="info-value">{flight.arrivalTime}</p>
        </div>
      </div>

      <div className="detail-section-item">
        <h3>Flight Information</h3>
        <div className="info-list">
          <div className="info-list-item">
            <span className="info-list-label">Duration</span>
            <span className="info-list-value">{flight.duration}</span>
          </div>
          <div className="info-list-item">
            <span className="info-list-label">Class</span>
            <span className="info-list-value">{flight.class}</span>
          </div>
          <div className="info-list-item">
            <span className="info-list-label">Baggage</span>
            <span className="info-list-value">{flight.baggage}</span>
          </div>
          <div className="info-list-item">
            <span className="info-list-label">Meal</span>
            <span className="info-list-value">{flight.meal}</span>
          </div>
        </div>
      </div>

      <div className="button-group">
        <Button className="primary-button">Check-in</Button>
        <Button className="secondary-button">Boarding Pass</Button>
      </div>
    </div>
  )
}

const HotelDetails = ({ hotel }) => {
  return (
    <div className="detail-section">
      <div className="detail-image-container">
        <img src={hotel.image || "/placeholder.svg"} alt={hotel.name} className="detail-image" />
      </div>

      <div className="hotel-header">
        <h3>{hotel.name}</h3>
        <div className="hotel-rating">
          <span>⭐</span>
          <span>{hotel.rating}</span>
        </div>
      </div>
      <p className="hotel-location">{hotel.location}</p>

      <div className="detail-info-grid">
        <div className="info-card">
          <p className="info-label">Check-in</p>
          <p className="info-value">{hotel.checkIn}</p>
        </div>
        <div className="info-card">
          <p className="info-label">Check-out</p>
          <p className="info-value">{hotel.checkOut}</p>
        </div>
        <div className="info-card">
          <p className="info-label">Price</p>
          <p className="info-value">${hotel.price}/night</p>
        </div>
        <div className="info-card">
          <p className="info-label">Total Stay</p>
          <p className="info-value">{hotel.nights} nights</p>
        </div>
      </div>

      <div className="detail-section-item">
        <h3>Amenities</h3>
        <div className="amenities-grid">
          {hotel.amenities.map((amenity, index) => (
            <div key={index} className="amenity-item">
              <span>✓</span>
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="detail-section-item">
        <h3>Location</h3>
        <div className="map-container">
          <MapView location={`${hotel.name}, Tokyo, Japan`} />
        </div>
      </div>

      <div className="button-group">
        <Button className="primary-button">View Room Details</Button>
        <Button className="secondary-button">Contact Hotel</Button>
      </div>
    </div>
  )
}

const ActivityDetails = ({ activity }) => {
  return (
    <div className="detail-section">
      <div className="detail-image-container">
        <img src={activity.image || "/placeholder.svg"} alt={activity.title} className="detail-image" />
        <div className="image-overlay">
          <div className="image-overlay-content">
            <h2>{activity.title}</h2>
          </div>
        </div>
      </div>

      <div className="detail-info-grid">
        <div className="info-card">
          <p className="info-label">Date</p>
          <p className="info-value">{activity.day} JAN 2025</p>
        </div>
        <div className="info-card">
          <p className="info-label">Time</p>
          <p className="info-value">{activity.timing}</p>
        </div>
        <div className="info-card">
          <p className="info-label">Duration</p>
          <p className="info-value">{activity.duration}</p>
        </div>
        <div className="info-card">
          <p className="info-label">Pick-up</p>
          <p className="info-value">{activity.pickup}</p>
        </div>
      </div>

      <div className="detail-section-item">
        <h3>Description</h3>
        <p>{activity.description}</p>
      </div>

      <div className="detail-section-item">
        <h3>Location</h3>
        <div className="map-container">
          <MapView location={`${activity.title}, Tokyo, Japan`} />
        </div>
      </div>

      <div className="button-group">
        <Button className="primary-button">Add to Calendar</Button>
        <Button className="secondary-button">Get Directions</Button>
      </div>
    </div>
  )
}

export default DetailPaneScreen
