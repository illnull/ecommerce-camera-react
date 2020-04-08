import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => (
    <div className='header'>
        <div className='upper-header'>
            <div className='slogan'>
                WE ARE GOING SOMEWHERE
            </div>
            <a href='http://localhost:3000/admin/login'>
                SUPER SECRET ADMIN
            </a>
            <div className='link-header'>
                <Link className='upper-option' to='/'>
                    LOGO
                </Link>
                <Link className='upper-option' to='/signup'>
                    SIGN UP
                </Link>
                <Link className='upper-option' to='/login'>
                    LOGIN
                </Link>
                <Link className='upper-option' to='/shop'>
                    MY ACCOUNT
                </Link>
            </div>
        </div>
    </div>
)
export default Header