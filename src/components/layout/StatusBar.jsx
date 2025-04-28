"use client"
import { useTheme } from "../../contexts/ThemeContext"

const StatusBar = ({ darkMode }) => {
  const { theme } = useTheme()
  // Use provided darkMode prop if available, otherwise use theme context
  const isDark = darkMode !== undefined ? darkMode : theme === "dark"

  return (
    <div className={`status-bar ${isDark ? "dark" : "light"}`}>
      <div className="status-time">9:41</div>
      <div className="status-icons">
        <div className="signal-icon">📶</div>
        <div className="wifi-icon">📶</div>
        <div className="battery-icon">🔋</div>
      </div>
    </div>
  )
}

export default StatusBar
