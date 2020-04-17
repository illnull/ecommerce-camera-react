import React, { Component } from 'react'

export default class checkout extends Component {
    render() {
        console.log(this.props)
        const { cart } = this.props
        return (
            <div>
                {cart.length === 0 ? <div>Cart empty</div> : <div>Items</div>}
            </div>
        )
    }
}
