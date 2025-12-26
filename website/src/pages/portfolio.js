import { Component } from 'react';
import config from '../config/config';
import projects from '../data/projects.json';

class Portfolio extends Component {  
    
	componentDidMount() {
        document.title = `${config.name}`;
    }
    
    render() {
        
        return (
            <>
                <section>
                    <h3>Projects that speak<br/><span className='color-grey'> for themselves.</span></h3>
                    <br/>
                    <h4 className='extra-light'>From branding to digital experiences, campaigns, and interiors — each project is a story crafted with care, vision, and attention to detail.</h4>
                </section>
                <section className='grid x3 background-dark'>
                    {projects.map((project, index) => (
                        <div className='pointer card' key={index}>
                            <div className='card-image'>
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className='color-light'>
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <div className='project-tags'>
                                    {project.tags.map((tag, i) => (
                                        <small className='color-grey' key={i}>{tag}{i < project.tags.length - 1 ? ', ' : ''}</small>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </>
        );
    }
}

export default Portfolio
