import React from "react"
import "./../sass-config/index.scss"
import Overlay from "./../components/Common/Overlay"
import Header from "./../components/Header"
import About from "./../components/About"
import Products from "./../components/Products"
import Section from "../components/Common/Section"
import Menu from "../components/Menu"
import Delivery from "../components/Delivery/"
import Footer from "../components/Footer/"
// import {Link} fom 'gatsby'

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Products />
      <Menu />
      <Delivery />
      <Footer />
    </div>
  )
}
