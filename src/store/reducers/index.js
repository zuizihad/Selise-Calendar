import { combineReducers } from "redux";
import appointmentReducers from "./appointmentReducers";

const rootReducer = combineReducers({
    appointments: appointmentReducers,
});

export default rootReducer;