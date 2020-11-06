import React from "react"

const Overlay = ({ className, onClick }) => {
  return (
    <div
      className={className ? `c-overlay ${className}` : "c-overlay"}
      onClick={onClick}
    />
  )
}

export default Overlay
