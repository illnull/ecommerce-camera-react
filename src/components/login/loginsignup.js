import React, { Component } from 'react'
import axios from 'axios'
import './loginsignup.scss'

export default class LoginSignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
        }
    }

    handleSubmit = e => {
        const { email, password, password_confirmation } = this.state
        axios.post("http://localhost:3000/registerations.json", {

            email: email,
            password: password,
            password_confirmation: password_confirmation
        }).then(res => {
            console.log(res)
            console.log(this.props)
            if (res.data.status === "created") {
                console.log("hi")
                this.props.handleSuccessfulAuth(res.data)
            } else {
                console.log("no")
            }
        }).catch(e => {
            console.log(e.response)
        })
        e.preventDefault()
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
                    <input type="password" name="password_confirmation" placeholder="Confirm Password" value={this.state.password_confirmation} onChange={this.handleChange} required />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}
