 0;import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  background: #222;
  z-index: 25;
`

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`

const links = [
  { href: '/abilities', label: 'ABILITIES' },
  { href: '/feats', label: 'FEATS' },
  { href: '/maneuvers', label: 'MANEUVERS' },
  { href: '/crits', label: 'CRITS' },
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const Nav = () => (
  <StyledNav>
    <StyledUl>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </StyledUl>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </StyledNav>
)

export default Nav;
