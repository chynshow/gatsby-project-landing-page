import React from "react"

const Navigation = () => {
  return (
    <nav className="c-navigation">
      <ul className="c-navigation__items-container">
        <li className="c-navigation__item c-navigation__active-item">Home</li>
        <li className="c-navigation__item">Menu</li>
        <li className="c-navigation__item">About</li>
        <li className="c-navigation__item">Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation
