import { Component } from "react";
import config from '../config/config';
import Cta from "../components/cta";
import SectionTitle from '../components/sectionTitle'
import ItemPreview from "../components/itemPreview";
import keypoints from "../data/keypoints.json";
import portfolio from '../data/portfolio.json';


class Home extends Component { 
    componentDidMount() {
        document.title = `${config.name}`;
        window.scrollTo(0, 0); 
    }
  
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const counter = 3
        const featuredProjects = [...portfolio].sort(() => 0.5 - Math.random()).slice(0, counter);

        return (
            <>
                <section className="hero background-yellow">
                    <h3>From Brand to Space: <br/><span className="color-light">We Design Your World.</span></h3>
                    <br/>
                    <h4 className="extra-light">Every project begins with an idea and<br/>ends with something you can touch, see and live.</h4>
                    <br/><br/>
                    <Cta text="Discover our approach" url="services"></Cta>
                </section>
                <div>
                    <SectionTitle text="Fragments of a vision"></SectionTitle>
                    <section>
                        <div className="grid x3 align-center">
                            {featuredProjects.map((project, index) => (
                                <ItemPreview item={project} index={index} />
                            ))}
                        </div>
                        <div className="text-align-center">
                            <br/><br/><br/>
                            <Cta text="Discover our approach" url="portfolio"></Cta>
                        </div>
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
                    <section className="grid x3 text-align-center">
                        {keypoints.map((step, index) => (
                            <div key={index}>
                                <img src={`../illustrations/${step.illustration}.svg`}/>
                                <h4>{ step.title }</h4>
                                <p>{ step.text }</p>
                            </div>
                        ))}
                    </section>
                </div>
            </>
        );
    }
}

export default Home
