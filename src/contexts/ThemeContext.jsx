"use client"

import { createContext, useContext } from "react"

// Create theme context
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
})

// Theme provider component
export const ThemeProvider = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
