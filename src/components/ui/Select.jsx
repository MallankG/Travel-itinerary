"use client"

import { useState, useRef, useEffect } from "react"

const Select = ({ placeholder, value, onChange, options, darkMode, error }) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Get selected option label
  const getSelectedLabel = () => {
    const selected = options.find((option) => option.value === value)
    return selected ? selected.label : placeholder
  }

  return (
    <div className={`select-container ${error ? "error" : ""}`} ref={selectRef}>
      <div className={`select-trigger ${darkMode ? "dark" : "light"}`} onClick={() => setIsOpen(!isOpen)}>
        <span className={`select-value ${!value ? "placeholder" : ""}`}>{getSelectedLabel()}</span>
        <span className={`select-arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>

      {isOpen && (
        <div className={`select-dropdown ${darkMode ? "dark" : "light"}`}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`select-option ${value === option.value ? "selected" : ""}`}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
