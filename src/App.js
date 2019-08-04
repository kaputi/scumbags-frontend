import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
  About,
  Cart,
  FAQ,
  Gallery,
  Home,
  Nav,
  Shop,
  ShopItem,
} from './components'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ShopItem} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
