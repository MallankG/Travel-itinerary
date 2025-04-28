"use client"
import { useApp } from "../../contexts/AppContext"
import { useTheme } from "../../contexts/ThemeContext"

const BottomNavigation = () => {
  const { activeTab, setActiveTab } = useApp()
  const { theme } = useTheme()

  return (
    <div className={`bottom-navigation ${theme}`}>
      <button className={`nav-item ${activeTab === "home" ? "active" : ""}`} onClick={() => setActiveTab("home")}>
        <svg viewBox="0 0 24 24" className="nav-icon">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </button>

      <button className={`nav-item ${activeTab === "search" ? "active" : ""}`} onClick={() => setActiveTab("search")}>
        <svg viewBox="0 0 24 24" className="nav-icon">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>

      <button
        className={`nav-item add-button ${activeTab === "add" ? "active" : ""}`}
        onClick={() => setActiveTab("add")}
      >
        <div className="add-icon-container">
          <svg viewBox="0 0 24 24" className="add-icon">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </button>

      <button
        className={`nav-item ${activeTab === "bookmarks" ? "active" : ""}`}
        onClick={() => setActiveTab("bookmarks")}
      >
        <div className={`bookmark-icon ${activeTab === "bookmarks" ? "active" : ""}`}></div>
      </button>

      <button className={`nav-item ${activeTab === "profile" ? "active" : ""}`} onClick={() => setActiveTab("profile")}>
        <svg viewBox="0 0 24 24" className="nav-icon">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </button>
    </div>
  )
}

export default BottomNavigation
