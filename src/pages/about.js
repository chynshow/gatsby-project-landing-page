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
import SEO from "../components/Common/SEO"

const About = ({
  data: {
    content: {
      imgPizzeria,
      imgProducts,
      titlePizzeria,
      titleProducts,
      descPizzeria,
      descProducts,
    },
  },
}) => {
  return (
    <Layout>
      <SEO
        title="About"
        description="This is about page of pizzeria Włoszczyzna"
      />
      <section className="c-about">
        <div className="l-container">
          <div className="c-about__inner">
            <div className="c-about__us">
              <div className="c-about__desc-container">
                <Title>{titlePizzeria}</Title>
                <Stars />
                <Paragraph>{descPizzeria}</Paragraph>
              </div>
              <div className="c-about__img-container">
                <Image className="c-about__img" fluid={imgPizzeria.fluid} />
              </div>
            </div>
            <div className="c-about__products">
              <div className="c-about__img-container">
                <Image className="c-about__img" fluid={imgProducts.fluid} />
              </div>
              <div className="c-about__desc-container">
                <Title>{titleProducts}</Title>
                <Paragraph>{descProducts}</Paragraph>
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
    content: datoCmsAboutpage {
      titlePizzeria: titleaboutproducts
      titleProducts: titleaboutpizzeria
      descPizzeria: descriptionaboutpizzeria
      descProducts: descriptionaboutproducts
      imgPizzeria: imgaboutpizzeria {
        fluid(imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      imgProducts: imgaboutproducts {
        fluid(imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default React.memo(About)
