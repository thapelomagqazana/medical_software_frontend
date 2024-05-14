import React from "react";
import "./Introduction.css";

const Introduction = ({ title, description }) => {
    return (
      <section className="introduction">
        <div className="introduction-content">
          <h2 className="introduction-title">{title}</h2>
          <p className="introduction-description">{description}</p>
        </div>
      </section>
    );
};

export default Introduction;