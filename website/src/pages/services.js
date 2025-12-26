import { Component } from 'react';
import config from '../config/config';
import SectionTitle from '../components/sectionTitle'
import steps from "../data/steps.json";
import services from '../data/services.json';
import Generator from '../components/generator';

class Services extends Component {  
	
    componentDidMount() {
        document.title = `${config.name}`;
    }
    
    render() {
        
        return (
            <>
                <section>
                    <h3>We design <br/><span className="color-grey">more than things.</span></h3>
                    <br/>
                    <h4 className="extra-light">We craft brands that speak, digital experiences that engage, <br/>communications that resonate and spaces that inspire.</h4>    
                </section>
                <SectionTitle text="Design That Matters"></SectionTitle>
                 <section className='grid x2 large-gap'>
                    {services.map((step, index) => (
                        <div key={index}>
                            <h4>{ step.title }</h4>
                            <p>{ step.text }</p>
                        </div>
                    ))}
                </section>
                <SectionTitle text="The process"></SectionTitle>
                <section className='grid x3'>
                    {steps.map((step, index) => (
                        <div key={index}>
                            <h1 className='color-light-grey'>{ String(index + 1).padStart(2, "0") }</h1>
                            <h4>{ step.title }</h4>
                            <p>{ step.text }</p>
                        </div>
                    ))}
                </section>
            </>
        );
    }
}

export default Services
