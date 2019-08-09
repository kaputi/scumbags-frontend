import React from 'react'
import styled from 'styled-components'

import Icon from './Icon'

const SocialLinksWrapper = styled.div``

const Link = styled.a`
  margin: 0 10px;
`

const SocialLinks = () => (
  <SocialLinksWrapper>
    <Link href="https://facebook.com">
      <Icon set="fab" name="facebook-square" />
    </Link>
    <Link href="https://instagram.com">
      <Icon set="fab" name="instagram" />
    </Link>
  </SocialLinksWrapper>
)

export default SocialLinks
