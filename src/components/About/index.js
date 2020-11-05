import React from "react"
import Title from "../Common/Title"
import SVGStar from "./../Common/SVGs/Star"
import TextFragment from "./../Common/TextFragment"
import Paragraph from "../Common/Paragraph"
import aboutImg from "./../../assets/bg-03.jpg"
import DecorLine from "../Common/SVGs/DecorLine/Line-02"

const About = () => {
  return (
    <section className="c-about">
      {/* <TextFragment className="c-about__decor-text-1" text="Delicious" />
      <TextFragment text="Yeah" className="c-about__decor-text-2" />
      <TextFragment text="Tasty" className="c-about__decor-text-3" />
      <TextFragment text="Fast" className="c-about__decor-text-4" />
      <TextFragment text="Nice" className="c-about__decor-text-5" /> */}

      <div className="l-container">
        <div className="c-about__inner">
          <div className="c-about__desc-container">
            <Title>we are Włoszczyzna.</Title>
            <div className="c-about__decor-icons-star">
              {[...Array(5)].map((star, idx) => (
                <SVGStar key={idx} className="c-about__decor-star" />
              ))}
            </div>
            <Paragraph>
              And web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites.
              Still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </Paragraph>
            <Paragraph>
              Still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected
              humour and the like). Still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Paragraph>
          </div>
          <div className="c-about__img-container">
            <DecorLine className="c-decor-line c-about__decor-line-01" />
            <DecorLine className="c-decor-line c-about__decor-line-02" />

            <img src={aboutImg} alt="" className="c-about__img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
