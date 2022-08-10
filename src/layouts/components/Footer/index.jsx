import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../../../assets'
import './style.scss'

export function Footer(props) {
    return (
        <footer className='footer'>
            <div className="footerTop">
                <div className="container">
                    <div className="footerTopContainer">
                        <div className="footerColumn">
                            <Link to='/' className='footerLogo'>Hekto</Link>
                            <form className='justifyBetween'>
                                <input type="text" name="email" placeholder='Enter Email Address' />
                                <button type="submit">sign up</button>
                            </form>
                            <p>contact info</p>
                            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                        </div>

                        <div className="footerColumn">
                            <h3 className="footerHeading">Catagories</h3>
                            <ul className="footerLinks">
                                <li className="footerItem">
                                    <Link to='/'>Laptops & Computers</Link>
                                </li>
                                <li className="footerItem">
                                    <Link to='/'>Cameras & Photography</Link>
                                </li>
                                <li className="footerItem">
                                    <Link to='/'>Smart Phones & Tablets</Link>
                                </li>
                                <li className="footerItem">
                                    <Link to='/'>Video Games & Consoles</Link>
                                </li>
                                <li className="footerItem">
                                    <Link to='/'>Waterproof Headphones</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footerColumn">
                            <h3 className="footerHeading">Customer Care</h3>
                            <ul className="footerLinks">
                                <li className="footerItem">
                                    <Link to='/'>My Account</Link>
                                </li>
                                <li className="footerItem">
                                    <Link to='/'>Discount</Link>
                                </li>
                                <li className="footerItem">
                                    <Link to='/'>Returns</Link>
                                </li>
                                <li className="footerItem">
                                    <Link to='/'>Orders History</Link>
                                </li>
                                <li className="footerItem">
                                    <Link to='/'>Order Tracking</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footerColumn">
                            <h3 className="footerHeading">Pages</h3>
                            <ul className="footerLinks">
                                <li className="footerItem">
                                    <Link to='/'>Blog</Link>
                                </li>
                                <li className="footerItem">
                                    <Link to='/'>Browse the Shop</Link>
                                </li>
                                <li className="footerItem">
                                    <Link to='/'>Category</Link>
                                </li>
                                <li className="footerItem">
                                    <Link to='/'>Pre-Built Pages</Link>
                                </li>
                                <li className="footerItem">
                                    <Link to='/'>Visual Composer Elements</Link>
                                </li>
                                <li className="footerItem">
                                    <Link to='/'>WooCommerce Pages</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container">
                    <div className="copyrightContainer justifyBetween">
                        <span>©Webecy - All Rights Reserved</span>
                        <div className="footerIcons flex">
                            <Link to='https://www.facebook.com/'>
                                <img src={assets.facebookIcon} alt="facebook icon" />
                            </Link>
                            <Link to='https://www.instagram.com/'>
                                <img src={assets.instagramIcon} alt="instagram icon" />
                            </Link>
                            <Link to='https://twitter.com/'>
                                <img src={assets.twitterIcon} alt="twitter icon" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}