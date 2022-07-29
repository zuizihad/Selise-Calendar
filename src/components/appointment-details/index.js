import { useState } from "react";
import Popup from "react-modal";
// import { StoredEvents } from "../../actions/localStorage";
// import { Event } from "../Day/Day";
// import { EventCreator } from "../EventCreator/EventCreator";
// import "../Calendar/Calendar.css";
// import { customStylesCreateEventPopUp } from "../Calendar/customStylesPopUp";


export const AppointmentDetails = ({ appointment, date, setStoredEvents }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div>{appointment.name}</div>
            <Popup
                isOpen={open}
                className="popup"
            // style={customStylesCreateEventPopUp}
            >
                {/* <EventCreator
                    event={event}
                    date={date}
                    setStoredEvents={setStoredEvents}
                    editMode={true}
                    onCancel={() => setOpen(false)}
                /> */}
            </Popup>
        </>
    );
};
