import React from "react";
import { Link } from 'react-router-dom';

const Cta = ({ text, url, color="dark"}) => {
    return (
        <Link to={`/${url}`} className={`bold uppercase color-${color}`}>
            {text} 
            <i className="fa fa-long-arrow-right padding left-small" aria-hidden="true"></i>
        </Link>
    );
};

export default Cta;
