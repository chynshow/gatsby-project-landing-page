import React from "react"

const TextFragment = ({ className, text, icon }) => {
  return (
    <div
      className={className ? `c-text-fragment ${className}` : "c-text-fragment"}
    >
      {icon}
      <span className="c-text-fragment__text">{text}</span>
    </div>
  )
}

export default TextFragment
