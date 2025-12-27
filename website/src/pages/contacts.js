import { Component } from 'react';
import config from '../config/config';
import ContactForm from '../components/contactForm';

class Contacts extends Component {  
    
	componentDidMount() {
        document.title = `${config.name}`;
        window.scrollTo(0, 0); 
    }
    
    render() {
        
        return (
            
            <>
                <section className='hero grid x2'>
                    <div>
                        <h3>Let’s craft <br/><span className="color-grey">something together.</span></h3>
                        <br/>
                        <h4 className="extra-light">We’re here to discuss your brand, <br/>your space, your vision — or simply to say hello.</h4>    
                        <hr className='margin top-bottom-large'/>
                        <div className='grid x2'>
                            <div>
                                <h6 className='bold uppercase'>E-Mail</h6>
                                <p>{config.email}</p>
                            </div>
                            <div>
                                <h6 className='bold uppercase'>Phone</h6>
                                <p>{config.phone}</p>
                            </div>
                            <div>
                                <h6 className='bold uppercase'>Studio</h6>
                                <p>{config.address}</p>
                            </div>
                        </div>
                    </div>
                    <ContactForm></ContactForm>
                </section>
            </>

        );
    }
}

export default Contacts
