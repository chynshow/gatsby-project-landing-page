import React from "react"

const Paragraph = ({ children, className }) => {
  return (
    <p className={className ? `c-paragraph ${className}` : "c-paragraph"}>
      {children}
    </p>
  )
}

export default Paragraph
