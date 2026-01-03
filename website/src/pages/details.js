    import { useEffect, useState } from "react";
    import { useParams } from "react-router-dom";
    import portfolio from "../data/portfolio.json";
    import TextWithImages from "../components/textWithImages";

    export default function Details() {
    const { slug } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const found = portfolio.find(item => item.slug === slug);
        setProject(found);
    }, [slug]);

    if (!project) {
        return (
        <section className="not-found">
            <h2>Non trovato</h2>
            <p>{slug}</p>
        </section>
        );
    }

    const imagesPath = `/projects/${slug}/`;

    return (
        <>
            <section className="hero background-dark background-cover" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${imagesPath}/preview.jpg)`}}>
                <h3 className="bold color-light-grey">{project.title}</h3>
                <br/>
                <h4 className="extra-light color-light-grey">{project.claim}</h4>
            </section>
            <div>
                <section>
                    <TextWithImages text={project.description} imagesPath={imagesPath} columns="2"/>
                </section>
            </div>
        </>
    );
    }
