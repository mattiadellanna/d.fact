import { Component } from 'react';
import config from '../config/config';

class Projects extends Component {  
    
	componentDidMount() {
        document.title = `${config.name}`;
        window.scrollTo(0, 0); 
    }
    
    render() {
        
        return (
            <p style={{padding: 100}}>Projects</p>
        );
    }
}

export default Projects
