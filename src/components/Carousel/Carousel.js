import React, { Component } from 'react'
import styled from 'styled-components'
import T from 'prop-types'

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.5em auto;
  width: ${({ width }) => width};
`

const OuterWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  margin: auto auto;
`

const InnerWrapper = styled.div`
  display: block;
  position: relative;
  width: ${({ children, innerWrapperWidth }) =>
    children.length * innerWrapperWidth}px;
  left: -${({ innerWrapperWidth, index }) => innerWrapperWidth * index - innerWrapperWidth}px;
  transition: left 1s;
  > img {
    float: left;
  }
`

export default class Carousel extends Component {
  static propTypes = {
    width: T.oneOfType([T.string, T.number]),
    children: T.oneOfType([T.arrayOf(T.node), T.node]).isRequired,
  }

  static defaultProps = {
    width: '300px',
  }

  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.state = {
      index: 1,
      setWidth: props.width,
    }
  }

  componentDidMount() {
    this.getWidth()
    window.addEventListener('resize', this.getWidth)
    setInterval(() => this.next(), 2000)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWidth)
  }

  getWidth = () => {
    const { width } = this.ref.current.getBoundingClientRect()
    this.setState({ setWidth: width })
    // return width
  }

  next = () => {
    this.setState((prevState) => {
      const { index } = prevState
      const { children } = this.props

      const next = index + 1
      // if index > last index = first
      return { ...prevState, index: next > children.length ? 1 : next }
    })
  }

  prev = () => {
    this.setState((prevState) => {
      const { index } = prevState
      const { children } = this.props

      const next = index - 1
      // if index is less than one, index = last
      return { ...prevState, index: next < 1 ? children.length : next }
    })
  }

  render() {
    const { children, width } = this.props
    const { setWidth, index } = this.state
    // console.log()
    return (
      <CarouselWrapper ref={this.ref} id="CarouselWrapper" width={width}>
        <OuterWrapper>
          <InnerWrapper
            id="InnerWrapper"
            innerWrapperWidth={setWidth}
            index={index}
          >
            {children.map((slide, i) => (
              <img
                alt={slide.props.alt}
                key={`slide-${i}`}
                src={slide.props.src}
                width={setWidth}
              />
            ))}
          </InnerWrapper>
        </OuterWrapper>
      </CarouselWrapper>
    )
  }
}
