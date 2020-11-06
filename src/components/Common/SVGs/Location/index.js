import React from "react"

const Location = ({ className }) => {
  return (
    <svg
      viewBox="0 0 35 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? `c-icon ${className}` : "c-icon"}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6084 53.2655C16.9802 53.9902 18.0161 53.9902 18.3879 53.2655L32.7424 25.2823C36.9904 17.0011 35.3395 6.11475 26.8807 2.23266C20.3944 -0.744162 14.601 -0.74429 8.11467 2.2327C-0.343719 6.11477 -1.99422 17.0007 2.25355 25.2815L16.6084 53.2655ZM17.9982 22C21.3119 22 23.9982 19.3137 23.9982 16C23.9982 12.6863 21.3119 10 17.9982 10C14.6845 10 11.9982 12.6863 11.9982 16C11.9982 19.3137 14.6845 22 17.9982 22Z"
      />
    </svg>
  )
}

export default Location
