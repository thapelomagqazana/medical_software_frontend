import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faHistory, faCog } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './QuickActions.css';

const QuickActions = () => {
    return (
        <div className="quick-actions-container">
            <button className="action-button schedule-button">
                <FontAwesomeIcon icon={faCalendarPlus} />
                Schedule Appointment
            </button>
            <button className="action-button view-button">
                <FontAwesomeIcon icon={faHistory} />
                View Past Appointments
            </button>
            <button className="action-button settings-button">
                <FontAwesomeIcon icon={faCog} />
                Account Settings
            </button>
        </div>
    );
};

export default QuickActions;
