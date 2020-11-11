import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const Stars = ({ num = 5, className }) => {
  return (
    <div className={className ? `c-stars ${className}` : "c-stars"}>
      {[...Array(num)].map((star, idx) => (
        <FontAwesomeIcon icon={faStar} key={idx} className="c-stars__item" />
      ))}
    </div>
  )
}

export default React.memo(Stars)
