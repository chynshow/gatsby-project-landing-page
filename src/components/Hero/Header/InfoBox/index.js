import React from "react"

const InfoBox = ({ SVG, text }) => {
  return (
    <div className="c-info-box">
      {SVG}
      <p className="c-info-box__text">{text}</p>
    </div>
  )
}

export default InfoBox
