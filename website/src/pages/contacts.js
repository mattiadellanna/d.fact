import { Component } from 'react';
import config from '../config/config';

class Contacts extends Component {  
    
	componentDidMount() {
        document.title = `${config.name}`;
        window.scrollTo(0, 0); 
    }
    
    render() {
        
        return (
            <p style={{padding: 100}}>Contacts</p>
        );
    }
}

export default Contacts
