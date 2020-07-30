import React, { Component } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class NavBarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path:
          "https://www.grindztogo.com/single.php/order/restaurant/sushiya/42?takeout=1",
        text: "menu",
      },
      {
        id: 1,
        path: "#information",
        text: "information",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navBarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <AniLink fade to={item.path} className="nav-link">
                {item.text}
              </AniLink>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.8rem 1.2rem;
    color: var(--white);
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s linear;
    background: rgba(255, 255, 255, 0.3);
    &:hover {
      background: var(--mainColor);
      color: var(--white);
      padding: 0.8rem 1.5rem;
    }
  }
  height: ${props => (props.open ? "100px" : "0px")};
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    .nav-link {
      background: rgba(255, 255, 255, 0);
      padding: 1rem 1.2rem;
      font-size: 0.8rem;
      letter-spacing: 1px;
    }
    .nav-link:hover {
      background: var(--white);
      color: var(--mainColor);
      padding: 1rem 1.2rem;
    }
    li:nth-child(7) > a:hover {
      color: var(--mainColor);
    }
  }
`

export default NavBarLinks
