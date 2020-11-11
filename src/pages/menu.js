import React, { useState, useEffect } from "react"
import Button from "./../components/Common/Button"
import SubTitle from "./../components/Common/SubTitle"
import Truck from "./../components/Common/SVGs/Truck"
import ArrowLink from "./../components/Common/ArrowLink"
import Overlay from "./../components/Common/Overlay"
import Delivery from "./../components/Delivery"
import MenuTitle from "./../components/Menu/MenuTitle"
import MenuFilter from "./../components/Menu/MenuFilter"
import MenuItems from "./../components/Menu/MenuItems"

const Menu = () => {
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false)
  const [filter, setFilter] = useState("")

  useEffect(() => {
    if (showDeliveryInfo) {
      document.body.style.overflowY = "hidden"
    } else if (!showDeliveryInfo) {
      document.body.style.overflowY = null
    }
  }, [showDeliveryInfo])

  return (
    <section className="c-menu">
      <div className="l-container">
        <div className="c-menu__inner">
          <MenuTitle />
          <MenuFilter filter={filter} setFilter={setFilter} />
          <MenuItems filter={filter} />
        </div>
      </div>
      <ArrowLink
        className="c-menu__arrow-link"
        to="/"
        text={<SubTitle>Home</SubTitle>}
        direction="right"
      />
      <ArrowLink
        className="c-menu__arrow-link"
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
      {showDeliveryInfo && <Overlay />}
    </section>
  )
}

export default Menu
