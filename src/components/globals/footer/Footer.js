import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { FaInstagram, FaFacebook } from "react-icons/fa"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      footer: dataJson {
        hours
        phone
        street
        city
        instagram
        facebook
      }
    }
  `)
  const { hours, phone, street, city, instagram, facebook } = data.footer
  return (
    <FooterWrapper id="information">
      <div className="box contact">
        <h4>Contact Information</h4>
        <p className="phone">Phone: {phone}</p>
        <p>{street}</p>
        <p>{city}</p>
        <ul>
          {hours.map((value, id) => {
            return (
              <li className="hours" key={id}>
                {value}
              </li>
            )
          })}
        </ul>
        <div>
          <a href={instagram}>
            <FaInstagram />
          </a>
          <a href={facebook}>
            <FaFacebook />
          </a>
        </div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  background: var(--darkGray);
  color: var(--white);
  p,
  .phone,
  .hours {
    font-size: 1rem;
    line-height: 1.8rem;
  }
  li.hours {
    padding: 3px 0;
    list-style-type: none;
  }
  .box {
    margin: 0rem auto;
    padding: 2rem;
    text-align: center;
    h4 {
      font-size: 1.5rem;
      margin: 1rem 0;
    }
  }
  a {
    color: var(--white);
    font-size: 2rem;
    line-height: 6rem;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    .box {
      flex-basis: 100%;
    }
    .phone {
      font-size: 0.8rem;
    }
  }
`

export default Footer
