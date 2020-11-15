import React from "react"
import Stars from "../../Common/Stars"
import SubTitle from "../../Common/SubTitle"
import Title from "../../Common/Title"
import { useStaticQuery, graphql } from "gatsby"

const MenuTitle = () => {
  const {
    datoCmsMenupage: { title, subtitle },
  } = useStaticQuery(graphql`
    {
      datoCmsMenupage {
        title
        subtitle
      }
    }
  `)
  return (
    <div className="c-menu__title-container">
      <Title className="c-menu__title">{title}</Title>
      <Stars />
      <SubTitle>{subtitle}</SubTitle>
    </div>
  )
}

export default MenuTitle
