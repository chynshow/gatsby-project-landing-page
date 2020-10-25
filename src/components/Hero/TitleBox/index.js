import React from "react"
import Button from "../../common/Button"

const TitleBox = () => {
  return (
    <div className="l-layout-container">
      <div className="c-hero-title-box">
        <h1 className="c-hero-title-box__title">Mati Pizza.</h1>
        <h4 className="c-hero-title-box__sub-title">
          Tasty food. Perfect service. happy people.
        </h4>
        <h5 className="c-hero-title-box__sub-title">
          Italian pizza with italian products.
        </h5>
        <div className="c-hero-title-box__btn-container">
          <Button
            className="c-btn--primary c-hero-title-box__active-btn"
            text="Order Now"
          />
          <Button className="c-btn--secondary" text="Menu" />
        </div>
      </div>
    </div>
  )
}
export default TitleBox
