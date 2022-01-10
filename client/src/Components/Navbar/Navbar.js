import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './Navbar.scss'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import menuIcon from '../../assets/icons/menu.svg'
import closeIcon from '../../assets/icons/close.svg'

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [isloggedIn, setIsLoggedIn] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }
    useEffect(() => {
        Axios.get('http://localhost:3001/session').then((res) => {            
            if(res.data === "loggedIn") {
                setIsLoggedIn(true);
            }                
        })  
    }, [isloggedIn])          
    
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
                {!isloggedIn && 
                    <Link to="/login" className="action loginBtn">Login</Link>
                }
                <Link to="/appointment" className="action appointementBtn">Book an Appointement</Link>
            </div>     

            {/* Mobile Menu */}
            <img onClick={() => handleMenu()} className="menuIcon" src={menuIcon} alt="menu" />
            {menu && 
            <div className="navbar__menu">                
                <img onClick={() => handleMenu()} className="closeIcon" src={closeIcon} alt="menu" />
                <div className="menu__action">
                {!isloggedIn && 
                    <Link to="/login" className="action loginBtn">Login</Link>
                }
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
