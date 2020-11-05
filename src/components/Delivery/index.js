import React from "react"
import InfoBox from "../Common/InfoBox"
import SubTitle from "../Common/SubTitle"
import Title from "../Common/Title"
import deliveryImg from "./../../assets/delivery-section-img.jpg"
import DecorLine from "./../Common/SVGs/DecorLine/Line-03"
import SVGTruck from "./../Common/SVGs/Truck"

const Delivery = () => {
  return (
    <section className="c-delivery">
      <div className="l-container">
        <div className="c-delivery__inner">
          <div className="c-delivery__desc-container">
            <Title>Order Now</Title>
            <SVGTruck className="c-delivery__icon" />
            <SubTitle>Best pizza means - hot pizza.</SubTitle>

            <InfoBox text="10:00 a.m. - 21:00 p.m." />
            <InfoBox text="ul.SuchyLas 15" />
            <InfoBox text="+ 48 555 555 555" />
          </div>
          {/* <div className="c-delivery__img-container">
            <DecorLine className="c-delivery__decor-line-01" />
            <DecorLine className="c-delivery__decor-line-02" />

            <img src={deliveryImg} alt="" className="c-delivery__img" />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Delivery
