import { useTranslation } from "react-i18next";

export default function GeneratorControls({generatorRef}) {
    const { t } = useTranslation();

    return (
        <div className="margin top-medium grid">
            <div className="col-50 padding small">
                <button className="block small" onClick={() => generatorRef.current.refresh() }>
                    <i className="fa fa-refresh"></i>
                    <span className="bold padding left-small">{t("manifesto.logo.refresh")}</span>
                </button>
            </div>
            <div className="col-50 padding small">
                <button className="block small" onClick={() => generatorRef.current.exportSVG() }>
                    <i className="fa fa-download"></i>
                    <span className="bold padding left-small">{t("manifesto.logo.download")}</span>
                </button>
            </div>
        </div>
    );
}
