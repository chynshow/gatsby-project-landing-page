import React from "react"

const InfoBox = ({ icon, text, className }) => {
  return (
    <div className={className ? `c-info-box ${className}` : "c-info-box"}>
      {icon}
      <span className="c-info-box__text">{text}</span>
    </div>
  )
}

export default React.memo(InfoBox)
