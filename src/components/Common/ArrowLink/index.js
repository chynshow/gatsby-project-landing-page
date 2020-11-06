import React from "react"
import { Link } from "gatsby"
import ArrowLeft from "./../SVGs/ArrowLeft"
import ArrowRight from "./../SVGs/ArrowRight"

const setDirection = (direction, text) => {
  switch (direction) {
    case "right":
      return (
        <>
          {text}
          <ArrowRight />
        </>
      )
    case "left":
      return (
        <>
          <ArrowLeft />
          {text}
        </>
      )
    default:
      return
  }
}

const ArrowLink = ({ to, children, text, direction, className }) => {
  return (
    <Link
      className={className ? `c-arrow-link ${className}` : "c-arrow-link"}
      to={to}
    >
      {setDirection(direction, text)}
      {children}
    </Link>
  )
}

export default ArrowLink
