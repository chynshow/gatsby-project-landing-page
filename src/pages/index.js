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
    datoCmsHomepage: {
      bgimage,
      phonenumber,
      openhours,
      locationtitle,
      locationurl,
    },
  },
}) => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="This is home page of pizzeria Włoszczyzna"
      />
      <BackgroundImage className="c-home__bg-img" fluid={bgimage.fluid}>
        <section className="c-home">
          <div className="c-home__inner">
            <Logo className="c-home__logo" />

            <div className="c-home__info-container">
              <InfoBox
                icon={<FontAwesomeIcon icon={faClock} size="2x" />}
                text={openhours}
              />
              <InfoBox
                icon={<FontAwesomeIcon icon={faMobile} size="2x" />}
                text={phonenumber}
              />

              <LinkBox
                icon={<FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />}
                href={locationurl}
                text={locationtitle}
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
    datoCmsHomepage {
      bgimage {
        fluid(maxWidth: 1900, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      phonenumber
      openhours
      locationtitle
      locationurl
    }
  }
`

export default React.memo(Home)
