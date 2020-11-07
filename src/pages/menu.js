import React, { useState } from "react"
import Button from "./../components/Common/Button"
import SubTitle from "./../components/Common/SubTitle"
import Truck from "./../components/Common/SVGs/Truck"
import ArrowLink from "./../components/Common/ArrowLink"
import Overlay from "./../components/Common/Overlay"
import Delivery from "./../components/Delivery"
import MenuTitle from "./../components/Menu/MenuTitle"
import MenuFilter from "./../components/Menu/MenuFilter"
import MenuItems from "./../components/Menu/MenuItems"
import { useEffect } from "react"

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

  useEffect(() => {
    if (showDeliveryInfo) {
      document.body.style.overflowY = "hidden"
    } else if (!showDeliveryInfo) {
      document.body.style.overflowY = "scroll"
    }
  }, [showDeliveryInfo])

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
        text={<SubTitle>About</SubTitle>}
        to="/about"
        direction="left"
      />
      <Button
        className="c-btn--primary c-menu__delivery-btn"
        onClick={() => setShowDeliveryInfo(!showDeliveryInfo)}
      >
        <Truck />
      </Button>
      <Delivery
        className={showDeliveryInfo ? "c-delivery--active" : null}
        setShowDeliveryInfo={setShowDeliveryInfo}
        showDeliveryInfo={showDeliveryInfo}
      />
      {showDeliveryInfo && (
        <Overlay onClick={() => setShowDeliveryInfo(!showDeliveryInfo)} />
      )}
    </section>
  )
}

export default Menu
