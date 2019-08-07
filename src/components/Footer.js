import React from 'react'
import styled from 'styled-components'

import FooterNav from './FooterNav'

const CopyRight = styled.p`
  color: ${({ theme }) => theme.menuItemColor};
`

const FooterWrapper = styled.div``

const Footer = () => (
  <FooterWrapper>
    <FooterNav />
    <CopyRight>© Scumbags messenger bags</CopyRight>
  </FooterWrapper>
)

export default Footer
