import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../../custom-button/custom-button'
import './banner.scss'

class Banner extends React.Component {
    constructor() {
        super()

        this.state = {
            bannerURL: 'https://images.unsplash.com/photo-1524786056946-bac0abef7643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1&q=80'
        }
    }

    render() {
        const { bannerURL } = this.state
        return (
            <div className='banner'>
                <div className='inner-banner'>
                    <div className='content' style={{ zIndex: '1', position: 'absolute' }}>
                        <p className='header'>CLASSIC DESIGN, MEET MODERN FUNCTION</p>
                        <p className='sub-header'>WEATHERPROOF TRAVEL BAGS AND CAMERA ACCESSORIES.</p>
                        <Link className='upper-option' to='/shop'>
                            <CustomButton style={{ marginLeft: '300px' }}>SHOP NOW</CustomButton>
                        </Link>
                    </div>
                    <img src={bannerURL} alt='camera' style={{ width: '100%', height: '800px' }} />
                </div>
            </div>
        )
    }
}

export default Banner