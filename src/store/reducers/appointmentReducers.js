import { apptConstants } from '../constants';

const initialState = {
    appointments: [],
}

const appointmentReducers = (state = initialState, action) => {
    console.log(action, state);
    switch (action.type) {
        case apptConstants.VIEW_APPOINTMENT: {
            return {
                appointments: action.payload,
            }
        }
        case apptConstants.MAKE_APPOINTMENT: {
            return {
                appointments: [...state.appointments, action.payload],
            }
        }
        case apptConstants.REMOVE_APPOINTMENT: {
            return {
                appointments: state.appointments.filter(appt => appt.id !== action.payload),
            }
        }
        case apptConstants.UPDATE_APPOINTMENT: {
            return {
                appointments: state.appointments.map(appt => appt.id === action.payload.id ? action.payload : appt),
            }
        }
        default:
            return state;
    }
}

export default appointmentReducers;