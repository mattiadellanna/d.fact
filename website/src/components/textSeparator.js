import React from "react";

const TextSeparator = ({ separator = "⎮" }) => {
    return (
        <span className='color-grey padding left-right-medium'>{separator}</span>
    );
};

export default TextSeparator;
