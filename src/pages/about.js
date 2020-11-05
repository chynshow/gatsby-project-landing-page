import React from "react"
import Title from "./../components/Common/Title"
import SVGStar from "./../components/Common/SVGs/Star"
// import TextFragment from "./../components/Common/TextFragment"
import Paragraph from "./../components/Common/Paragraph"
import aboutImg from "./../assets/bg-03.jpg"
import DecorLine from "./../components/Common/SVGs/DecorLine/Line-02"
import { Link } from "gatsby"

const About = () => {
  return (
    <section className="c-about">
      {/* <TextFragment className="c-about__decor-text-1" text="Delicious" />
      <TextFragment text="Yeah" className="c-about__decor-text-2" />
      <TextFragment text="Tasty" className="c-about__decor-text-3" />
      <TextFragment text="Fast" className="c-about__decor-text-4" />
      <TextFragment text="Nice" className="c-about__decor-text-5" /> */}

      <TestSvg className="c-about__test-svg-1" />

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

const TestSvg = ({ className }) => {
  return (
    <div className={className}>
      <Link to="/">
        <svg
          viewBox="0 0 577 2030"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              d="M544.105 2008.82C569.132 1997.15 579.959 1967.4 568.289 1942.37L131.696 1006.09L567.63 80.2661C579.393 55.2827 568.677 25.4937 543.693 13.73L525.599 5.20996C500.616 -6.55347 470.826 4.16309 459.063 29.1465L9.21002 984.536C1.94391 999.967 3.2547 1017.23 11.2066 1030.95C11.7879 1032.66 12.4673 1034.35 13.2471 1036.02L459.532 1993.09C471.202 2018.11 500.951 2028.94 525.978 2017.27L544.105 2008.82Z"
              fill="#fafafa"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0.43457"
              y="0.434448"
              width="576.551"
              height="2029.53"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </Link>
    </div>
  )
}
