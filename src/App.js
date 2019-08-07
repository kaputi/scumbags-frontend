import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import {
  About,
  Cart,
  FAQ,
  Gallery,
  Home,
  Shop,
  ShopItem,
  PageNotFound,
} from './components/pages'
import MainWrapper from './components/MainWrapper'
import TopNav from './components/TopNav'
import Footer from './components/Footer'

import { light } from './config/theme'

function App() {
  return (
    <Router>
      <ThemeProvider theme={light}>
        <MainWrapper>
          <TopNav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ShopItem} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/FAQ" component={FAQ} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </MainWrapper>
      </ThemeProvider>
    </Router>
  )
}

export default App
