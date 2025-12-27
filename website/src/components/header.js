import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import BrandMark from "./brandmark";
import Web from '../routes/web.js';

class Header extends Component {
    
    render() {
        return (
            <header className='grid x2 align-center'>
                <Link to='/'>
                    <BrandMark size={ 35 } showLogo={ true } logoPosition="right" />
                </Link>
                <nav className='text-align-right'>
                    {Web.map((route, index) => (
                        route.label && route.public && (
                            <NavLink end className={({ isActive }) => `bold column padding left-right-large${isActive ? " active" : ""}`} key={ index } to={ route.path } exact >{route.label}</NavLink>
                        )
                    ))}
                </nav>
            </header>
        );
    }
}

export default Header;
