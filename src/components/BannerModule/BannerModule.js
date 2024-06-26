import * as React from "react"
import { Link } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/Button"
/*import { FooterStyles, FooterMenuStyles } from "../Footer/FooterStyles"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
  FaGithubSquare as Github,
} from "react-icons/fa"*/

const BannerModule = ({ children, title, subTitle, price, enquire, viewCode, viewProject }) => {
  //const siteMeta = UseSiteMetadata()
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
                to={viewCode}
                />
              )}
              {enquire && (
                <Button
                  className="btn"
                  text="View Project"
                  as={Link}
                  to={viewProject}
                />
              )}
              {!enquire && (
                <Button
                className="btn"
                text="About Me"
                as={Link}
                to="/about"
              />
              )
              }
              {!enquire && (
                  <a
                  href="https://drive.google.com/file/d/15RlZ1_wE4r9-ce11Z3EZBB3ljBekf8dE/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="link"
                  >
                    <Button
                      className="btn"
                      text="Resume"
                    />
                  </a>
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
