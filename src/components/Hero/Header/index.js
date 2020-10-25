import React from "react"
import Logo from "./Logo"
import Navigation from "./Navigation"
import OpenHourInfo from "./OpenHourInfo"
import PhoneInfo from "./PhoneInfo"

const Header = () => {
  return (
    <header className="c-header">
      <OpenHourInfo />
      <Logo />
      <Navigation />
      <PhoneInfo />
    </header>
  )
}

export default Header
