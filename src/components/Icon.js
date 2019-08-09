import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledIcon = styled(FontAwesomeIcon).attrs((props) => {
  const { name, set, color, size, theme } = props
  const finalSize = size || theme.iconSize
  const finalColor = color || theme.menuItemColor

  return {
    icon: [set, name],
    size: finalSize,
    style: { color: finalColor },
  }
})``

export default StyledIcon
