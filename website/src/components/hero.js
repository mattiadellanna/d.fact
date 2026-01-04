import React from "react";
import Cta from "./cta";

export default function Hero({ title, payoff, cta, url}) {
    return (
       
        <section className="large-padding hero background-yellow">
            <h3>
                {title[0]}
                <br />
                {title.length > 1 && (
                    <span className="color-light">{title[1]}</span>
                )}
            </h3>
            <br/>
            <h4 className="extra-light" dangerouslySetInnerHTML={{ __html: payoff }} />
            <br/><br/>
            <Cta text={cta} url={url}></Cta>
        </section>

  );
}