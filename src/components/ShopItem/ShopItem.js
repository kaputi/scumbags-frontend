import React, { Component } from 'react'

export default class ShopItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
    }
  }

  componentWillMount = () => {
    this.fetchItem()
  }

  fetchItem = async () => {
    const { id } = this.props.match.params

    const response = await fetch(`http://localhost:9000/api/products/${id}`)
    const { data } = await response.json()
    // // TODO: check for errors
    this.setState({ name: data.name })
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
}
