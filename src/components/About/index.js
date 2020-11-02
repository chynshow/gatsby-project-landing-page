import React from "react"
import Title from "../Common/Title"
import SVGStar from "./../Common/SVGs/Star"
import SVGCook from "./../Common/SVGs/Cook"
import Overlay from "./../Common/Overlay"

const About = () => {
  return (
    <section className="c-about">
      <div className="c-about__left-bg" />
      <div className="c-about__right-bg" />
      <TextFragment text="Tasty" />
      <TextFragment text="Tasty" />
      <TextFragment text="Tasty" />

      <div className="l-layout-container">
        <div className="c-about__inner-title">
          <SVGCook className="c-about__decoration-icon-cook" width={84} />
          <Title>We are Mati Pizza.</Title>
          <div className="c-about__decoration-icons-star">
            <SVGStar width={32} />
            <SVGStar width={32} />
            <SVGStar width={32} />
            <SVGStar width={32} />
            <SVGStar width={32} />
          </div>
          <p className="c-about__description">
            And web page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many web sites.
            Still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <p className="c-about__description">
            Still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like). Still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

const TextFragment = ({ className, text }) => {
  return (
    <div
      className={className ? `c-text-fragment ${className}` : "c-text-fragment"}
    >
      {text}
    </div>
  )
}
