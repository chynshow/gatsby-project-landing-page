import React from "react"
import Button from "../../Common/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSeedling,
  faHippo,
  faChild,
  faPepperHot,
  faUndo,
} from "@fortawesome/free-solid-svg-icons"

const MenuFilter = ({ setFilter, filter }) => (
  <div className="c-menu__filter-container">
    <Button className="c-btn--secondary" onClick={() => setFilter("vege")}>
      I am vegaterian
      <FontAwesomeIcon className="c-icon" icon={faSeedling} />
    </Button>
    <Button className="c-btn--secondary" onClick={() => setFilter("hungry")}>
      I am hungry
      <FontAwesomeIcon className="c-icon" icon={faHippo} />
    </Button>
    <Button className="c-btn--secondary" onClick={() => setFilter("special")}>
      I am looking for something special{" "}
    </Button>
    <Button className="c-btn--secondary" onClick={() => setFilter("light")}>
      Something light
    </Button>
    <Button className="c-btn--secondary" onClick={() => setFilter("spicy")}>
      Spicy food
      <FontAwesomeIcon className="c-icon" icon={faPepperHot} />
    </Button>
    <Button className="c-btn--secondary" onClick={() => setFilter("children")}>
      For children
      <FontAwesomeIcon className="c-icon" icon={faChild} />
    </Button>
    {filter !== "" && (
      <Button className="c-btn--secondary" onClick={() => setFilter("")}>
        Reset
        <FontAwesomeIcon className="c-icon" icon={faUndo} />
      </Button>
    )}
  </div>
)
export default React.memo(MenuFilter)
