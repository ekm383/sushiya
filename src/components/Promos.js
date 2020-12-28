import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Promos = () => {
  const data = useStaticQuery(graphql`
    query {
      thanks: file(relativePath: { eq: "00357_Sushiya.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const thanksImage = data.thanks.childImageSharp.fluid
  return (
    <StyledFlyer>
      <div className="promo-copy">
        <h2>Open New Years Eve</h2>
        <p>Closed January 1st and 2nd</p>
      </div>
      {/* <a href="https://www.grindztogo.com/single.php/order/restaurant/sushiya/42?takeout=1">
        <Img className="promo-image" fluid={thanksImage} alt="promotion" />
      </a> */}
    </StyledFlyer>
  )
}

const StyledFlyer = styled.div`
  width: 80%;
  margin: 3rem auto 0rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .promo-copy {
    width: 100%;
    margin: 0rem auto;
    h2 {
      font-size: 3rem;
      font-family: "Poppins";
      line-height: 3.5rem;
      text-align: center;
      font-weight: bolder;
      margin-bottom: 1rem;
      letter-spacing: 0px;
      color: var(--mainColor);
    }
    p {
      font-family: "Open Sans";
      font-size: 1.2rem;
      text-align: center;
      color: white;
      padding: 1rem 1.5rem;
      background: var(--mainColor);
    }
  }
  .promo-image {
    width: 320px;
    margin-top: 25px;
  }
  a .promo-image {
    width: 600px;
    margin-top: 25px;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0rem auto;
    .promo-copy {
      h2 {
        font-size: 2rem;
        line-height: 2rem;
        margin-top: 2rem;
      }
    }
    a .promo-image {
      width: 300px;
      margin-top: 25px;
    }
  }
`

export default Promos
