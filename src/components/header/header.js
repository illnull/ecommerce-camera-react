import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = (props) => {

    const handleClick = () => {
        axios.delete('http://localhost:3000/logout.json', { withCredentials: false })
            .then(response => {
                props.handleLogout()
            })
            .catch(error => console.log(error))
    }
    return (
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
                    <Link className='upper-option' to='/about'>
                        ABOUT
                    </Link>
                    <Link className='upper-option' to='/contact'>
                        CONTACT
                    </Link>
                    {
                        props.isLoggedIn ?
                            <Link className='upper-option' to='/shop'>ACCOUNT</Link> :
                            <Link className='upper-option' to='/signup'>
                                SIGN UP
                            </Link>
                    }

                    {
                        props.isLoggedIn ?
                            <Link to='/' onClick={handleClick}>LOG OUT</Link> :
                            <Link className='upper-option' to='/login'>
                                LOGIN
                            </Link>
                    }
                </div>
            </div>
        </div>
    )
}
export default Header