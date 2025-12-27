import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import BrandMark from "./brandmark";
import socials from '../data/socials.json';
import TextSeparator from './textSeparator';
import config from '../config/config';


class Footer extends Component {
    
    render() {
        const year = new Date().getFullYear();
        
        return (
            <footer>
                <div>
                    <Link to='/'>
                        <BrandMark size={ 25 } showLogo={ true } logoPosition="right" />
                    </Link>
                </div>
                <br/><br/>
                <div>
                    <small>© {year} — All rights reserved.</small>
                    <TextSeparator/>
                    <small><span>{config.address}</span></small>
                    <TextSeparator/>
                    <small><a href="mailto:hello@dfact.studio">{config.email}</a></small>
                    <TextSeparator/>
                    <small><a href="mailto:hello@dfact.studio">{config.phone}</a></small>
                    <TextSeparator/>
                    {socials.map((social, index) => (
                        <NavLink className={"column padding left-right-small"} key={ index } title={social.title} to={ social.url } target="_blank">
                             <i className={social.icon}></i>
                        </NavLink>     
                    ))}
                </div>
            </footer>
        );
    }
}

export default Footer;
