import React from "react"
import "./../sass-config/index.scss"
import Header from "./../components/Header"
import About from "./../components/About"
import Overlay from "./../components/Common/Overlay"

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Overlay />
    </div>
  )
}
