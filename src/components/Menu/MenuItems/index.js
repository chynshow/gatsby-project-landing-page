import React from "react"
import Title from "../../Common/Title"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPizzaSlice,
  faLeaf,
  faCarrot,
  faQuestion,
  faPlus,
} from "@fortawesome/free-solid-svg-icons"
import MenuItem from "./../MenuItem/"
import { graphql, useStaticQuery } from "gatsby"

const MenuItems = () => {
  const {
    site: {
      info: {
        menu: { pizza, gnocchi, insalata, antipasto, dodatki },
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        info: siteMetadata {
          menu {
            pizza {
              name
              description
            }
            gnocchi {
              name
              description
            }
            insalata {
              name
              description
            }
            antipasto {
              name
              description
            }
            dodatki
          }
        }
      }
    }
  `)

  return (
    <div className="c-menu__items">
      <Title className="c-menu__section-title">
        Pizza
        <FontAwesomeIcon className="c-menu__section-icon" icon={faPizzaSlice} />
      </Title>
      <div className="c-menu__pizzas">
        {pizza.map((pizza, idx) => (
          <MenuItem key={idx} data={pizza} />
        ))}
      </div>
      <Title className="c-menu__section-title">
        Gnocchi
        <FontAwesomeIcon className="c-menu__section-icon" icon={faQuestion} />
      </Title>
      <div className="c-menu__gnocchi">
        {gnocchi.map((gnocchi, idx) => (
          <MenuItem key={idx} data={gnocchi} />
        ))}
      </div>
      <Title className="c-menu__section-title">
        Insalata
        <FontAwesomeIcon className="c-menu__section-icon" icon={faLeaf} />
      </Title>
      <div className="c-menu__insalata">
        {insalata.map((insalata, idx) => (
          <MenuItem key={idx} data={insalata} />
        ))}
      </div>
      <Title className="c-menu__section-title">
        Antipasto
        <FontAwesomeIcon className="c-menu__section-icon" icon={faCarrot} />
      </Title>
      <div className="c-menu__antipasto">
        {antipasto.map((antipasto, idx) => (
          <MenuItem key={idx} data={antipasto} />
        ))}
      </div>
      <div className="c-menu__dodatki">
        <Title className="c-menu__section-title">
          Dodatki
          <FontAwesomeIcon className="c-menu__section-icon" icon={faPlus} />
        </Title>
        <div className="c-menu__dodatki">
          {dodatki.map((dodatki, idx) => (
            <div key={idx}>{dodatki}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuItems
