import React from "react"
import Title from "./../components/Common/Title"
import SVGStar from "./../components/Common/SVGs/Star"
import SVGFlag from "./../components/Common/SVGs/Flag"
import Paragraph from "./../components/Common/Paragraph"
import aboutImg from "./../assets/bg-03.jpg"
import aboutImg1 from "./../assets/bg-06.jpg"
import Logo01 from "./../assets/logo-01.png"
import Logo02 from "./../assets/logo-02.png"
import Fragment from "./../components/Common/SVGs/Fragment"
import ArrowLink from "./../components/Common/ArrowLink"
import SubTitle from "../components/Common/SubTitle"
import Cook from "../components/Common/SVGs/Cook"

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
              <img src={aboutImg} alt="" className="c-about__img" />
            </div>
          </div>
          <div className="c-about__products">
            <div className="c-about__img-container">
              <img src={aboutImg1} alt="" className="c-about__img" />
            </div>
            <div className="c-about__desc-container">
              <Title>original italian products.</Title>
              {/* <SVGFlag className="c-about__icon-decor-flag" /> */}
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

const Stars = () => (
  <div className="c-about__decor-icons-star">
    {[...Array(5)].map((star, idx) => (
      <SVGStar key={idx} className="c-about__decor-star" />
    ))}
  </div>
)

const Producers = () => {
  return (
    <div className="c-products__producers-block">
      <img className="c-products__logo" src={Logo01} alt="" />
      <img className="c-products__logo" src={Logo02} alt="" />
    </div>
  )
}
