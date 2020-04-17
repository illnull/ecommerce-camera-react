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
            provinces: [],
            selectedProvince: '',
            address: '',
            errors: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/provinces/view.json')
            .then(res => {
                this.setState({
                    provinces: res.data
                })
            })
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleDropList = (e) => {
        this.setState({
            selectedProvince: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { email, password, password_confirmation, fName, lName, phNum, city, country, selectedProvince, address } = this.state
        axios.post('http://localhost:3000/customers/new.json', { email: email, password: password, password_confirmation: password_confirmation, firstName: fName, lastName: lName, phoneNumber: phNum, city: city, country: country, province_id: selectedProvince, address: address }, { withCredentials: false })
            .then(response => {
                if (response.data.status === 'created') {
                    console.log(response)
                    this.props.handleLogin(response.data)
                    this.redirect()
                } else {
                    console.log(response)
                    this.setState({
                        errors: response.data.errors
                    })
                }
            })
            .catch(error => console.log('api errors:', error))
    }

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
        const { email, password, password_confirmation, fName, lName, phNum, city, country, provinces, address } = this.state
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
                        placeholder="Country"
                        type="text"
                        name="country"
                        value={country}
                        onChange={this.handleChange}
                    />
                    <select onChange={this.handleDropList}>
                        <option value="" disabled selected>Province</option>
                        {
                            provinces.map(province =>
                                <option value={province.id}>{province.name}</option>
                            )
                        }
                    </select>
                    <input
                        placeholder="City"
                        type="text"
                        name="city"
                        value={city}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Address"
                        type="text"
                        name="address"
                        value={address}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Password Confirmation"
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