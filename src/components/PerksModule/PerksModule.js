import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import { Chrono } from "react-chrono"
import items from "./data"

const PerksModule = () => {
  return (
    <PerksModuleStyles>
      <StaticImage
        className="perks__image--bg"
        src="../../../static/abstract-building.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
      <div style={{ width: "100%", height: "500px", margin: "50px"}}>
          <Chrono items={items} mode="HORIZONTAL"
          theme={{ 
            primary: "#6200ee",
            secondary: "#bb86fc",
            cardBgColor: "#1e1e1e",
            cardForeColor: "#bb86fc",
            titleColor: "#e1e1e1"
          }}
          />
        </div>
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
