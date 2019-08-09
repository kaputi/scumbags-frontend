import React from 'react'
import T from 'prop-types'
import MediaQuery from 'react-responsive'

import limits from '../config/breakpointLimits'

const Breakpoint = ({ name, children }) => (
  <MediaQuery query={limits[name] || limits.desktop}>{children}</MediaQuery>
)

Breakpoint.propTypes = {
  name: T.oneOf([
    'desktop',
    'tablet',
    'phone',
    'all',
    'phoneAndTablet',
    'tabletAndDesktop',
  ]),
  children: T.oneOfType([T.arrayOf(T.node), T.node]).isRequired,
}

Breakpoint.defaultProps = {
  name: 'all',
}

export default Breakpoint
