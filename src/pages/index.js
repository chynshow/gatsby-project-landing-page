import React from "react"
import SubTitle from "../components/Common/SubTitle"
import InfoBox from "../components/Common/InfoBox"
import LinkBox from "../components/Common/LinkBox"
import Cook from "../components/Common/SVGs/Cook"
import ArrowLink from "../components/Common/ArrowLink"
import Logo from "../components/Common/SVGs/Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faMobile,
  faClock,
} from "@fortawesome/free-solid-svg-icons"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/Common/Layout"
import SEO from "../components/Common/SEO"

const Home = ({
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
    <Layout>
      <SEO
        title="Home"
        description="This is home page of pizzeria Włoszczyzna"
      />
      <BackgroundImage className="c-home__bg-img" fluid={childImageSharp.fluid}>
        <section className="c-home">
          <div className="c-home__inner">
            <Logo className="c-home__logo" />

            <div className="c-home__info-container">
              <InfoBox
                icon={
                  <FontAwesomeIcon
                    className="c-icon c-home__icon"
                    icon={faClock}
                  />
                }
                text={openHours}
              />
              <InfoBox
                icon={
                  <FontAwesomeIcon
                    className="c-icon c-home__icon"
                    icon={faMobile}
                  />
                }
                text={phoneNum}
              />

              <LinkBox
                icon={
                  <FontAwesomeIcon
                    className="c-icon c-home__icon"
                    icon={faMapMarkerAlt}
                  />
                }
                href={url}
                text={title}
              />
            </div>
            <ArrowLink
              className="c-home__arrow-link"
              to="/menu"
              text={
                <SubTitle className="c-home__arrow-left-title">
                  <Cook className="c-home__icon-cook" />
                  Menu
                </SubTitle>
              }
              direction="left"
            />
            <ArrowLink
              className="c-home__arrow-link"
              text={<SubTitle>About</SubTitle>}
              to="/about"
              direction="right"
            />
          </div>
        </section>
      </BackgroundImage>
    </Layout>
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

export default React.memo(Home)
