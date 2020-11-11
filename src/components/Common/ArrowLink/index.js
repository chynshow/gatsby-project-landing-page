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
  const style =
    direction === "left"
      ? "c-arrow-link c-arrow-link__left-direction"
      : "c-arrow-link c-arrow-link__right-direction"
  return (
    <Link className={className ? `${style} ${className}` : style} to={to}>
      {setDirection(direction, text)}
      {children}
    </Link>
  )
}

export default React.memo(ArrowLink)
