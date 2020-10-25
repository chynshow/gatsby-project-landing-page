import React from "react"
import SVGClock from "../../../common/SVGs/Clock"

const OpenHourInfo = () => {
  return (
    <div className="c-open-hour-info">
      <SVGClock />
      <p className="c-open-hour-info__text">
        <time>10:00 A.M.</time> - <time>21:00 P.M.</time>
      </p>
    </div>
  )
}

export default OpenHourInfo
