import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../../../assets'
import './style.scss'

export function Header(props) {
    return (
        <header className='header'>
            <div className="headerTop">
                <div className="container">
                    <div className="headerTopContainer">
                        <div className="headerContact">
                            <button onClick={() => window.location = 'mailto:mhhasanul@gmail.com'}>
                                <img src={assets.mailIcon} alt="mail icon" />
                                mhhasanul@gmail.com
                            </button>
                            <button onClick={() => window.location = 'tel:123-456-7890'}>
                                <img src={assets.phoneIcon} alt="phone icon" />
                                (12345)67890
                            </button>
                        </div>

                        <ul className="headerTopList">
                            <li className="headerTopItem">
                                <Link to='/'>English</Link>
                            </li>
                            <li className="headerTopItem">
                                <Link to='/'>USD</Link>
                            </li>
                            <li className="headerTopItem">
                                <Link to='/'>Login</Link>
                            </li>
                            <li className="headerTopItem">
                                <Link to='/'>Wishlist</Link>
                            </li>
                            <li className="headerTopItem">
                                <Link to='/'>
                                    <img src={assets.cartIcon} alt="cart icon" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="headerBottom">
                <div className="container">
                    <div className="headerBottomContainer">
                        <div className='headerBottomContent'>
                            <Link to='/' className="headerLogo">Hekto</Link>
                            <ul className="headerBottomList">
                                <li className="headerBottomItem">
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className="headerBottomItem">
                                    <Link to='/'>Pages</Link>
                                </li>
                                <li className="headerBottomItem">
                                    <Link to='/'>Products</Link>
                                </li>
                                <li className="headerBottomItem">
                                    <Link to='/'>Blog</Link>
                                </li>
                                <li className="headerBottomItem">
                                    <Link to='/'>Shop</Link>
                                </li>
                                <li className="headerBottomItem">
                                    <Link to='/'>Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div class="headerSearch">
                            <form>
                                <input type="text" name="search" />
                                <button type="submit"><img src={assets.searchIcon} alt="search icon" /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}