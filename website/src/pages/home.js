import { Component } from "react";
import { withTranslation } from "react-i18next";
import config from '../config/config';
import Hero from "../components/hero";
import Cta from "../components/cta";
import ItemPreview from "../components/itemPreview";
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
        const { t } = this.props;
        const services = t("home.services", { returnObjects: true });
        const counter = 4
        const featuredProjects = [...portfolio].sort(() => 0.5 - Math.random()).slice(0, counter);

        return (
            <>
                <Hero   title={[t("home.hero.title.line1"), t("home.hero.title.line2")]} 
                        payoff={t("home.hero.payoff")}
                        cta={t("home.hero.cta")}
                        url="contacts"
                />

                <section className="grid xs-block">
                    <div className="col-40 sticky padding right-large xs-col-100 xs-relative xs-block xs-no-padding">
                        <h4 dangerouslySetInnerHTML={{ __html: t("home.studio.headline") }} />
                        <br/><br/>
                        <p dangerouslySetInnerHTML={{ __html: t("home.studio.subheadline") }} />
                        <br/><br/>
                        <Cta text={t("home.studio.cta")} url="manifesto"></Cta>
                    </div>
                    <hr className="none xs-block margin top-bottom-large"/>
                    <div className="col-60 padding left-large xs-col-100 xs-block xs-no-padding">
                        <div className="grid">
                            {Object.values(services).map((service, index) => (
                                <div className={`margin bottom-large col-50 padding ${index % 2 === 0 ? "right" : "left"}-large xs-col-100 xs-no-padding`} key={index}>
                                    <h4 className="color-dark">
                                        <span className='color-grey bold padding right-small'>{ String(index + 1).padStart(2, "0") }<span className="color-yellow">.</span></span>
                                        <span dangerouslySetInnerHTML={{ __html: service.title }} />
                                    </h4>
                                    <br/>
                                    <p dangerouslySetInnerHTML={{ __html: service.description }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <div className="grid">
                        {
                            featuredProjects.map((project, index) => (
                                <ItemPreview key={index} item={project} index={index} col="50" />
                            )) 
                        }
                    </div>
                    <div className="text-align-center block padding large xs-text-align-left xs-no-padding">
                        <Cta text={t("home.featuredProject.cta")} url="portfolio"></Cta>
                    </div>
                </section>

            </>
        );
    }
}

export default withTranslation()(Home);
