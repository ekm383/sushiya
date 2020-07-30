import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = ({ style, title, titleSmall, subtitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: allDataJson {
        edges {
          node {
            logo {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const restaurantLogo = data.logo.edges
  return (
    <BannerWrapper style={style}>
      <div className="box">
        {restaurantLogo.map(({ node }) => {
          return (
            <Img
              className="logo"
              fluid={node.logo.childImageSharp.fluid}
              alt="logo"
            />
          )
        })}
        <h1 className="title">{title}</h1>
        <h2 className="titleSmall">{titleSmall}</h2>
        <h3 className="subtitle">{subtitle}</h3>
        {children}
      </div>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  width: 90%;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: var(--white);
  .box {
    flex-basis: 80%;
    text-align: center;
    padding: 9rem 0rem;
  }
  .logo {
    width: 50%;
    margin: 0rem auto;
  }
  .title,
  .subtitle {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .title {
    font-size: 3rem;
    line-height: 3.5rem;
    text-transform: uppercase;
  }
  .titleSmall {
    line-height: 4rem;
  }
  .subtitle {
    font-size: 1rem;
    font-weight: lighter;
    line-height: 1.5rem;
  }
  @media (max-width: 768px) {
    flex-basis: 90%;
    justify-content: flex-start;
    .box {
      flex-basis: 100%;
      padding: 8rem 0rem 6rem 0rem;
    }
    .logo {
      width: 50%;
    }
    .titleSmall {
      font-size: 2rem;
      line-height: 2rem;
    }
    .subtitle {
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 1.2rem;
    }
  }
`

export default Banner
