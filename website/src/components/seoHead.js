import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import config from '../config/config';

const SEOHead = ({pageTitle = null, pageDescription = null}) => {
    const { t } = useTranslation();

    useEffect(() => {
        const url = config.url;
        const ogImage = `${config.url}/og-image.jpg`;
        const keywords = t("keywords");

        // Title
        const title = pageTitle ? `${config.name} ・ ${pageTitle}` : config.name;
        document.title = title;
        
        // Description
        const description = pageDescription ? pageDescription : t("home.studio.subheadline").replace(/<[^>]*>/g, "");
        const metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        metaDescription.content = description;
        document.head.appendChild(metaDescription);

        // Meta keywords
        const metaKeywords = document.createElement("meta");
        metaKeywords.name = "keywords";
        metaKeywords.content = keywords;
        document.head.appendChild(metaKeywords);

        // Open Graph
        const ogTitle = document.createElement("meta");
        ogTitle.setAttribute("property", "og:title");
        ogTitle.content = title;
        document.head.appendChild(ogTitle);

        const ogDescription = document.createElement("meta");
        ogDescription.setAttribute("property", "og:description");
        ogDescription.content = description;
        document.head.appendChild(ogDescription);

        const ogType = document.createElement("meta");
        ogType.setAttribute("property", "og:type");
        ogType.content = "website";
        document.head.appendChild(ogType);

        const ogUrl = document.createElement("meta");
        ogUrl.setAttribute("property", "og:url");
        ogUrl.content = url;
        document.head.appendChild(ogUrl);

        const ogImg = document.createElement("meta");
        ogImg.setAttribute("property", "og:image");
        ogImg.content = ogImage;
        document.head.appendChild(ogImg);

        return () => {
            document.head.removeChild(metaDescription);
            document.head.removeChild(metaKeywords);
            document.head.removeChild(ogTitle);
            document.head.removeChild(ogDescription);
            document.head.removeChild(ogType);
            document.head.removeChild(ogUrl);
            document.head.removeChild(ogImg);
        };
    }, [pageTitle, pageDescription]);

    return null;
};

export default SEOHead;
