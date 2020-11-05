import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <nav className="c-navigation">
      <ul className="c-navigation__items-container">
        <li className="c-navigation__item c-navigation__active-item">Home</li>
        <li className="c-navigation__item">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="c-navigation__item">
          <Link to="/about">About</Link>
        </li>
        <li className="c-navigation__item">Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation
