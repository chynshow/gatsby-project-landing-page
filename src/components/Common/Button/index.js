import React from "react"

const Button = ({ className, onClick, rest, children }) => {
  return (
    <button
      className={className ? `c-btn ${className}` : "c-btn"}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
