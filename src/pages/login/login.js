import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: ''
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault()

        axios.post('http://localhost:3000/login.json', { email: this.state.email, password: this.state.password }, { withCredentials: false })
            .then(response => {
                if (response.data.logged_in) {
                    this.props.handleLogin(response.data)
                    this.redirect()
                } else {
                    this.setState({
                        errors: response.data.errors
                    })
                    console.log(response)
                }
            })
            .catch(error => console.log('api errors:', error))
    };


    redirect = () => {
        this.props.history.push('/')
    }

    handleErrors = () => {
        return (
            <div>
                <ul>
                    {this.state.errors.map(error => {
                        return <li key={error} style={{ listStyleType: 'none' }}>{error}</li>
                    })}
                </ul>
            </div>
        )
    }

    render() {
        console.log(this.props)
        const { email, password } = this.state
        return (
            <div className='container' style={{ fontFamily: 'Oswald', textAlign: '-webkit-center' }}>
                <h1>Log In</h1>
                <div>
                    {
                        this.state.errors ? this.handleErrors() : null
                    }
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '270px', lineHeight: '3' }}>
                        <input
                            placeholder="email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            style={{ margin: '3%', padding: '0 10px' }}
                        />
                        <input
                            placeholder="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            style={{
                                margin: '3%', padding: '0 10px'
                            }}
                        />
                    </div>
                    <button placeholder="submit" type="submit" className="btn btn-primary">
                        Log In
          </button>
                    <div>
                        or <Link to='/signup'>sign up</Link>
                    </div>

                </form>
            </div>
        );
    }
}
export default Login;