"use client"
import { useApp } from "../../contexts/AppContext"
import { useTheme } from "../../contexts/ThemeContext"

const UserHeader = () => {
  const { userData } = useApp()
  const { theme } = useTheme()

  return (
    <div className={`user-header ${theme}`}>
      <div className="user-info">
        <h1>Hello {userData.name}!</h1>
        <p>Ready for the trip?</p>
      </div>
      <div className="user-avatar">
        {userData.avatar ? (
          <img src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
        ) : (
          <div className="avatar-placeholder">{userData.name.charAt(0)}</div>
        )}
      </div>
    </div>
  )
}

export default UserHeader
