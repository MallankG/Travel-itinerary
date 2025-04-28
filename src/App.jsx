"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "./contexts/ThemeContext"
import { AppProvider } from "./contexts/AppContext"
import OnboardingScreen from "./components/screens/OnboardingScreen"
import TripViewScreen from "./components/screens/TripViewScreen"
import DetailPaneScreen from "./components/screens/DetailPaneScreen"
import "./styles/global.css"

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("trip-view")
  const [showDetailPane, setShowDetailPane] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [theme, setTheme] = useState("light")

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  // Handle item click to open detail pane
  const handleItemClick = (type, id, data) => {
    setSelectedItem({ type, id, data })
    setShowDetailPane(true)
  }

  // Handle closing detail pane
  const handleCloseDetailPane = () => {
    setShowDetailPane(false)
  }

  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <AppProvider>
        <div className={`app-container ${theme}`}>
          <div className="app-content">
            {currentScreen === "onboarding-dark" && (
              <OnboardingScreen darkMode={true} onContinue={() => setCurrentScreen("trip-view")} />
            )}

            {currentScreen === "onboarding-light" && (
              <OnboardingScreen darkMode={false} onContinue={() => setCurrentScreen("trip-view")} />
            )}

            {currentScreen === "trip-view" && (
              <div className="screen-container">
                <div className={`trip-view-container ${showDetailPane ? "with-detail-pane" : ""}`}>
                  <TripViewScreen onItemClick={handleItemClick} />
                </div>

                {showDetailPane && (
                  <div className="detail-pane-container">
                    <DetailPaneScreen
                      itemType={selectedItem?.type || "trip"}
                      itemId={selectedItem?.id || ""}
                      itemData={selectedItem?.data}
                      onClose={handleCloseDetailPane}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Screen selector for demo purposes */}
            <div className="screen-selector">
              <button onClick={() => setCurrentScreen("onboarding-dark")}>Dark Form</button>
              <button onClick={() => setCurrentScreen("onboarding-light")}>Light Form</button>
              <button onClick={() => setCurrentScreen("trip-view")}>Trip View</button>
              <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
          </div>
        </div>
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
