import React from "react"
import Logo01 from "./../../../assets/logo-01.png"
import Logo02 from "./../../../assets/logo-02.png"
import { useStaticQuery, graphql } from "gatsby"

const Producers = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "logos" } }) {
        totalCount
        nodes {
          size
          birthTime
          absolutePath
        }
      }
    }
  `)
  console.log(data)
  return (
    <div className="c-about__products-block">
      <img className="c-about__logo" src={Logo01} alt="" />
      <img className="c-about__logo" src={Logo02} alt="" />
    </div>
  )
}

export default Producers
