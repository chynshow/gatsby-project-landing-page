import React from "react"

const SubTitle = ({ className, children, rest }) => {
  return (
    <h4
      className={className ? `c-sub-title ${className}` : "c-sub-title"}
      {...rest}
    >
      {children}
    </h4>
  )
}

export default SubTitle
