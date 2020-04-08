import React, { Component } from 'react';
import axios from 'axios'
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            lName: '',
            phNum: '',
            country: '',
            city: '',
            email: '',
            password: '',
            password_confirmation: '',
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
        const { email, password, password_confirmation, fName, lName, phNum, city, country } = this.state
        axios.post('http://localhost:3000/customers/new.json', { email: email, password: password, password_confirmation: password_confirmation, firstName: fName, lastName: lName, phoneNumber: phNum, city: city, country: country }, { withCredentials: true })
            .then(response => {
                if (response.data.status === 'created') {
                    console.log(response)
                    this.props.handleLogin(response.data)
                    this.redirect()
                } else {
                    this.setState({
                        errors: response.data.errors
                    })
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
                        return <li key={error}>{error}</li>
                    })
                    }
                </ul>
            </div>
        )
    }

    render() {
        const { email, password, password_confirmation, fName, lName, phNum, city, country } = this.state
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="First Name"
                        type="text"
                        name="fName"
                        value={fName}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Last Name"
                        type="text"
                        name="lName"
                        value={lName}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Phone Number"
                        type="tel"
                        name="phNum"
                        value={phNum}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="City"
                        type="text"
                        name="city"
                        value={city}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Country"
                        type="text"
                        name="country"
                        value={country}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="password confirmation"
                        type="password"
                        name="password_confirmation"
                        value={password_confirmation}
                        onChange={this.handleChange}
                    />

                    <button placeholder="submit" type="submit">
                        Sign Up
          </button>

                </form>
                <div>
                    {
                        this.state.errors ? this.handleErrors() : null
                    }
                </div>

            </div>
        );
    }
}
export default Signup;