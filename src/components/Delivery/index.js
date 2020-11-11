import React from "react"
import Button from "../Common/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faMobile,
  faMapMarkedAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import LinkBox from "./../Common/LinkBox"
import Title from "../Common/Title"
import Truck from "../Common/SVGs/Truck"
import SubTitle from "../Common/SubTitle"
import InfoBox from "../Common/InfoBox"
import { useStaticQuery, graphql } from "gatsby"

const Delivery = ({ className, setShowDeliveryInfo, showDeliveryInfo }) => {
  const {
    deliveryInfo: { openHours, phoneNum },
    deliveryZonesInfo: {
      deliveryZones: { title, url },
    },
  } = useStaticQuery(graphql`
    {
      deliveryInfo: heroPageJson {
        openHours
        phoneNum
        location {
          title
          url
        }
      }
      deliveryZonesInfo: menuPageJson {
        deliveryZones {
          title
          url
        }
      }
    }
  `)

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
          text={openHours}
        />
        <InfoBox
          className="c-delivery__info-box"
          icon={
            <FontAwesomeIcon
              className="c-icon c-delivery__icon"
              icon={faMobile}
            />
          }
          text={phoneNum}
        />
        <LinkBox
          icon={
            <FontAwesomeIcon
              className="c-icon c-delivery__icon"
              icon={faMapMarkedAlt}
            />
          }
          href={url}
          text={title}
        />
      </div>
    </section>
  )
}

export default React.memo(Delivery)
