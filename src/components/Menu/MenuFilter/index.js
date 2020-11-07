import React from "react"
import Button from "../../Common/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSeedling,
  faHippo,
  faChild,
  faPepperHot,
} from "@fortawesome/free-solid-svg-icons"

const MenuFilter = () => (
  <div className="c-menu__filter-container">
    <Button className="c-btn--secondary">
      I am vegaterian
      <FontAwesomeIcon className="c-icon" icon={faSeedling} />
    </Button>
    <Button className="c-btn--secondary">
      I am hungry
      <FontAwesomeIcon className="c-icon" icon={faHippo} />
    </Button>
    <Button className="c-btn--secondary">
      I am looking for something special{" "}
    </Button>
    <Button className="c-btn--secondary">something light</Button>
    <Button className="c-btn--secondary">
      spicy food
      <FontAwesomeIcon className="c-icon" icon={faPepperHot} />
    </Button>
    <Button className="c-btn--secondary">
      for children
      <FontAwesomeIcon className="c-icon" icon={faChild} />
    </Button>
  </div>
)

export default MenuFilter
