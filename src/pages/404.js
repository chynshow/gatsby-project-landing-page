import React from "react"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ArrowLink from "../components/Common/ArrowLink"
import SubTitle from "../components/Common/SubTitle"
import Cook from "../components/Common/SVGs/Cook"
import Title from "./../components/Common/Title"
import Layout from "./../components/Common/Layout"

const NotFound = () => {
  return (
    <Layout>
      <section className="c-not-found">
        <FontAwesomeIcon className="c-not-found__icon" icon={faTimes} />
        <Title>Page not found</Title>
        <ArrowLink
          className="c-not-found__arrow-link"
          to="/menu"
          text={
            <SubTitle className="c-about__arrow-right-title">
              <Cook />
              Menu
            </SubTitle>
          }
          direction="right"
        />
        <ArrowLink
          className="c-not-found__arrow-link"
          text={<SubTitle>Home</SubTitle>}
          to="/"
          direction="left"
        />
      </section>
    </Layout>
  )
}

export default NotFound
