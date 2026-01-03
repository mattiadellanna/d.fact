import React from "react";

export default function TextWithImages({ text, imagesPath, columns = 1}) {
    const regex = /\b\d{2}\.jpg\b/g;
    const parts = text.split(regex);
    const matches = text.match(regex) || [];

    return (
        <p className={`columns x${columns}`}>
            {parts.map((part, index) => (
                <React.Fragment key={index}>
                    {part}
                    {matches[index] && (
                        <img src={`${imagesPath}${matches[index]}`} alt="" style={{ maxWidth: "100%", display: "block", margin: "2rem 0" }}/>
                    )}
                </React.Fragment>
            ))}
        </p>
  );
}
