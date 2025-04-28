"use client"

const FlightCard = ({ flight, onClick }) => {
  return (
    <div className="flight-card" onClick={onClick}>
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
  )
}

export default FlightCard
