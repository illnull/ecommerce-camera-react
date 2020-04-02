import React from 'react'
import { Link } from 'react-router-dom'
import './menu-item.scss'

class MenuItem extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [{
                id: 1,
                imageURL: 'https://images.unsplash.com/photo-1502457604705-a48b4fbcd8e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80',
                title: 'ALPHA GLOBETROTTER',
                description: 'STYLISH & FUNCTIONAL CAMERA BAGS'
            },
            {
                id: 2,
                imageURL: 'https://cdn.shopify.com/s/files/1/0150/3760/t/17/assets/langly-camera-strap4-a-2-8.jpg?v=1726709010052014531',
                title: 'CAMERA ACCESSORIES',
                description: 'CORD & ROPE STRAPS FOR YOUR CAMERA'
            },
            {
                id: 3,
                imageURL: 'https://instagram.fyyc3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/71024928_156800622052944_8344289628928599369_n.jpg?_nc_ht=instagram.fyyc3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fz5piJJwHMQAX8C7Jo8&oh=4b104888a8612e4b8941c7bb43a1ceb5&oe=5EA3825A',
                title: 'MULTI GLOBETROTTER',
                description: 'PROTECTION FOR STYLISH SHOOTERS'
            }]
        }
    }
    render() {
        return (
            <div className='menu-container' >
                {
                    this.state.sections.map(({ title, description, imageURL }) => (
                        <div className='inner-menu'>
                            <Link to='/placeholder' className="inner-menu-link">
                                <div className='inner-content'>
                                    <div className='title'>{title}</div>
                                    <div className='subtitle'>{description}</div>
                                </div>
                                <div className='menu-img'>
                                    <img src={imageURL} alt={title} style={{ width: '100%', height: '500px' }} />
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div >
        )
    }
}

export default MenuItem