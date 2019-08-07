import styled from 'styled-components'

const Logo = styled.img.attrs({
  logoSize: (props) => {
    const { size } = props
    const { small, medium, large } = props.theme.images.sizes
    switch (size) {
      case 'small':
        return small
      case 'medium':
        return medium
      case 'large':
        return large
      default:
        return size
    }
  },
  src: (props) => props.theme.images.logo,
})`
  width: ${(props) => props.logoSize};
`

export default Logo