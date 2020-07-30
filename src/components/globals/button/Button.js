import React from "react"
import styled from "styled-components"

const Button = ({ children, style }) => {
  return <ButtonWrapper style={style}>{children}</ButtonWrapper>
}

const ButtonWrapper = styled.button`
  display: block;
  margin: 2rem auto 0rem auto;
  color: var(--white);
  background: var(--mainColor);
  border: 1px solid var(--mainColor);
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.2s linear;
  &:hover {
    background: transparent;
    border: 1px solid var(--mainColor);
    color: var(--mainColor);
  }
  &:focus {
    outline: none;
  }
`

export default Button
