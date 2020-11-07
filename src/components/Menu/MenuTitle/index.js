import React from "react"
import Stars from "../../Common/Stars"
import SubTitle from "../../Common/SubTitle"
import Title from "../../Common/Title"

const MenuTitle = () => (
  <div className="c-menu__title-container">
    <Title className="c-menu__title">Our offers.</Title>
    <Stars />
    <SubTitle>Find your favorite set.</SubTitle>
  </div>
)

export default MenuTitle
