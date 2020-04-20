import React, { Component } from 'react'
import axios from 'axios'

export default class contact extends Component {
    constructor() {
        super()

        this.state = {
            content: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/contacts/view.json').then(res => {
            this.setState({
                content: res.data
            })
        })
    }

    render() {
        return (
            <div className='container' style={{ fontFamily: 'Oswald' }}>
                <h1>CONTACT US</h1>
                {
                    this.state.content.map(data =>
                        <div>{data.content}</div>
                    )
                }
            </div>
        )
    }
}
