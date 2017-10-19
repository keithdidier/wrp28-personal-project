import React, { Component } from 'react';
import './Nav.css';
import 'font-awesome/css/font-awesome.min.css';
import brandMark from '../../assets/redbubble-logo.jpg';
import { Link } from 'react-router-dom';


export default class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="main-nav">
                    <Link to="/"><img className="brand-mark" src={brandMark} /></Link>
                    {/* <span className="brand-name">redbubble</span> */}
                    <div className="login-and-cart-container">
                        <a href={process.env.REACT_APP_LOGIN}><button className="">Log In</button></a>
                        <Link to="/cart" className="cart-icon"><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <form className="search-form">
                    <i id="search-icon" className="fa fa-search" aria-hidden="true"></i>
                    <input className="mobile-search-input"
                     type="search" 
                     placeholder="Search products by color, name, and price..." /> 
                </form>
            </div>
        )
    }
}