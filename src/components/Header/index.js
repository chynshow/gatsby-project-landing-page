import React from "react"
import SubTitle from "./../Common/SubTitle"
import InfoBox from "./../Common/InfoBox"
import LinkBox from "./../Common/LinkBox"
import Clock from "./../Common/SVGs/Clock"
import Phone from "./../Common/SVGs/Phone"
import Cook from "./../Common/SVGs/Cook"
import ArrowLink from "./../Common/ArrowLink"
import Location from "./../Common/SVGs/Location"
import Logo from "./../Common/SVGs/Logo"

const Header = () => {
  return (
    <header className="c-header">
      <div className="c-header__inner">
        <Logo className="c-header__logo" />
        <div className="c-header__info-container">
          <InfoBox
            icon={<Clock className="c-header__icon" />}
            text="10:00 A.M. - 22:00 P.M."
          />
          <InfoBox
            icon={<Phone className="c-header__icon" />}
            text="+48 555 555 555"
          />

          <LinkBox
            icon={<Location className="c-header__icon" />}
            href="https://www.google.com/maps/place/plac+Grzybowy+18,+62-002+Z%C5%82otniki/@52.4797716,16.8559261,15z/data=!4m5!3m4!1s0x470443b601dabfbf:0xe463a8c955227328!8m2!3d52.4797716!4d16.8559261"
            text="Złotniki, plac Grzybowy 18"
          />
        </div>
        <ArrowLink
          className="c-header__icon-arrow-left"
          to="/menu"
          text={
            <SubTitle className="c-header__arrow-left-title">
              <Cook />
              Menu
            </SubTitle>
          }
          direction="left"
        />
        <ArrowLink
          className="c-header__icon-arrow-right"
          text={<SubTitle>About us</SubTitle>}
          to="/about"
          direction="right"
        />
      </div>
      <div className="c-header__bg-img" />
    </header>
  )
}

export default Header
