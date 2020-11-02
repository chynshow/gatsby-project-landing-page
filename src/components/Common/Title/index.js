import React from "react"

const Title = ({ className, children, rest }) => {
  return (
    <h1 className={className ? `c-title ${className}` : "c-title"} {...rest}>
      {children}
    </h1>
  )
}

export default Title
