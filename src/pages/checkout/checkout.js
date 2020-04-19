import React, { Component } from 'react'
import './checkout.scss'
import Image from 'react-image-resizer'

export default class checkout extends Component {
    render() {
        console.log(this.props)
        const { cart } = this.props
        return (
            <div className='checkout-page'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Description</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>
                {cart.length === 0 ? <div><strong>Your cart is empty</strong></div> :

                    cart.map(item =>
                        <div className='checkout-item'>
                            <div className='image-container'>
                                <Image src={item.image} height={100} width={100} />
                            </div>
                            <span className='name'>{item.name}</span>
                            <span className='quantity'>
                                <div className="arrow">&#10094;</div>
                                <span className="value">{item.count}</span>
                                <div className="arrow">&#10095;</div>
                            </span>
                            <span className='price'>${((item.count * item.price) / 100).toFixed(2)}</span>
                            <div className='remove-button' onClick={e => this.props.handleRemoveCart(e, item)}>&#10005;</div>
                        </div>
                    )
                }
            </div>
        )
    }
}
