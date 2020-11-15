import React from "react"
import SubTitle from "../../Common/SubTitle"

const MenuItem = ({ data: { title, description, price }, filter }) => {
  return (
    <div
      className={
        filter !== "" ? "c-menu__item c-menu__item--active" : "c-menu__item"
      }
    >
      <SubTitle className="c-menu__item-title">{title}</SubTitle>
      <div className="c-menu__item-container">
        <span className="c-menu__item-desc">{description}</span>
        <span className="c-menu__item-price">{price} $</span>
      </div>
    </div>
  )
}

export default React.memo(MenuItem)
