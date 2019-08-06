import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'

const BackgroundWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${({ theme }) => theme.images.mainBackground});
  background-repeat: no-repeat;
  background-size: cover;
`

const SiteWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgroundColor};
  text-align: center;
`

const MainWrapper = ({ children }) => (
  <BackgroundWrapper>
    <SiteWrapper>{children}</SiteWrapper>
  </BackgroundWrapper>
)

MainWrapper.propTypes = {
  children: T.oneOfType([T.arrayOf(T.node), T.node]).isRequired,
}

export default MainWrapper
