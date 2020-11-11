import React from "react"

const SubTitle = ({ className, children }) => {
  return (
    <h4 className={className ? `c-sub-title ${className}` : "c-sub-title"}>
      {children}
    </h4>
  )
}

export default React.memo(SubTitle)
