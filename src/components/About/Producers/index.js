import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Producers = () => {
  const { logo01, logo02 } = useStaticQuery(graphql`
    {
      logo01: file(relativePath: { eq: "about-img-logo-01-465*320.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      logo02: file(relativePath: { eq: "about-img-logo-02-243*245.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div className="c-about__producers-block">
      <Image className="c-about__logo" fluid={logo01.childImageSharp.fluid} />
      <Image className="c-about__logo" fluid={logo02.childImageSharp.fluid} />
    </div>
  )
}

export default Producers
