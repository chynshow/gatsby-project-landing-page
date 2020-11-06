import React, { useState } from "react"
import Button from "./../components/Common/Button"
import SubTitle from "./../components/Common/SubTitle"
import Title from "./../components/Common/Title"
import SVGStar from "./../components/Common/SVGs/Star"
import Truck from "./../components/Common/SVGs/Truck"
import InfoBox from "./../components/Common/InfoBox"
import Clock from "./../components/Common/SVGs/Clock"
import Phone from "./../components/Common/SVGs/Phone"
import ArrowLink from "./../components/Common/ArrowLink"
import Overlay from "./../components/Common/Overlay"

const menu = {
  pizza: [
    {
      name: "Margherita",
      components:
        "sos z włoskich pomidorów, ser mozzarella, ser pecorino romano, świeża bazylia, oliwa extra vergine",
    },
    {
      name: "Salamino",
      components:
        "sos z włoskich pomidorów, ser mozzarella, salami napoli, czerwona cebula",
    },
    {
      name: "Cotto",
      components:
        "sos z włoskich pomidorów, ser mozzarella, szynka gotowana cotto",
    },
    {
      name: "Pancetta",
      components:
        "sos z włoskich pomidorów, ser mozzarella, bekon pancetta, biała cebula, ser pecorino romano",
    },
    {
      name: "Piccante",
      components:
        "sos z włoskich pomidorów, ser mozzarella, salami spianata piccante, czarne oliwki, ser gorgonzola, pasta chilli",
    },
    {
      name: "Verdura",
      components:
        "sos z włoskich pomidorów,ser mozzarella, bakłażan, czarne oliwki, czerwona cebula, pasta czosnkowa, oliwa extra vergine",
    },
    {
      name: "Bianca",
      components:
        "oliwa extra vergine, ser mozzarella, ser mascarpone, ser gorgonzola, rukola",
    },
    {
      name: "Anchois",
      components:
        "sos z włoskich pomidorów, ser mozzarella, anchois, ser pecorino romano, rukola, pasta czosnkowa",
    },
    {
      name: "Parma",
      components:
        "sos z włoskich pomidorów, ser mozzarella, prosciutto crudo di parma, pomidory cherry, ser pecorino romano, rukola, oliwa extra vergine",
    },
    {
      name: "Gamberetto",
      components:
        "oliwa extra vergine, ser mozzarella, ser mascarpone, krewetki tygrysie, ser pecorino romano, rukola, pasta czosnkowa",
    },
  ],
  gnocchi: [
    {
      name: "Pomodoro",
      components:
        "włoskie kluseczki gnocchi, sos z włoskich pomidorów, ser mozzarella, ser pecorino romano, rukola",
    },
    {
      name: "Parma",
      components:
        "włoskie kluseczki gnocchi, prosciutto crudo di parma, cebula biała, słodka śmietanka, kapary, ser pecorino romano, rukola",
    },
    {
      name: "Cacio e pepe",
      components:
        "włoskie kluseczki gnocchi, masło, świeżo mielony pieprz, ser pecorino romano",
    },
    {
      name: "Formaggio",
      components:
        "włoskie kluseczki gnocchi, ser mascarpone, ser gorgonzola, rukola, pistacje",
    },
    {
      name: "Gamberetto",
      components:
        "włoskie kluseczki gnocchi, krewetki tygrysie, wino białe, masło, pasta czosnkowa, ser pecorino romano, pomidory cherry, rukola",
    },
    {
      name: "Piccante",
      components:
        "włoskie kluseczki gnocchi, sos z włoskich pomidorów, salami spianata piccante, bekon pancetta, cebula czerwona, pasta czosnkowa, pasta chilli, ser pecorino romano",
    },
  ],
  insalata: [
    {
      name: "Mozzarella",
      components:
        "mix sałat, pomidory cherry, ser mozzarella, czarne oliwki, ser pecorino romano , dressing musztardowo-miodowy",
    },
    {
      name: "Pollo",
      components:
        "mix sałat, pomidory cherry, czerwona cebula, kurczak wędzony, bekon pancetta, ser pecorino romano, dressing anchois",
    },
    {
      name: "Parma",
      components:
        "mix sałat, pomidory cherry, prosciutto crudo di parma, ser pecorino romano, dressing miodowo-musztardowy",
    },
  ],
  antipasto: [
    {
      name: "Talerz dobroci z włoch",
      components: "wędliny, sery prosto z włoch",
    },
    {
      name: "Focaccia",
      components: "płaski chlebek z rozmarynem oraz oliwa extra vergine",
    },
    {
      name: "Panini",
      components: "świeżo wypiekane bułeczki",
    },
  ],
  dodatki: [
    "sos anchois",
    "sos z włoskich pomidorów",
    "sos czosnkowy z pieczonego czosnku",
    "oliwa extra vergine",
  ],
}

const Menu = () => {
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false)
  return (
    <section className="c-menu">
      <div className="l-container">
        <div className="c-menu__inner">
          <MenuTitle />
          <MenuFilter />
          <MenuItems menu={menu} />
        </div>
      </div>
      <ArrowLink
        className="c-menu__icon-arrow-right"
        to="/"
        text={<SubTitle>Home</SubTitle>}
        direction="right"
      />
      <ArrowLink
        className="c-menu__icon-arrow-left"
        text={<SubTitle>About us</SubTitle>}
        to="/about"
        direction="left"
      />
      <Button
        className="c-btn--primary c-menu__delivery-btn"
        onClick={() => setShowDeliveryInfo(!showDeliveryInfo)}
      >
        <Truck />
      </Button>
      <Delivery className={showDeliveryInfo ? "c-delivery--active" : null} />
      {showDeliveryInfo && (
        <Overlay onClick={() => setShowDeliveryInfo(!showDeliveryInfo)} />
      )}
    </section>
  )
}

export default Menu

const MenuItem = ({ data }) => {
  return (
    <div className="c-menu__item">
      <SubTitle className="c-menu__item-title">{data.name}</SubTitle>
      <div className="c-menu__item-container">
        <span className="c-menu__item-desc">{data.components}</span>
        <span className="c-menu__item-price">0.00$</span>
      </div>
    </div>
  )
}

const Stars = () => (
  <div className="c-menu__decor-icons-star">
    {[...Array(5)].map((star, idx) => (
      <SVGStar key={idx} className="c-menu__decor-star" />
    ))}
  </div>
)

const MenuTitle = () => (
  <div className="c-menu__title-container">
    <Title>Our offers.</Title>
    <Stars />
    <SubTitle>find your favorite dishes.</SubTitle>
  </div>
)

const MenuFilter = () => (
  <div className="c-menu__filter-container">
    <Button className="c-btn--secondary">I am vegaterian</Button>
    <Button className="c-btn--secondary">I am hungry</Button>
    <Button className="c-btn--secondary">
      I am looking for something special{" "}
    </Button>
    <Button className="c-btn--secondary">something light</Button>
    <Button className="c-btn--secondary">spicy food</Button>
    <Button className="c-btn--secondary">for children</Button>
  </div>
)

const MenuItems = ({ menu }) => (
  <div className="c-menu__items">
    <Title className="c-menu__title">Pizza</Title>
    <div className="c-menu__pizzas">
      {menu.pizza.map((pizza, idx) => (
        <MenuItem key={idx} data={pizza} />
      ))}
    </div>
    <Title className="c-menu__title">Gnocchi</Title>
    <div className="c-menu__gnocchi">
      {menu.gnocchi.map((gnocchi, idx) => (
        <MenuItem key={idx} data={gnocchi} />
      ))}
    </div>
    <Title className="c-menu__title">Insalata</Title>
    <div className="c-menu__insalata">
      {menu.insalata.map((insalata, idx) => (
        <MenuItem key={idx} data={insalata} />
      ))}
    </div>
    <Title className="c-menu__title">Antipasto</Title>
    <div className="c-menu__antipasto">
      {menu.insalata.map((antipasto, idx) => (
        <MenuItem key={idx} data={antipasto} />
      ))}
    </div>
    <div className="c-menu__dodatki"></div>
  </div>
)

const Delivery = ({ className }) => {
  return (
    <section className={className ? `c-delivery ${className}` : "c-delivery"}>
      <Title>Order Now</Title>
      <Truck className="c-delivery__icon" />
      <SubTitle>Best pizza means - hot pizza.</SubTitle>
      <InfoBox
        className="c-delivery__info-box"
        icon={<Clock />}
        text="10:00 A.M. - 22:00 P.M."
      />
      <InfoBox
        className="c-delivery__info-box"
        icon={<Phone />}
        text="+48 555 555 555"
      />
    </section>
  )
}
