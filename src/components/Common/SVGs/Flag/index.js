import React from "react"

const Flag = ({ className }) => {
  return (
    <svg
      width="300"
      height="2"
      viewBox="0 0 300 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? `c-icon ${className}` : "c-icon"}
    >
      <rect width="100" height="2" fill="#009432" />
      <rect x="100" width="100" height="2" fill="#FFFFFF" />
      <rect x="200" width="100" height="2" fill="#EA2027" />
    </svg>
  )
}

export default Flag
