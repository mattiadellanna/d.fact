import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import BrandMark from "./brandmark";
import Web from '../routes/web.js';

class Header extends Component {
    
    render() {
        return (
        <header>
            <Link to='/'>
                <BrandMark size={ 40 } showLogo={ true } logoPosition="right" />
            </Link>
            {Web.map((route, index) => (
                route.label && route.public && (
                        <NavLink key={ index } to={ route.path } exact >{route.label}</NavLink>
                )
            ))}
        </header>
        );
    }
}

export default Header;
