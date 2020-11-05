import React from "react"
import Button from "../Common/Button"
import Overlay from "../Common/Overlay"
import Paragraph from "../Common/Paragraph"
import SubTitle from "../Common/SubTitle"
import Title from "../Common/Title"
import InfoBox from "./../Common/InfoBox"
import LinkBox from "./../Common/LinkBox"
import Logo from "./../Common/Logo/"

const Footer = () => {
  return (
    <footer className="c-footer">
      <div className="c-footer__inner">
        <div className="c-footer__top">
          <Title>Where you find us.</Title>
          <SubTitle>We wait for you.</SubTitle>
        </div>
        <div className="c-footer__map-container">Map Container</div>
        <div className="c-footer__bottom">
          <div className="c-footer__form-container">
            <Logo />
            {/* <form className="c-footer__form">
              <Title>Be in touch.</Title>
              <div className="c-footer__input-container">
                <input
                  type="text"
                  placeholder="your email"
                  className="c-footer__form-input"
                />
                <Button type="submit" className="c-btn--primary">
                  Subscribe
                </Button>
              </div>
            </form> */}
          </div>
          <div className="c-footer__links-container">
            <InfoBox text="10:00 a.m. - 21:00 p.m." />
            <LinkBox text="mati-pizza.com" />
            <LinkBox text="mati-pizza.face.com" />
            <InfoBox text="+55 555 555 555" />
            <LinkBox text="ul.SuchyLas 15" />
          </div>
          <span className="c-footer__copy">© 2020 - All righst reserved.</span>
        </div>
      </div>
      {/* <Overlay /> */}
    </footer>
  )
}

export default Footer
