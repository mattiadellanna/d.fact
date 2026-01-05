import { Component, createRef } from 'react';
import { withTranslation } from "react-i18next";
import config from '../config/config';
import Generator from '../components/generator';
import GeneratorControls from '../components/generatorControls';

class Manifesto extends Component {  
    generatorRef = createRef();

	componentDidMount() {
        document.title = `${config.name}`;
    }
    
    render() {
        const { t } = this.props;
        const steps = t("manifesto.steps", { returnObjects: true });

        return (
            <>
                <section className="grid large-padding">
                    <div className="col-100 padding right-large">
                        <h3><span dangerouslySetInnerHTML={{ __html: t("manifesto.hero.title.line1") }} /><br/><span className="color-grey" dangerouslySetInnerHTML={{ __html: t("manifesto.hero.title.line2") }} /></h3>
                        <br/>
                        <h4 className="extra-light" dangerouslySetInnerHTML={{ __html: t("manifesto.hero.payoff") }} />
                    </div>
                </section>
                <section className="grid background-yellow">
                    <div className="col-40 sticky padding right-large xs-block xs-relative xs-col-100 xs-no-padding">
                        <h4 dangerouslySetInnerHTML={{ __html: t("manifesto.title") }} />
                        <br/><br/>
                        <p dangerouslySetInnerHTML={{ __html: t("manifesto.description") }} />
                    </div>
                    <div className="col-60 padding left-large xs-relative xs-col-100 xs-no-padding">
                        <div className="grid">
                            {Object.values(steps).map((step, index) => (
                                <div className={`margin bottom-large col-33 padding right-large xs-col-100 xs-no-padding`} key={index}>
                                    <div className='grid vertical-align-middle'>
                                        <h2 className='color-dark opacity x01 bold xs-col-30'>{ String(index + 1).padStart(2, "0") }</h2>
                                        <h5 className="color-light  xs-col-70">
                                            <span className="bold" dangerouslySetInnerHTML={{ __html: step.title }} />
                                        </h5>
                                    </div>
                                    <br/>
                                    <p dangerouslySetInnerHTML={{ __html: step.description }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="grid">
                    <div className="col-40 sticky padding right-large xs-col-100 xs-no-padding xs-relative xs-block">
                        <div className='grid'>
                            <div className='col-20 xs-none'></div>
                            <div className='col-60 text-align-center xs-col-100'>
                                <Generator id="download" ref={this.generatorRef}/>
                                <hr/>
                                <GeneratorControls generatorRef={this.generatorRef} />
                            </div>
                            <div className='col-20 xs-none'></div>
                        </div> 
                    </div>
                    <div className="col-60 padding left-large xs-col-100 xs-no-padding">
                        <p dangerouslySetInnerHTML={{ __html: t("manifesto.logo.description") }} />
                    </div>
                </section>
            </>
        );
    }
}

export default withTranslation()(Manifesto);