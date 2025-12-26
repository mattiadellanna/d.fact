import React from "react";
import Generator from "./generator";

const SectionTitle = ({ text }) => {
    return (
        <div className="section-title">
            <h5 className="uppercase">
                <Generator size={30}></Generator>
                <span className="padding left-right-small extra-light">{ text }</span>
            </h5>
        </div>
    );
};

export default SectionTitle;