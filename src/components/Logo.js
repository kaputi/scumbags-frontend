import styled from 'styled-components'

const Logo = styled.img.attrs((props) => {
  const { size, theme } = props
  const { small, medium, large } = props.theme.images.sizes
  let logoSize = size
  switch (size) {
    case 'small':
      logoSize = small
      break
    case 'medium':
      logoSize = medium
      break
    case 'large':
      logoSize = large
      break
    default:
      logoSize = size
      break
  }

  return { src: theme.images.logo, logoSize }
})`
  width: ${({ logoSize }) => logoSize};
`

export default Logo
