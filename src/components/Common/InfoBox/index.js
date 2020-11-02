import React from "react"

const InfoBox = ({ icon, text, className }) => {
  return (
    <div className={className ? `c-info-box ${className}` : "c-info-box"}>
      {/* <div className="c-info-box__icon-container"></div> */}
      {icon}
      <span className="c-info-box__text">{text}</span>
    </div>
  )
}

export default InfoBox
