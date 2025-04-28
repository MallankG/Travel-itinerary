"use client"

const HotelList = ({ hotels, onHotelClick }) => {
  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="hotel-card" onClick={() => onHotelClick(hotel)}>
          <div className="hotel-image-container">
            <img src={hotel.image || "/placeholder.svg"} alt={hotel.name} className="hotel-image" />
          </div>
          <div className="hotel-content">
            <div className="hotel-header">
              <h3>{hotel.name}</h3>
              <div className="hotel-rating">
                <span>⭐</span>
                <span>{hotel.rating}</span>
              </div>
            </div>
            <div className="hotel-details">
              <div className="hotel-price">
                <span className="price-label">Price:</span>
                <span className="price-value">${hotel.price}/night</span>
              </div>
              <div className="hotel-dates">
                <div className="hotel-date">Check-in: {hotel.checkIn}</div>
                <div className="hotel-date">Check-out: {hotel.checkOut}</div>
              </div>
              <div className="hotel-badges">
                <div className="hotel-badge nights">{hotel.nights} nights</div>
                <div className="hotel-badge confirmed">Confirmed</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HotelList
