
import { Component } from 'react';
import { withTranslation } from "react-i18next";
import Cta from './cta';

class Engage extends Component {
    
    render() {
        const { t } = this.props;

        return (
            <section className="background-yellow">
                <h3><span dangerouslySetInnerHTML={{ __html: t("engage.title.line1") }} /><br /><span className="color-light" dangerouslySetInnerHTML={{ __html: t("engage.title.line2") }} /></h3>
                <br/><br/>
                <h4 className="extra-light" dangerouslySetInnerHTML={{ __html: t("engage.payoff") }} />
                <br/><br/>
                <Cta text={t("engage.cta")} url="contacts"></Cta>
            </section>
        );
    }
}

export default withTranslation()(Engage);