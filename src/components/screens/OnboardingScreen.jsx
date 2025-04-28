"use client"

import { useState } from "react"
import StatusBar from "../layout/StatusBar"
import TravelCompanionSelector from "../ui/TravelCompanionSelector"
import Button from "../ui/Button"
import Input from "../ui/Input"
import Select from "../ui/Select"
import { useApp } from "../../contexts/AppContext"
import GoogleAuthButton from "../integrations/GoogleAuthButton"

const OnboardingScreen = ({ darkMode, onContinue }) => {
  const { setTravelPreferences } = useApp()
  const [destination, setDestination] = useState("")
  const [duration, setDuration] = useState("")
  const [travelWith, setTravelWith] = useState(null)
  const [formErrors, setFormErrors] = useState({})

  // Duration options
  const durationOptions = [
    { label: "1-3 days", value: "1-3" },
    { label: "4-7 days", value: "4-7" },
    { label: "1-2 weeks", value: "7-14" },
    { label: "More than 2 weeks", value: "14+" },
  ]

  // Handle form submission
  const handleContinue = () => {
    const errors = {}

    if (!destination) {
      errors.destination = "Please enter a destination"
    }

    if (!duration) {
      errors.duration = "Please select a duration"
    }

    if (!travelWith) {
      errors.travelWith = "Please select who you're traveling with"
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    // Save preferences and continue
    setTravelPreferences({
      destination,
      duration,
      travelWith,
    })

    onContinue()
  }

  // Handle destination input change
  const handleDestinationChange = (e) => {
    setDestination(e.target.value)
    if (formErrors.destination) {
      setFormErrors({ ...formErrors, destination: undefined })
    }
  }

  // Handle duration selection
  const handleDurationChange = (value) => {
    setDuration(value)
    if (formErrors.duration) {
      setFormErrors({ ...formErrors, duration: undefined })
    }
  }

  // Handle travel companion selection
  const handleTravelWithChange = (value) => {
    setTravelWith(value)
    if (formErrors.travelWith) {
      setFormErrors({ ...formErrors, travelWith: undefined })
    }
  }

  return (
    <div className={`onboarding-screen ${darkMode ? "dark" : "light"}`}>
      {/* Status bar */}
      <StatusBar darkMode={darkMode} />

      <div className="onboarding-header">
        <h1>Plan Your Journey, Your Way!</h1>
        <p>Let's create your personalized travel experience</p>
      </div>

      <div className="onboarding-form">
        <div className="form-group">
          <label>Where would you like to go?</label>
          <Input
            placeholder="Enter Destination"
            value={destination}
            onChange={handleDestinationChange}
            darkMode={darkMode}
            error={formErrors.destination}
          />
          {formErrors.destination && <p className="error-message">{formErrors.destination}</p>}
        </div>

        <div className="form-group">
          <label>How long will you stay?</label>
          <Select
            placeholder="Select Duration"
            value={duration}
            onChange={handleDurationChange}
            options={durationOptions}
            darkMode={darkMode}
            error={formErrors.duration}
          />
          {formErrors.duration && <p className="error-message">{formErrors.duration}</p>}
        </div>

        <div className="form-group">
          <label>Who are you travelling with?</label>
          <TravelCompanionSelector selected={travelWith} onChange={handleTravelWithChange} darkMode={darkMode} />
          {formErrors.travelWith && <p className="error-message">{formErrors.travelWith}</p>}
        </div>
      </div>

      <div className="onboarding-actions">
        <Button onClick={handleContinue} className="primary-button">
          Continue
        </Button>

        <div className="divider">
          <span>Or continue with</span>
        </div>

        <GoogleAuthButton darkMode={darkMode} />
      </div>
    </div>
  )
}

export default OnboardingScreen
