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

            <Modal isOpen={isAddScheduleOpen} onClose={closeAddSchedule}>
                <ScheduleAppointmentForm onClose={closeAddSchedule} />
            </Modal>
        </div>

        
    );
};

export default QuickActions;
