import React from "react"
import "./../sass-config/index.scss"
import SubTitle from "./../components/Common/SubTitle"
import InfoBox from "./../components/Common/InfoBox"
import LinkBox from "./../components/Common/LinkBox"
import Cook from "./../components/Common/SVGs/Cook"
import ArrowLink from "./../components/Common/ArrowLink"
import Logo from "./../components/Common/SVGs/Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faMobile,
  faClock,
} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <header className="c-hero">
      <div className="c-hero__inner">
        <Logo className="c-hero__logo" />
        <div className="c-hero__info-container">
          <InfoBox
            icon={
              <FontAwesomeIcon className="c-icon c-hero__icon" icon={faClock} />
            }
            text="10:00 a.m. - 22:00 p.m."
          />
          <InfoBox
            icon={
              <FontAwesomeIcon
                className="c-icon c-hero__icon"
                icon={faMobile}
              />
            }
            text="+48 555 555 555"
          />

          <LinkBox
            icon={
              <FontAwesomeIcon
                className="c-icon c-hero__icon"
                icon={faMapMarkerAlt}
              />
            }
            href="https://www.google.com/maps/place/plac+Grzybowy+18,+62-002+Z%C5%82otniki/@52.4797716,16.8559261,15z/data=!4m5!3m4!1s0x470443b601dabfbf:0xe463a8c955227328!8m2!3d52.4797716!4d16.8559261"
            text="Złotniki, plac Grzybowy 18"
          />
        </div>
        <ArrowLink
          className="c-hero__icon-arrow-left"
          to="/menu"
          text={
            <SubTitle className="c-hero__arrow-left-title">
              <Cook className="c-hero__icon-cook" />
              Menu
            </SubTitle>
          }
          direction="left"
        />
        <ArrowLink
          className="c-hero__icon-arrow-right"
          text={<SubTitle>About</SubTitle>}
          to="/about"
          direction="right"
        />
      </div>
      <div className="c-hero__bg-img" />
    </header>
  )
}

export default Header
