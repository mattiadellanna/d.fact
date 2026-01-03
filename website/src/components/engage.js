
import { Component } from 'react';
import Cta from './cta';

class Engage extends Component {
    
    render() {
        const year = new Date().getFullYear();
        
        return (
            <section className="background-dark">
                <h3 className="color-light">Ready to build something timeless?</h3>
                <br/><br/>
                <h4 className="color-light extra-light">Let's collaborate to transform your vision into a concrete reality<br/>based on fact, not finction.</h4>
                <br/><br/>
                <Cta text="Start a project" url="contacts" color="light"></Cta>
            </section>
        );
    }
}

export default Engage;