import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import styled from "styled-components"

const NavBarHeader = ({ handleNavBar }) => {
  const data = useStaticQuery(graphql`
    query {
      restaurant: allDataJson {
        edges {
          node {
            restaurant_name
          }
        }
      }
    }
  `)
  const restaurant = data.restaurant.edges
  return (
    <HeaderWrapper>
      <Link to="/">
        {restaurant.map(({ node }) => {
          return <p className="logo">{node.restaurant_name}</p>
        })}
      </Link>
      <FaBars
        className="toggle-icon"
        onClick={() => {
          handleNavBar()
        }}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 1rem 0rem 0.9rem 0.5rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.5rem;
    color: var(--white);
    cursor: pointer;
  }
  .logo {
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: light;
    margin-left: 10px;
    color: var(--white);
  }
  a {
    text-decoration: none;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
    padding: 0.4rem 1rem;
  }
`

export default NavBarHeader
