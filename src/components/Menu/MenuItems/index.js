import React from "react"
import Title from "../../Common/Title"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPizzaSlice,
  faLeaf,
  faCarrot,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons"
import MenuItem from "./../MenuItem/"

const MenuItems = ({ menu }) => (
  <div className="c-menu__items">
    <Title className="c-menu__section-title">
      Pizza
      <FontAwesomeIcon className="c-menu__section-icon" icon={faPizzaSlice} />
    </Title>
    <div className="c-menu__pizzas">
      {menu.pizza.map((pizza, idx) => (
        <MenuItem key={idx} data={pizza} />
      ))}
    </div>
    <Title className="c-menu__section-title">
      Gnocchi
      <FontAwesomeIcon className="c-menu__section-icon" icon={faQuestion} />
    </Title>
    <div className="c-menu__gnocchi">
      {menu.gnocchi.map((gnocchi, idx) => (
        <MenuItem key={idx} data={gnocchi} />
      ))}
    </div>
    <Title className="c-menu__section-title">
      Insalata
      <FontAwesomeIcon className="c-menu__section-icon" icon={faLeaf} />
    </Title>
    <div className="c-menu__insalata">
      {menu.insalata.map((insalata, idx) => (
        <MenuItem key={idx} data={insalata} />
      ))}
    </div>
    <Title className="c-menu__section-title">
      Antipasto
      <FontAwesomeIcon className="c-menu__section-icon" icon={faCarrot} />
    </Title>
    <div className="c-menu__antipasto">
      {menu.insalata.map((antipasto, idx) => (
        <MenuItem key={idx} data={antipasto} />
      ))}
    </div>
    <div className="c-menu__dodatki"></div>
  </div>
)

export default MenuItems
