import React from "react"
import Title from "./../components/Common/Title"
import Paragraph from "./../components/Common/Paragraph"
import Fragment from "./../components/Common/SVGs/Fragment"
import ArrowLink from "./../components/Common/ArrowLink"
import SubTitle from "../components/Common/SubTitle"
import Cook from "../components/Common/SVGs/Cook"
import Stars from "./../components/Common/Stars"
import Producers from "./../components/About/Producers"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "./../components/Common/Layout"

const About = ({
  data: {
    img01,
    img02,
    aboutInfo: {
      descAboutProducts,
      descAboutUs,
      titleAboutProducts,
      titleAboutUs,
    },
  },
}) => {
  return (
    <Layout>
      <section className="c-about">
        <div className="l-container">
          <div className="c-about__inner">
            <div className="c-about__us">
              <div className="c-about__desc-container">
                <Title>{titleAboutUs}</Title>
                <Stars />
                <Paragraph>{descAboutUs}</Paragraph>
              </div>
              <div className="c-about__img-container">
                <Image
                  className="c-about__img"
                  fluid={img01.childImageSharp.fluid}
                />
              </div>
            </div>
            <div className="c-about__products">
              <div className="c-about__img-container">
                <Image
                  className="c-about__img"
                  fluid={img02.childImageSharp.fluid}
                />
              </div>
              <div className="c-about__desc-container">
                <Title>{titleAboutProducts}</Title>
                <Paragraph>{descAboutProducts}</Paragraph>
                <Producers />
              </div>
            </div>
            <Fragment className="c-about__decor-fragment" />
          </div>
        </div>
        <ArrowLink
          className="c-about__arrow-link"
          to="/menu"
          text={
            <SubTitle className="c-about__arrow-right-title">
              <Cook />
              Menu
            </SubTitle>
          }
          direction="right"
        />
        <ArrowLink
          className="c-about__arrow-link"
          text={<SubTitle>Home</SubTitle>}
          to="/"
          direction="left"
        />
      </section>
    </Layout>
  )
}

export const data = graphql`
  {
    img01: file(relativePath: { eq: "about-img-640*744.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img02: file(relativePath: { eq: "about-img-640*959.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    aboutInfo: aboutPageJson {
      titleAboutUs
      titleAboutProducts
      descAboutUs
      descAboutProducts
    }
  }
`

export default React.memo(About)
