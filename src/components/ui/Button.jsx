"use client"

const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button className={`button ${className || ""}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
