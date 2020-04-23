import React from 'react';
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

import HomePage from './pages/HomePage'
import Shop from './pages/shop/shop'
import PlaceHolder from './pages/placeholder'
import Login from './pages/login/login'
import SignUp from './pages/signup/signup'
import Product from './pages/product/product'
import Contact from './pages/contact/contact'
import About from './pages/about/about'
import CheckOut from './pages/checkout/checkout'

import Header from './components/header/header'

import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
      customer: JSON.parse(localStorage.getItem('customer')) || [],
      cart: JSON.parse(localStorage.getItem('cart')) || []
    }
  }

  componentDidMount() {
    return this.props.loggedInStatus ? this.redirect() : null
  }

  handleLogin = (data) => {
    localStorage.setItem('isLoggedIn', true)
    localStorage.setItem('customer', JSON.stringify(data.customer))
    console.log(data.customer)
    this.setState({
      isLoggedIn: true,
      customer: data.customer
    })
  }

  handleLogout = () => {
    localStorage.setItem('isLoggedIn', false)
    localStorage.setItem('customer', null)
    this.setState({
      isLoggedIn: false,
      customer: []
    })
  }

  loginStatus = () => {
    axios.get('http://localhost:3000/logged_in',
      { withCredentials: false })
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  }

  handleAddToCart = (e, product) => {
    this.setState(state => {
      const cart = state.cart
      let productInCart = false

      cart.map(item => {
        if (item.id === product.id) {
          productInCart = true
          item.count++
        }
      })
      if (!productInCart) {
        cart.push({ ...product, count: 1 })
      }
      localStorage.setItem("cart", JSON.stringify(cart))
      return cart
    })
  }

  handleAddQty = (e, product) => {
    this.setState(state => {
      const cart = state.cart

      cart.map(item => {
        if (item.id === product.id) {
          item.count++
        }
      })
      localStorage.setItem('cart', JSON.stringify(cart))
      return cart
    })
  }

  handleRemoveQty = (e, product) => {
    this.setState(state => {
      const cart = state.cart

      cart.map(item => {
        if (item.id === product.id)
          item.count--
      })

      localStorage.setItem('cart', JSON.stringify(cart))
      return cart
    })
  }

  handleRemoveCart = (e, item) => {
    this.setState(state => {
      const cart = state.cart.filter(elm => elm.id !== item.id)
      localStorage.setItem('cart', JSON.stringify(cart))
      return { cart }
    })
  }


  render() {
    console.log(this.state.cart)
    return (
      <div>
        <Header
          {...this.state}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={props => (<HomePage {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />)} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/shop/category/:id' component={Shop} />
          <Route exact path='/placeholder' component={PlaceHolder} />
          <Route exact path='https://localhost:3000/admin/login' />
          <Route exact path='/login' render={props => (<Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)} />
          <Route exact path='/signup' render={props => (<SignUp {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/shop/cart' render={() => (<CheckOut cart={this.state.cart} handleRemoveCart={this.handleRemoveCart} handleAddQty={this.handleAddQty} handleRemoveQty={this.handleRemoveQty} />)} />
          <Route path='/shop/products/:id' render={props => (<Product {...props} handleAddToCart={this.handleAddToCart} />)} />
        </Switch>
      </div>
    )
  }
}

export default App;
