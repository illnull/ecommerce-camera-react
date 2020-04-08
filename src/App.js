import React from 'react';
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

import HomePage from './pages/HomePage'
import Shop from './pages/shop/shop'
import PlaceHolder from './pages/placeholder'
import Login from './pages/login/login'
import SignUp from './pages/signup/signup'
import Product from './pages/product/product'

import Header from './components/header/header'

import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      isLoggedIn: false,
      customer: {}
    }
  }

  componentDidMount() {
    return this.props.loggedInStatus ? this.redirect() : null
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      customer: data.customer
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      customer: {}
    })
  }

  loginStatus = () => {
    axios.get('http://localhost:3000/logged_in',
      { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={props => (<HomePage {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />)} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/placeholder' component={PlaceHolder} />
          <Route exact path='https://localhost:3000/admin/login' />
          <Route exact path='/login' render={props => (<Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)} />
          <Route exact path='/signup' render={props => (<SignUp {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)} />
          <Route path='/shop/products/:id' component={Product} />
        </Switch>
      </div>
    )
  }
}

export default App;
