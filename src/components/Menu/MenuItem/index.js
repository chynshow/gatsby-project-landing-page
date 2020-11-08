import React from "react"
import SubTitle from "../../Common/SubTitle"

const MenuItem = ({ data }) => {
  return (
    <div className="c-menu__item">
      <SubTitle className="c-menu__item-title">{data.name}</SubTitle>
      <div className="c-menu__item-container">
        <span className="c-menu__item-desc">{data.description}</span>
        <span className="c-menu__item-price">0.00$</span>
      </div>
    </div>
  )
}

export default MenuItem
