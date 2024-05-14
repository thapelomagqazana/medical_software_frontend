import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEnvelope, faClipboard } from '@fortawesome/free-solid-svg-icons';
import FeatureHighlight from "../FeatureHighlight";
import "./FeatureHighlights.css";

const FeatureHighlights = () => {
    return (
        <section className="feature-highlights">
            <div className="feature-highlights-container">
                <FeatureHighlight 
                    icon={<FontAwesomeIcon icon={faCalendarAlt} />}
                    title="Easy Appointment Booking"
                    description="Effortlessly schedule appointments with healthcare providers of your choice."
                />
                <FeatureHighlight 
                    icon={<FontAwesomeIcon icon={faEnvelope} />}
                    title="Secure Messaging"
                    description="Communicate securely with healthcare providers for effective collaboration and support."
                />
                <FeatureHighlight
                    icon={<FontAwesomeIcon icon={faClipboard} />}
                    title="Comprehensive Appointment Management"
                    description="Manage your appointments and medical visits easily."
                />
            </div>
        </section>
    );
};

export default FeatureHighlights;