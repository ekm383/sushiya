import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import Map from "../components/Map"
import Contact from "../components/ContactForm"
import Button from "../components/globals/button/Button"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      content: dataJson {
        intro
        menu
      }
    }
  `)
  const { intro, menu } = data.content
  return (
    <Layout>
      <SEO title="Home" description={intro} />
      <HeaderIndex>
        <Section style={{ width: "100vw", alignItems: "center" }}>
          <Banner subtitle={intro}>
            <a href={menu}>
              <Button>ORDER TAKEOUT</Button>
            </a>
          </Banner>
        </Section>
      </HeaderIndex>
      <Section style={{ padding: "4rem 0rem 2rem 0rem" }}>
        <Contact />
      </Section>
      <Map />
    </Layout>
  )
}

export default IndexPage
