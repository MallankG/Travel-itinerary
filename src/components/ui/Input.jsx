"use client"

const Input = ({ placeholder, value, onChange, darkMode, error, ...props }) => {
  return (
    <input
      type="text"
      className={`input ${darkMode ? "dark" : "light"} ${error ? "error" : ""}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export default Input
