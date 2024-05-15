import React, { useState } from "react";
import "./Hero.css"; // Import component=specific styles
import Modal from "../modal/Modal"
import RegisterForm from "../../pages/form/RegisterForm";

const Hero = ({ headline, subheading, ctaText }) => {
    const [isRegisterOpen, setRegisterOpen] = useState(false);

    const openRegister = () => setRegisterOpen(true);
    const closeRegister = () => setRegisterOpen(false);

    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-headline">{headline}</h1>
                <p className="hero-subheading">{subheading}</p>
                <button className="cta-button" onClick={openRegister}>{ctaText}</button>
            </div>
            <Modal isOpen={isRegisterOpen} onClose={closeRegister}>
                <RegisterForm onClose={closeRegister} />
            </Modal>
            
        </section>
    );
};

export default Hero;
