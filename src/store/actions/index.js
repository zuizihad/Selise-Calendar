import { apptConstants } from '../constants';

export const getAllAppt = () => {
    return {
        type: apptConstants.VIEW_APPOINTMENT
    }
}

export const makeAppt = (form) => {
    return {
        type: apptConstants.MAKE_APPOINTMENT,
        payload: form
    }
}

export const removeAppt = (form) => {
    return {
        type: apptConstants.REMOVE_APPOINTMENT,
        payload: form
    }
}

export const updateAppt = (form) => {
    return {
        type: apptConstants.UPDATE_APPOINTMENT,
        payload: form
    }
}