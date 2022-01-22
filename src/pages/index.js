import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Aman Singh"
          subTitle="Coder Developer Hacker"
        />
        <BasicTextModule
          title="I have passion for software development and Cyber Security"
          content="I have Contributed to numerous OpenSource Projects and also have successfully Completed GSoC'21 with OWASP Foundation for Secure-Tea Project. 
          I have experience with React, Nodejs, and Python while building my projects and during Internships."
          link="/projects"
          linkText="View Projects"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features
          title="Featured Projects"
          introduction="I have experience with React, Nodejs, and Python while building my projects and during Internships."
        />
        <LatestPosts
          title="Latest Blog Posts"
          introduction="A collection of awesome blogs about interesting trends in the world of technology. I write about topics ranging from Software Developement, bug bounties, CTFs, Hack the box walkthroughs, hardware challenges, real-life encounters and everything which can help other enthusiasts learn."
        />
      </Layout>
    </>
  )
}

export default Index
