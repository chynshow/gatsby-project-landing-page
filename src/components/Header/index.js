import React from "react"
import SubTitle from "./../Common/SubTitle"
import InfoBox from "./../Common/InfoBox"
import Logo from "./../Common/Logo"
import Clock from "./../Common/SVGs/Clock"
import Phone from "./../Common/SVGs/Phone"
import ArrowRight from "../Common/SVGs/ArrowRight"
import ArrowLeft from "../Common/SVGs/ArrowLeft"
import Cook from "./../Common/SVGs/Cook"

const Header = () => {
  return (
    <header className="c-header">
      <div className="c-header__inner">
        <Logo />
        <div className="c-header__info-container">
          <InfoBox
            className="c-header__info-box"
            icon={<Clock />}
            text="10:00 A.M. - 22:00 P.M."
          />
          <InfoBox
            className="c-header__info-box"
            icon={<Phone />}
            text="+48 555 555 555"
          />
        </div>
        <div className="c-header__icon-arrow-right">
          <SubTitle>About us</SubTitle>
          <ArrowRight />
        </div>
        <div className="c-header__icon-arrow-left">
          <ArrowLeft />
          <SubTitle className="c-header__arrow-left-title">
            <Cook className="c-header__icon-cook" />
            Menu
          </SubTitle>
        </div>
      </div>
    </header>
  )
}

export default Header
