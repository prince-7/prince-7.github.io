import * as React from "react"
import { Link } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/Button"
import { FooterStyles, FooterMenuStyles } from "../Footer/FooterStyles"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
  FaGithub as Github,
} from "react-icons/fa"

const BannerModule = ({ children, title, subTitle, price, enquire }) => {
  const siteMeta = UseSiteMetadata()
  return (
    <>
      <BannerModuleStyles>
        {children ? (
          children
        ) : (
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../../static/dungeonmaster.jpg"
            alt="Banner Image"
            layout="fullWidth"
            placeholder="blurred"
          />
        )}

        <div className="container">
          <div className="banner__content">
            {title && (
              <h1>
                {title}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h1>
            )}
            {subTitle && <h2>{subTitle}</h2>}
            {/**price && (
              <h2 className="price">
                £{price}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h2>
            )**/}
            <div className="banner__btns">
              {enquire && (
                <Button
                  className="btn"
                  text="View Code"
                  as={Link}
                  to="https://summerofcode.withgoogle.com/archive/2021/projects/4757291168956416"
                />
              )}
              {!enquire && (
                <Button
                className="btn"
                text="~$ whoami"
                as={Link}
                to="/about"
              />
              )
              }
            </div>
          </div>
        </div>
        <div className="gradient"></div>
      </BannerModuleStyles>
      <span id="topContent"></span>
    </>
  )
}

export default BannerModule
