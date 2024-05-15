import React from "react";
import "./Hero.css"; // Import component=specific styles

const Hero = ({ headline, subheading, ctaText }) => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-headline">{headline}</h1>
                <p className="hero-subheading">{subheading}</p>
                <button className="cta-button">{ctaText}</button>
            </div>
        </section>
    );
};

export default Hero;
