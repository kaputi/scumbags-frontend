import React from 'react'

import Nav from './Nav'
import Logo from './Logo'
import Menu from './Menu'
import MenuItem from './MenuItem'

const TopNav = () => (
  <Nav>
    <Menu
      items={[
        { route: '/shop', text: 'Shop' },
        { route: '/gallery', text: 'Gallery' },
      ]}
    />
    <MenuItem to="/">
      <Logo size="160px" />
    </MenuItem>
    <Menu
      items={[
        { route: '/about', text: 'About' },
        { route: '/FAQ', text: 'FAQ' },
      ]}
    />
  </Nav>
)

export default TopNav
