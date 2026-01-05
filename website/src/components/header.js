import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withTranslation } from "react-i18next";
import BrandMark from "./brandmark";
import Web from '../routes/web.js';
import TextSeparator from './textSeparator.js';
import LanguageSelector from './langSelector.js';

class Header extends Component {
    
    render() {
        const { t } = this.props;
        
        return (
            <header className='grid vertical-align-middle'>
                <div className='col-25'>
                    <Link to='/'>
                        <BrandMark size={ 35 } showLogo={ true } logoPosition="right" />
                    </Link>
                </div>
                <nav className='col-75 text-align-right'>
                    { Web.map((route, index) => (
                        route.label && route.public && (
                            <NavLink end className={({ isActive }) => `bold padding left-right-medium ${isActive ? "active" : null}`} key={ index } to={ route.path } >{t(`nav.${route.label}`)}</NavLink>
                        )
                    )) }
                    <TextSeparator/>
                    <LanguageSelector/>
                </nav>
            </header>
        );
    }
}

export default withTranslation()(Header);
