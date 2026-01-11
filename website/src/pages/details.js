import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import portfolio from "../data/portfolio.json";
import Cta from "../components/cta";
import Hero from "../components/hero";
import i18n from "../i18n";
import SEOHead from "../components/seoHead";

export default function Details() {
    const { t } = useTranslation();
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [currentLang, setCurrentLang] = useState(i18n.language || "en");
    const imagesPath = `/projects/${slug}/`;

    const currentIndex = portfolio.findIndex((item) => item.slug === slug);
    const nextProject =
    currentIndex !== -1 && currentIndex < portfolio.length - 1 ? portfolio[currentIndex + 1] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
        const found = portfolio.find((item) => item.slug === slug);
        setProject(found);
        const handleLangChange = (lng) => setCurrentLang(lng);
        i18n.on("languageChanged", handleLangChange);

        return () => {
                i18n.off("languageChanged", handleLangChange);
            };
    }, [slug]);

    if (!project) {
        return (
            <Hero   title={[t("project.notFound.hero.title.line1"), t("project.notFound.hero.title.line2")]} 
                    payoff={t("project.notFound.hero.payoff")}
                    cta={t("project.notFound.hero.cta")}
                    url="portfolio"
            />
        );
    }

    return (
        <>
            <SEOHead pageTitle={project.title} pageDescription={project.title + ' - ' + project.description[currentLang] + ' - D.Fact Project'} />

            <section className="background-dark background-cover hero" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.65)), url(${imagesPath}/preview.jpg)`}}></section>
            
            <section className="grid">
                <div className="col-40 padding right-large xs-none">
                    <h5>{t("project.client")}</h5>
                    <p>{project.client}</p>
                    <br /><br />
                    {project.tags.map((tag, index) => (
                        <span key={index} className="bold padding left-right-small">#{tag}</span>
                    ))}
                </div>

                <div className="col-60 padding left-large margin bottom-large xs-col-100 xs-no-padding">
                    <h4 className="bold">{project.title}</h4>
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: project.description[currentLang] }} />
                </div>
                
                <div className="grid margin top-large">
                    {Array.from({ length: project.images }).map((_, index) => {
                        const imageNumber = String(index + 1).padStart(2, "0");
                        return (
                            <div key={index} className={`margin bottom-large col-50 padding ${index % 2 === 0 ? "right" : "left"}-medium xs-col-100 xs-no-padding`}>
                                <img src={`${imagesPath}${imageNumber}.jpg`} alt={`${project.title} image ${index + 1}`}/>
                            </div>
                        );
                    })}
                </div>

                {nextProject && (
                    <div className="text-align-center col-100">
                        <hr className="margin top-bottom-large" />
                        <Cta text={nextProject.title} url={`portfolio/${nextProject.slug}`} />
                    </div>
                )}
            </section>
        </>
    );
}
