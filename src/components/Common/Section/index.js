import React from "react"

const Section = ({ className, children, bgLeft, bgRight }) => {
  return (
    <section className={className ? `c-section ${className}` : "c-section"}>
      <div className="c-section__content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex veniam
        ullam doloribus error eligendi quibusdam doloremque alias debitis
        architecto explicabo.
      </div>
      <div className="c-section__decor-img" />
    </section>
  )
}

export default Section
