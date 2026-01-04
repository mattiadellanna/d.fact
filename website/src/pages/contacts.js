import { Component } from "react";
import config from "../config/config";
import ContactForm from "../components/contactForm";
import { withTranslation } from "react-i18next";

class Contacts extends Component {  
    
	componentDidMount() {
        document.title = `${config.name}`;
        window.scrollTo(0, 0); 
    }
    
    render() {
        const { t } = this.props;

        return (
            <>
                <section className="grid large-padding">
                    <div className="col-50 padding right-large">
                        <h3><span dangerouslySetInnerHTML={{ __html: t("contacts.hero.title.line1") }} /><br/><span className="color-grey" dangerouslySetInnerHTML={{ __html: t("contacts.hero.title.line2") }} /></h3>
                        <br/>
                        <h4 className="extra-light" dangerouslySetInnerHTML={{ __html: t("contacts.hero.payoff") }} />
                        <hr className="margin top-bottom-large"/>
                        <div className="grid">
                            <div className="col-50 margin bottom-large">
                                <h6 className="bold uppercase">{t("contacts.email")}</h6>
                                <p>{config.email}</p>
                            </div>
                            <div className="col-50 margin bottom-large">
                                <h6 className="bold uppercase">{t("contacts.phone")}</h6>
                                <p>{config.phone}</p>
                            </div>
                            <div className="col-100 margin bottom-large">
                                <h6 className="bold uppercase">{t("contacts.studio")}</h6>
                                <p>{config.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-10"></div>
                    <div className="col-40 padding right-large">
                        <ContactForm/>
                    </div>
                </section>
            </>

        );
    }
}

export default withTranslation()(Contacts);
