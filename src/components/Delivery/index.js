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
    deliveryInfo: { openhours, phonenumber },
    deliveryPage: { title, subtitle, deliveryzones },
  } = useStaticQuery(graphql`
    {
      deliveryInfo: datoCmsHomepage {
        phonenumber
        openhours
      }
      deliveryPage: datoCmsDeliverypage {
        title
        subtitle
        deliveryzones
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
      <Title>{title}</Title>
      <Truck
        className={
          showDeliveryInfo
            ? `c-delivery__icon-truck c-delivery__icon-truck--active`
            : "c-delivery__icon-truck"
        }
      />
      <SubTitle>{subtitle}</SubTitle>
      <div className="c-delivery__info">
        <InfoBox
          className="c-delivery__info-box"
          icon={<FontAwesomeIcon size="2x" icon={faClock} />}
          text={openhours}
        />
        <InfoBox
          className="c-delivery__info-box"
          icon={<FontAwesomeIcon size="2x" icon={faMobile} />}
          text={phonenumber}
        />
        <LinkBox
          icon={<FontAwesomeIcon size="2x" icon={faMapMarkedAlt} />}
          href={deliveryzones}
          text="Strefy dowozu"
        />
      </div>
    </section>
  )
}

export default React.memo(Delivery)
