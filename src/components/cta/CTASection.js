import React, { useState } from 'react';
import './CTASection.css';
import Modal from "../modal/Modal"
import RegisterForm from "../../pages/form/RegisterForm";

const CTASection = () => {
    const [isRegisterOpen, setRegisterOpen] = useState(false);

    const openRegister = () => setRegisterOpen(true);
    const closeRegister = () => setRegisterOpen(false);
    return (
        <section className="cta-section">
            <div className="cta-container">
                <h2 className="cta-heading">Ready to Schedule Your Appointments?</h2>
                <p className="cta-subheading">Get started today and experience hassle-free appointment booking.</p>
                <button className="cta-button" onClick={openRegister}>Schedule Now</button>    
            </div>
            <Modal isOpen={isRegisterOpen} onClose={closeRegister}>
                <RegisterForm onClose={closeRegister} />
            </Modal>
        </section>
    );
};

export default CTASection;
