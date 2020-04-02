import React from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Shop from './pages/shop/shop'
import PlaceHolder from './pages/placeholder'
import Login from './pages/login/login'
import Product from './pages/product/product'

import Header from './components/header/header'

import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      customer: {}
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/placeholder' component={PlaceHolder} />
          <Route exact path='https://localhost:3000/admin/login' />
          <Route exact path='/login' component={Login} />
          <Route path='/shop/products/:id' component={Product} />
        </Switch>
      </div>
    )
  }
}

export default App;
