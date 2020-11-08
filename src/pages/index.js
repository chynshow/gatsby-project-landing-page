import React from "react"
import "./../sass-config/index.scss"
import SubTitle from "./../components/Common/SubTitle"
import InfoBox from "./../components/Common/InfoBox"
import LinkBox from "./../components/Common/LinkBox"
import Cook from "./../components/Common/SVGs/Cook"
import ArrowLink from "./../components/Common/ArrowLink"
import Logo from "./../components/Common/SVGs/Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faMobile,
  faClock,
} from "@fortawesome/free-solid-svg-icons"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Header = ({
  data: {
    site: {
      info: {
        location: { url, text },
        phoneNum,
        workHours,
      },
    },
    logo: { absolutePath },
    bgImg: { childImageSharp },
  },
}) => {
  return (
    <BackgroundImage className="c-hero__bg-img" fluid={childImageSharp.fluid}>
      <header className="c-hero">
        <div className="c-hero__inner">
          <Logo className="c-hero__logo" />

          <div className="c-hero__info-container">
            <InfoBox
              icon={
                <FontAwesomeIcon
                  className="c-icon c-hero__icon"
                  icon={faClock}
                />
              }
              text={workHours}
            />
            <InfoBox
              icon={
                <FontAwesomeIcon
                  className="c-icon c-hero__icon"
                  icon={faMobile}
                />
              }
              text={phoneNum}
            />

            <LinkBox
              icon={
                <FontAwesomeIcon
                  className="c-icon c-hero__icon"
                  icon={faMapMarkerAlt}
                />
              }
              href={url}
              text={text}
            />
          </div>
          <ArrowLink
            className="c-hero__icon-arrow-left"
            to="/menu"
            text={
              <SubTitle className="c-hero__arrow-left-title">
                <Cook className="c-hero__icon-cook" />
                Menu
              </SubTitle>
            }
            direction="left"
          />
          <ArrowLink
            className="c-hero__icon-arrow-right"
            text={<SubTitle>About</SubTitle>}
            to="/about"
            direction="right"
          />
        </div>
      </header>
    </BackgroundImage>
  )
}

export const data = graphql`
  {
    site {
      info: siteMetadata {
        phoneNum
        location {
          text
          url
        }
        workHours
      }
    }
    logo: file(relativePath: { eq: "logos/hero-logo-500*843.png" }) {
      size
      absolutePath
    }
    bgImg: file(relativePath: { eq: "imgs/hero-bg-1920*2320.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default Header
