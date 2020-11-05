import React from "react"
import Title from "../Common/Title"
import Paragraph from "../Common/Paragraph"
import SVGFlag from "./../Common/SVGs/Flag"
import Logo01 from "./../../assets/logo-01.png"
import Logo02 from "./../../assets/logo-02.png"
import productsImg from "./../../assets/bg-04.jpg"
import DecorLine from "../Common/SVGs/DecorLine/Line-02"

const Products = () => {
  return (
    <section className="c-products">
      <div className="l-container">
        <div className="c-products__inner">
          <div className="c-products__img-container">
            <DecorLine className="c-decor-line c-products__decor-line-01" />
            <DecorLine className="c-decor-line c-products__decor-line-02" />

            <img src={productsImg} alt="" className="c-products__img" />
          </div>
          <div className="c-products__desc-container">
            <Title>Original Italian Products.</Title>
            <DecorFlag />
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              repellat architecto tempora quod numquam quis tenetur at nobis
              assumenda quidem necessitatibus dicta rem exercitationem odit
              dolores nulla officiis iusto quo ipsum accusantium, perferendis,
              asperiores quasi animi! Aut provident reiciendis et.
            </Paragraph>

            <Producers />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products

const Producers = () => {
  return (
    <div className="c-products__producers-block">
      <img className="c-products__logo" src={Logo01} alt="" />
      <img className="c-products__logo" src={Logo02} alt="" />
      <img className="c-products__logo" src={Logo01} alt="" />
      <img className="c-products__logo" src={Logo02} alt="" />
    </div>
  )
}

const DecorFlag = () => {
  return (
    <div className="c-products__decor-flag">
      <SVGFlag />
    </div>
  )
}
