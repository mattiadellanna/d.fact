import { Component } from "react";
import i18n from "../i18n";

class LanguageSelector extends Component {
state = {
    currentLang: i18n.language?.split("-")[0] || "en",
};

componentDidMount() {
    this.langListener = (lng) => {
    this.setState({ currentLang: lng.split("-")[0] });
    };
    i18n.on("languageChanged", this.langListener);
}

componentWillUnmount() {
    i18n.off("languageChanged", this.langListener);
}

changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
};

render() {
    const { currentLang } = this.state;
    const languages = ["it", "en"];

    return (
        <>
            {languages.map((lang) => (
                <button key={lang} onClick={() => this.changeLanguage(lang)} className={`pointer uppercase background-transparent color-dark padding left-right-small ${ currentLang === lang ? "color-yellow bold" : null }`}>
                    {lang}
                </button>
            ))}
        </>
    );
}
}

export default LanguageSelector;
