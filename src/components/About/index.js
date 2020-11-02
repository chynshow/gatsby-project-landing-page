import React from "react"
import Title from "../Common/Title"
import SVGStar from "./../Common/SVGs/Star"
import SVGCook from "./../Common/SVGs/Cook"
import TextFragment from "./../Common/TextFragment"
import Paragraph from "../Common/Paragraph"

const About = () => {
  return (
    <section className="c-about">
      <div className="c-about__decor-left-bg" />
      <div className="c-about__decor-right-bg" />
      <TextFragment className="c-about__decor-text-1" text="Delicious" />
      <TextFragment text="Yeah" className="c-about__decor-text-2" />
      <TextFragment text="Tasty" className="c-about__decor-text-3" />
      <TextFragment text="Fast" className="c-about__decor-text-4" />
      <TextFragment text="Nice" className="c-about__decor-text-5" />

      <SVGCook className="c-about__decor-icon-cook" />
      <div className="c-about__inner">
        <div className="c-about__desc-box">
          <Title>We are Mati Pizza.</Title>
          <div className="c-about__decor-icons-star">
            {[...Array(5)].map((star, idx) => (
              <SVGStar key={idx} className="c-about__decor-star" />
            ))}
          </div>
          <Paragraph>
            And web page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many web sites.
            Still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Paragraph>
          <Paragraph>
            Still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like). Still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </Paragraph>
        </div>
      </div>
    </section>
  )
}

export default About
