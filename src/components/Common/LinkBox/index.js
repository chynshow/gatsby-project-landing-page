import React from "react"

const LinkBox = ({ icon, text, className, href }) => {
  return (
    <div className={className ? `c-link-box ${className}` : "c-link-box"}>
      <div className="c-link-box__icon-container">{icon}</div>
      <a
        className="c-link c-link-box__text"
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {text}
      </a>
    </div>
  )
}

export default React.memo(LinkBox)
