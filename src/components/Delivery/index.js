import React from "react"
import Button from "../Common/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faMobile,
  faMapMarkerAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import LinkBox from "./../Common/LinkBox"
import Title from "../Common/Title"
import Truck from "../Common/SVGs/Truck"
import SubTitle from "../Common/SubTitle"
import InfoBox from "../Common/InfoBox"

const Delivery = ({ className, setShowDeliveryInfo, showDeliveryInfo }) => {
  return (
    <section className={className ? `c-delivery ${className}` : "c-delivery"}>
      <Button
        className="c-delivery__close-btn"
        onClick={() => setShowDeliveryInfo(false)}
      >
        <FontAwesomeIcon className="c-icon" icon={faTimes} />
      </Button>
      <Title>Order Now.</Title>
      <Truck
        className={
          showDeliveryInfo
            ? `c-delivery__icon-truck c-delivery__icon-truck--active`
            : "c-delivery__icon-truck"
        }
      />
      <SubTitle>Best pizza means - hot pizza.</SubTitle>
      <div className="c-delivery__info">
        <InfoBox
          className="c-delivery__info-box"
          icon={
            <FontAwesomeIcon
              className="c-icon c-delivery__icon"
              icon={faClock}
            />
          }
          text="10:00 A.M. - 22:00 P.M."
        />
        <InfoBox
          className="c-delivery__info-box"
          icon={
            <FontAwesomeIcon
              className="c-icon c-delivery__icon"
              icon={faMobile}
            />
          }
          text="+48 555 555 555"
        />
        <LinkBox
          icon={
            <FontAwesomeIcon
              className="c-icon c-delivery__icon"
              icon={faMapMarkerAlt}
            />
          }
          href="https://www.google.com/maps/place/plac+Grzybowy+18,+62-002+Z%C5%82otniki/@52.4797716,16.8559261,15z/data=!4m5!3m4!1s0x470443b601dabfbf:0xe463a8c955227328!8m2!3d52.4797716!4d16.8559261"
          text="Złotniki, plac Grzybowy 18"
        />
      </div>
    </section>
  )
}

export default Delivery
