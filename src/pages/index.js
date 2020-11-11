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
    heroInfo: {
      openHours,
      phoneNum,
      location: { title, url },
    },
    bgImg: { childImageSharp },
  },
}) => {
  return (
    <BackgroundImage className="c-hero__bg-img" fluid={childImageSharp.fluid}>
      <section className="c-hero">
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
              text={openHours}
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
              text={title}
            />
          </div>
          <ArrowLink
            className="c-hero__arrow-link"
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
            className="c-hero__arrow-link"
            text={<SubTitle>About</SubTitle>}
            to="/about"
            direction="right"
          />
        </div>
      </section>
    </BackgroundImage>
  )
}

export const data = graphql`
  {
    heroInfo: heroPageJson {
      openHours
      phoneNum
      location {
        title
        url
      }
    }
    bgImg: file(relativePath: { eq: "hero-bg-1920*2320.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default React.memo(Header)
