import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Copyright = () => {
  const data = useStaticQuery(graphql`
    query {
      footer: dataJson {
        copyright
      }
    }
  `)
  const { copyright } = data.footer
  return (
    <CopyrightWrapper className="copyright">
      &copy; {copyright}
    </CopyrightWrapper>
  )
}

const CopyrightWrapper = styled.div`
  width: 100vw;
  text-align: center;
  padding: 1rem 0rem 1rem 0rem;
  font-size: 0.8rem;
  color: var(--white);
  background: var(--mainColor);
  a {
    color: var(--white);
  }
`

export default Copyright
