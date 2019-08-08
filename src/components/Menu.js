import React from 'react'
import styled from 'styled-components'
import T from 'prop-types'

import MenuItem from './MenuItem'

const MenuWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`

const Menu = ({ items }) => {
  const menuItemsNodes = items.map((item) => (
    <MenuItem key={`menu-${item.text}`} to={item.route}>
      <h3>{item.text}</h3>
    </MenuItem>
  ))
  return <MenuWrapper>{menuItemsNodes}</MenuWrapper>
}

Menu.propTypes = {
  items: T.arrayOf(T.object).isRequired,
}

export default Menu
