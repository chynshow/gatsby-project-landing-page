import React from "react"

const SVGClock = ({ className }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM14.08 18.88V5.76H16.64V18.56L22.08 24.96L20.16 26.56L14.08 18.88Z"
        fill="#fff"
      />
    </svg>
  )
}

export default SVGClock
