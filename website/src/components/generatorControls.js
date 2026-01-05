import { useTranslation } from "react-i18next";

export default function GeneratorControls({generatorRef}) {
    const { t } = useTranslation();

    return (
        <div className="margin top-medium grid">
            <div className="col-50 padding small">
                <button className="block small" onClick={() => generatorRef.current.refresh() }>
                    {t("manifesto.logo.refresh")}
                </button>
            </div>
            <div className="col-50 padding small">
                <button className="block small" onClick={() => generatorRef.current.exportSVG() }>
                    {t("manifesto.logo.download")}
                </button>
            </div>
        </div>
    );
}
