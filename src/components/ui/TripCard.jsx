"use client"

const TripCard = ({ trip, onClick }) => {
  return (
    <div className="trip-card" onClick={onClick}>
      <img src={trip.image || "/placeholder.svg"} alt={trip.destination} className="trip-image" />
      <div className="trip-overlay"></div>
      <div className="trip-info">
        <h2>{trip.destination}</h2>
        <p>{trip.dateRange}</p>
      </div>
      <div className="trip-badges">
        <div className="trip-badge">
          <span>{trip.duration.days} Days</span>
        </div>
        <div className="trip-badge">
          <span>{trip.duration.nights} Nights</span>
        </div>
      </div>
    </div>
  )
}

export default TripCard
