import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const navStyle = {
    color: 'white',
  }

  return (
    <nav className="top-nav">
      <Link style={navStyle} to="/">
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/shop">
          <li>Shop</li>
        </Link>
        <Link style={navStyle} to="/gallery">
          <li>Gallery</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/FAQ">
          <li>FAQ</li>
        </Link>
        <Link style={navStyle} to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
