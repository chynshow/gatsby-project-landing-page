import React from "react"
import Title from "./../components/Common/Title"
import Paragraph from "./../components/Common/Paragraph"
import aboutImg from "./../assets/about-img-640*744.jpg"
import aboutImg1 from "./../assets/about-img-640*959.jpg"
import Fragment from "./../components/Common/SVGs/Fragment"
import ArrowLink from "./../components/Common/ArrowLink"
import SubTitle from "../components/Common/SubTitle"
import Cook from "../components/Common/SVGs/Cook"
import Stars from "./../components/Common/Stars"
import Producers from "./../components/About/Producers"

const About = () => {
  return (
    <section className="c-about">
      <div className="l-container">
        <div className="c-about__inner">
          <div className="c-about__us">
            <div className="c-about__desc-container">
              <Title>we are Włoszczyzna.</Title>
              <Stars />
              <Paragraph>
                And web page editors now use Lorem Ipsum as their default model
                text, and a search for 'lorem ipsum' will uncover many web
                sites. Still in their infancy. Various versions have evolved
                over the years, sometimes by accident, sometimes on purpose
                (injected humour and the like).
              </Paragraph>
            </div>
            <div className="c-about__img-container">
              <img src={aboutImg} alt="Dish" className="c-about__img" />
            </div>
          </div>
          <div className="c-about__products">
            <div className="c-about__img-container">
              <img src={aboutImg1} alt="Dish" className="c-about__img" />
            </div>
            <div className="c-about__desc-container">
              <Title>original italian products.</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                delectus est nostrum, ipsum expedita unde quaerat obcaecati,
                recusandae pariatur consequatur quis. Itaque autem dolor vero
                modi reprehenderit ratione praesentium, recusandae esse
                consequuntur natus eveniet corporis optio sed soluta voluptatum
                est.
              </Paragraph>
              <Producers />
            </div>
          </div>
          <Fragment className="c-about__decor-fragment" />
        </div>
      </div>
      <ArrowLink
        className="c-about__icon-arrow-right"
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
        className="c-about__icon-arrow-left"
        text={<SubTitle>Home</SubTitle>}
        to="/"
        direction="left"
      />
    </section>
  )
}

export default About
