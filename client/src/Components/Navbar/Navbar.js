import React, { useState } from 'react'
import './Navbar.scss'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import menuIcon from '../../assets/icons/menu.svg'
import closeIcon from '../../assets/icons/close.svg'

function Navbar() {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }
    return (
        <div className="navbar">           
            {/* Desktop Menu */}
            <Link to="/" className="navbar__logo">
                <img src={Logo} alt="logo" />
            </Link>
            <div className="navbar__links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/">Doctors</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/contact">Contact</Link>
            </div>
            <div className="navbar__action">
                <Link to="/login" className="action loginBtn">Login</Link>
                <Link to="/appointment" className="action appointementBtn">Book an Appointement</Link>
            </div>     

            {/* Mobile Menu */}
            <img onClick={() => handleMenu()} className="menuIcon" src={menuIcon} alt="menu" />
            {menu && 
            <div className="navbar__menu">                
                <img onClick={() => handleMenu()} className="closeIcon" src={closeIcon} alt="menu" />
                <div className="menu__action">
                    <Link to="/login" className="action loginBtn">Login</Link>
                    <Link to="/appointment" className="action appointementBtn">Book an Appointement</Link>
                </div>   
                <div className="menu__links">
                    <Link className="link" to="/home">Home</Link>
                    <Link className="link" to="doctors">Doctors</Link>
                    <Link className="link" to="/about">About</Link>
                    <Link className="link" to="/contact">Contact</Link>
                </div>                                      
            </div> 
            }  
        </div>
    )
}

export default Navbar
