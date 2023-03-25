import React, { useState } from 'react'
import { Link } from "react-router-dom";

// COMPONENTS
import '../Navbar/Navbar.css';
import Brand_logo from '../Brand_Logo';

// ICONS
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 200) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <>

            <nav className={color ? 'navbar navbar-bg navbar-expand-xl' : 'navbar navbar-expand-xl '}>
                <Brand_logo />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <GiHamburgerMenu />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav main-links">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>ƏSAS SƏHİFƏ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/Haqqımızda'}>HAQQIMIZDA</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/Xidmətlər'}>XİDMƏTLƏR</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/Mağaza'}>MAĞAZA</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/Bloq'}>BLOQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/Əlaqə'}>ƏLAQƏ</Link>
                        </li>
                    </ul>
                </div>
            </nav>


            {/* <nav className={color ? 'navbar navbar-bg' : 'navbar'}>
                <div className='navbar-left'>
                    <Brand_logo />
                </div>
                <div className="main-links">
                    <Link to="/">ƏSAS SƏHİFƏ</Link>
                    <Link to="/Haqqımızda">HAQQIMIZDA</Link>
                    <Link to="/Xidmətlər">XİDMƏTLƏR</Link>
                    <Link to="/Mağaza">MAĞAZA</Link>
                    <Link to="/Bloq">BLOQ</Link>
                    <Link to="/Əlaqə">ƏLAQƏ</Link>
                </div>
                <div className="navbar-right">

                </div>
            </nav> */}

        </>
    )
}

export default Navbar
