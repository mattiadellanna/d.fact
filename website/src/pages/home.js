import { createRef, Component } from "react";
import config from '../config/config';
import Cta from "../components/cta";
import SectionTitle from '../components/sectionTitle'
import keypoints from "../data/keypoints.json";

class Home extends Component {  
    sectionRef = createRef();

    state = {
        activeIndex: 0,
    };

    phrases = [
        "Design is not a logo.",
        "Design is not a website.",
        "Design is not a space.",
    ];

    
    componentDidMount() {
        document.title = `${config.name}`;
        window.scrollTo(0, 0); 
        this.interval = setInterval(() => {
            this.setState({
                activeIndex: (this.state.activeIndex + 1) % this.phrases.length,
            });
        }, 4000);
        
    }
  
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                <section className="hero">
                    <h3>From Brand to Space: <br/><span className="color-grey">We Design Your World.</span></h3>
                    <br/>
                    <h4 className="extra-light">Every project begins with an idea and<br/>ends with something you can touch, see and live.</h4>
                    <br/><br/>
                    <Cta text="Discover our approach" url="services"></Cta>
                </section>
                <SectionTitle text="A studio built on coherence."></SectionTitle>
                <section className="grid x2 align-center">
                    <div>
                        <img src="../illustrations/studio.svg"/>
                    </div>
                    <div>
                        <p>
                            D.Fact is an independent design studio.<br/>We work with brands, companies and individuals who believe that design is not decoration, but a strategic tool.
                            <br/><br/>
                            Our work is driven by clarity, consistency and long-term thinking.<br/>We collaborate closely with clients, turning ideas into structured, meaningful solutions.
                        </p>
                        <br/><br/>
                        <Cta text="View Case Studies" url="portfolio"></Cta>
                    </div>
                </section>
                <SectionTitle text="We design systems, not single pieces."></SectionTitle>
                <section className="grid x3">
                    {keypoints.map((step, index) => (
                        <div key={index}>
                            <img src={`../illustrations/${step.illustration}.svg`}/>
                            <h4>{ step.title }</h4>
                            <p>{ step.text }</p>
                        </div>
                    ))}
                </section>
                <section className="background-dark">
                    <h3 className="color-light">Ready to build something timeless?</h3>
                    <br/><br/>
                    <h4 className="color-light extra-light">Let's collaborate to transform your vision into a concrete reality<br/>based on fact, not finction.</h4>
                    <br/><br/>
                    <Cta text="Start a project" url="contacts" color="light"></Cta>
                </section>
            </>
        );
    }
}

export default Home
