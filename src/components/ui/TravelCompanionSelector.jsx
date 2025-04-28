"use client"

const TravelCompanionSelector = ({ selected, onChange, darkMode }) => {
  const companions = [
    { id: "solo", label: "Solo", icon: "person" },
    { id: "couple", label: "Couple", icon: "couple" },
    { id: "family", label: "Family", icon: "family" },
    { id: "friends", label: "Friends", icon: "friends" },
  ]

  return (
    <div className="travel-companion-selector">
      {companions.map((companion) => (
        <button
          key={companion.id}
          className={`companion-button ${darkMode ? "dark" : "light"} ${selected === companion.id ? "selected" : ""}`}
          onClick={() => onChange(companion.id)}
        >
          <div className="companion-icon">
            {companion.icon === "person" && (
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            )}
            {companion.icon === "couple" && (
              <div className="icon-group">
                <svg viewBox="0 0 24 24" className="icon">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <svg viewBox="0 0 24 24" className="icon">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            )}
            {companion.icon === "family" && (
              <div className="icon-group">
                <svg viewBox="0 0 24 24" className="icon small">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <svg viewBox="0 0 24 24" className="icon">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <svg viewBox="0 0 24 24" className="icon small">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            )}
            {companion.icon === "friends" && (
              <div className="icon-group">
                <svg viewBox="0 0 24 24" className="icon small">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <svg viewBox="0 0 24 24" className="icon small">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <svg viewBox="0 0 24 24" className="icon small">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            )}
          </div>
          <span>{companion.label}</span>
        </button>
      ))}
    </div>
  )
}

export default TravelCompanionSelector
