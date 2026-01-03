import { Component } from 'react';
import ItemPreview from '../components/itemPreview';
import config from '../config/config';
import portfolio from '../data/portfolio.json';
import Cta from '../components/cta';

class Portfolio extends Component {  
    
	componentDidMount() {
        document.title = `${config.name}`;
    }
    
    render() {
        
        return (
            <>
                <section className="hero background-yellow">
                    <h3>Projects that speak <br/><span className="color-light">for themselves.</span></h3>
                    <br/>
                    <h4 className="extra-light">From branding to digital experiences, campaigns, and interiors — each project is a story crafted with care, vision, and attention to detail.</h4>
                    <br/><br/>
                    <Cta text="Create a new story" url="contacts"></Cta>
                </section>
                <div>
                    <section className="grid x3">
                        {portfolio.map((project, index) => (
                            <ItemPreview item={project} index={index} />
                        ))}
                    </section>
                </div>
                
            </>
        );
    }
}

export default Portfolio
