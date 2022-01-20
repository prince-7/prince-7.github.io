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
          link="/products"
          linkText="View Projects"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features
          title="Featured Projects"
          introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
        />
        <LatestPosts
          title="The Latest from Barcadia"
          introduction="Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
        />
      </Layout>
    </>
  )
}

export default Index
