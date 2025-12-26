import React, { useEffect, createRef, Component } from "react";
import config from '../config/config';

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
                <section>
                    <h3>From Brand to Space: <br/><span className="color-grey">We Design Your World.</span></h3>
                    <br/>
                    <h4 className="extra-light">Every project begins with an idea and<br/>ends with something you can touch, see, and live.</h4>    
                </section>
            </>
        );
    }
}

export default Home
