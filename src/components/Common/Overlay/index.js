import React from "react"

const Overlay = ({ className }) => {
  return <div className={className ? `c-overlay ${className}` : "c-overlay"} />
}

export default React.memo(Overlay)
