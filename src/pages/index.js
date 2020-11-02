import React from "react"
import "./../sass-config/index.scss"
import Overlay from "./../components/Common/Overlay"
import Header from "./../components/Header"
import About from "./../components/About"
import Products from "./../components/Products"
import Section from "../components/Common/Section"

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Products />

      <Overlay />
    </div>
  )
}
