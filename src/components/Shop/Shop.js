import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Shop extends Component {
  constructor() {
    super()
    this.state = {
      itemList: [],
    }
  }

  fetchItems = async () => {
    const response = await fetch('http://localhost:9000/api/products/list')
    const { data } = await response.json()
    // TODO: check for errors
    // console.log(data)
    const items = data.map((item) => {
      // const { images, price, discount, stock, id, description, name } = item
      const { name, _id } = item
      return (
        <Link key={_id} to={`/shop/${_id}`}>
          <li>{name}</li>
        </Link>
      )
    })
    this.setState({ itemList: items })
  }

  componentWillMount = () => {
    this.fetchItems()
  }

  render() {
    const { itemList } = this.state
    // console.log(itemList)
    return (
      <div>
        <h1>Shop</h1>
        <ul>{itemList}</ul>
      </div>
    )
  }
}
