import React from "react";
import "./FeatureHighlight.css";

const FeatureHighlight = ({ icon, title, description }) => {
    return (
        <div className="feature-highlight">
            <div className="feature-icon">{icon}</div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
        </div>
    );
};

export default FeatureHighlight;