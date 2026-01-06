import { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <br className='xs-none'/><br/>
                <div>
                    <small className='xs-col-100 xs-block'>© {year} — All rights reserved.</small>
                    <span className="xs-none">
                        <TextSeparator />
                    </span>
                    <small className='xs-col-100 xs-block'><span>{config.address}</span></small>
                    <span className="xs-none">
                        <TextSeparator />
                    </span>
                    <small className='xs-col-100 xs-block'><a href="mailto:hello@dfact.studio">{config.email}</a></small>
                    <span className="xs-none">
                        <TextSeparator />
                    </span>
                    <small className='xs-col-100 xs-block'><a href="mailto:hello@dfact.studio">{config.phone}</a></small>
                    <span className="xs-none">
                        <TextSeparator />
                    </span>
                    <br className='xs-block none'/><br className='xs-block none'/>
                    {socials.map((social, index) => (
                        <Link className="column padding left-right-small" key={ index } title={social.title} to={ social.url } target="_blank">
                             <i className={social.icon}></i>
                        </Link>     
                    ))}
                </div>
            </footer>
        );
    }
}

export default Footer;
