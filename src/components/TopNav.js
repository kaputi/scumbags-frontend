import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from './Logo'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  color: white;
`

const StyledLink = styled(Link)`
  color: #888;
`

const LeftMenu = styled.ul`
  width: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`
const RightMenu = styled.ul`
  width: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`

const TopNav = () => (
  <Nav>
    <LeftMenu>
      <StyledLink to="/shop">
        <h3>Shop</h3>
      </StyledLink>
      <StyledLink to="/gallery">
        <h3>Gallery</h3>
      </StyledLink>
    </LeftMenu>
    <StyledLink to="/">
      <Logo size="160px" />
    </StyledLink>
    <RightMenu>
      <StyledLink to="/about">
        <h3>About</h3>
      </StyledLink>
      <StyledLink to="/contact">
        <h3>Contact</h3>
      </StyledLink>
    </RightMenu>
  </Nav>
)


export default TopNav
