import { Component } from 'react';
import { withTranslation } from "react-i18next";
import ItemPreview from '../components/itemPreview';
import config from '../config/config';
import portfolio from '../data/portfolio.json';
import Hero from '../components/hero';
import SEOHead from '../components/seoHead';

class Portfolio extends Component {  
    
	componentDidMount() {
        document.title = `${config.name}`;
    }
    
    render() {
        const { t } = this.props;

        return (
            <>
                <SEOHead pageTitle={t("nav.portfolio")} />

                <Hero   title={[t("portfolio.hero.title.line1"), t("portfolio.hero.title.line2")]} 
                        payoff={t("portfolio.hero.payoff")}
                        cta={t("home.hero.cta")}
                        url="contacts"
                />
                
                <section className="grid">
                    {portfolio.map((project, index) => (
                        <ItemPreview key={index} item={project} index={index} />
                    ))}
                </section>

            </>
        );
    }
}

export default withTranslation()(Portfolio);
