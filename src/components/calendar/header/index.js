import AppBar from '@mui/material/AppBar';
import {
    goMonthBack,
    goMonthForward,
    goYearBack,
    goYearForward
} from "../../../utility/header";


export const CalendarHeader = ({ date, setDate, setDays }) => {
    return (
        <>
            <AppBar position="static">
                <div className="calendar-header">
                    <div
                        className="button-handler"
                        onClick={() => {
                            goYearBack(date, setDate, setDays);
                        }}
                    >
                        {"<<"}
                    </div>
                    <div
                        className="button-handler"
                        onClick={() => {
                            goMonthBack(date, setDate, setDays);
                        }}
                    >
                        {"<"}
                    </div>
                    <div>{date.toISOString().substring(0, 7)}</div>

                    <div
                        className="button-handler"
                        onClick={() => {
                            goMonthForward(date, setDate, setDays);
                        }}
                    >
                        {">"}
                    </div>
                    <div
                        className="button-handler"
                        onClick={() => {
                            goYearForward(date, setDate, setDays);
                        }}
                    >
                        {">>"}
                    </div>
                </div>
            </AppBar>
        </>
    );
};
