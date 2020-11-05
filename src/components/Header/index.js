import React from "react"
import Title from "./../Common/Title"
import SubTitle from "./../Common/SubTitle"
import Button from "./../Common/Button"
import InfoBox from "./../Common/InfoBox"
import Clock from "./../Common/SVGs/Clock"
import Phone from "./../Common/SVGs/Phone"
import Navigation from "./../Header/Navigation"
import Logo from "./../Common/Logo"

const Header = () => {
  return (
    <header className="c-header">
      <div className="c-header__top">
        <div className="l-container">
          <div className="c-header__top-inner">
            <InfoBox
              className="c-header__info-box"
              icon={<Clock />}
              text="10:00 A.M. - 22:00 P.M."
            />
            <div className="c-header__logo-nav-box">
              <Logo />
              {/* <Navigation /> */}
            </div>
            <InfoBox
              className="c-header__info-box"
              icon={<Phone />}
              text="+48 555 555 555"
            />
          </div>
        </div>
      </div>
      <div className="c-header__bottom">
        <div className="l-container">
          <div className="c-header__bottom-inner">
            <div className="c-header__title-box">
              <Title className="c-header__title">
                Tasty food. Perfect service. Happy people.
              </Title>
              <SubTitle>Italian pizza with italian products.</SubTitle>
              <div className="c-header__btns-box">
                <Button className="c-btn--primary c-header__action-btn">
                  Order Now
                </Button>
                <Button className="c-btn--secondary">Menu</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
