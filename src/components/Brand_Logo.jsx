import React from 'react'
import { Link } from 'react-router-dom';
import sitelogo from '../assets/svgs/Navbar/site-logo.svg';
import './Navbar/Navbar.css';

function BrandLogo() {
    return (
        <Link to="/" className='brand-logo-link'><img src={sitelogo} alt="brand_logo" className='navbar-brand brand_logo' /></Link>

    )
}

export default BrandLogo