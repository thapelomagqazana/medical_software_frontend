import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faHistory, faCog } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import Modal from '../modal/Modal';
import ScheduleAppointmentForm from '../../pages/form/ScheduleAppointmentForm';
import './QuickActions.css';

const QuickActions = () => {
    const [isAddScheduleOpen, setAddScheduleOpen] = useState(false);

    const openAddSchedule = () => setAddScheduleOpen(true);
    const closeAddSchedule = () => setAddScheduleOpen(false);

    return (
        <div className="quick-actions-container">
            <button className="action-button schedule-button" onClick={openAddSchedule}>
                <span className="button-icon">
                    <FontAwesomeIcon icon={faCalendarPlus} />
                </span>
                <span className="button-text">Schedule Appointment</span>
            </button>
            <button className="action-button view-button">
                <span className="button-icon">
                    <FontAwesomeIcon icon={faHistory} />
                </span>
                <span className="button-text">View Past Appointments</span>
            </button>
            <button className="action-button settings-button">
                <span className="button-icon">
                    <FontAwesomeIcon icon={faCog} />
                </span>
                <span className="button-text">Account Settings</span>
            </button>

            <Modal isOpen={isAddScheduleOpen} onClose={closeAddSchedule}>
                <ScheduleAppointmentForm onClose={closeAddSchedule} />
            </Modal>
        </div>

        
    );
};

export default QuickActions;
