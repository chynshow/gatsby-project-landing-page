import React from "react"

const Stars = ({ num = 5, className }) => {
  return (
    <div className={className ? `c-starts ${className}` : "c-starts"}>
      {[...Array(num)].map((star, idx) => (
        <SVGStar key={idx} className="c-starts__item" />
      ))}
    </div>
  )
}

export default Stars
