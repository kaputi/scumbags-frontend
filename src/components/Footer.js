import React from 'react'
import styled from 'styled-components'
import SocialLinks from './SocialLinks'

import FooterNav from './FooterNav'

const CopyRight = styled.p`
  color: ${({ theme }) => theme.menuItemColor};
`

const FooterWrapper = styled.div`
  padding-top: 50px;
`

const Footer = () => (
  <FooterWrapper>
    <SocialLinks />
    <FooterNav />
    <CopyRight>© Scumbags Messenger Bags 2019</CopyRight>
  </FooterWrapper>
)

export default Footer
