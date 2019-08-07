import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuItem = styled(Link)`
  color: ${({ theme }) => theme.menuItemColor};
  margin: 0 25px;
`
export default MenuItem
