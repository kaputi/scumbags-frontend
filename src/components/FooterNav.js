import React from 'react'

import Nav from './Nav'
import Menu from './Menu'

const FooterNav = () => (
  <Nav>
    <Menu
      items={[
        { route: '/contact', text: 'Contact' },
        { route: '/wholesale', text: 'Wholesale' },
        { route: '/terms', text: 'Terms & conditions' },
      ]}
    />
  </Nav>
)

export default FooterNav
