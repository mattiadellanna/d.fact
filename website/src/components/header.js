import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withTranslation } from "react-i18next";
import BrandMark from "./brandmark";
import Web from '../routes/web.js';
import TextSeparator from './textSeparator.js';
import LanguageSelector from './langSelector.js';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showMenu: false
        };
    }
    
    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu });
    };

    render() {
        const { t } = this.props;
        
        return (
            <header className='grid vertical-align-middle'>
                <div className='col-25 xs-col-50'>
                    <Link to='/'>
                        <BrandMark size={ 35 } showLogo={ true } logoPosition="right" id="dfact-favicon" />
                    </Link>
                </div>

                <div className="none xs-col-50 xs-inline-block text-align-right" >
                    <i className="fa fa-bars" onClick={this.toggleMenu} ></i>
                </div>
                
                <nav id="mainMenu" className={`col-75 text-align-right xs-text-align-center xs-col-100 ${this.state.showMenu ? 'show' : ''}`}>
                    { Web.map((route, index) => (
                        route.label && route.public && (
                            <NavLink end className={({ isActive }) => `nav-link bold padding left-right-medium xs-col-100 xs-block ${isActive ? "active" : ''}`} key={ index } to={ route.path } >{t(`nav.${route.label}`)}</NavLink>
                        )
                    )) }
                    <span className='xs-none inline-block'>
                        <TextSeparator/>
                    </span>
                    <LanguageSelector/>
                </nav>
            </header>
        );
    }
}

export default withTranslation()(Header);
