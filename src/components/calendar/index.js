import { useState } from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./style.css";
import { Day } from '../day';
import { daysBefore, generateDates } from "../../utility/time";
import { capitalizeFirstLetter } from "../../utility/capitalize";
import { CalendarHeader } from "./header";
import TopAppBar from "../Appbar";
import { useDispatch, useSelector } from "react-redux";

export const Calendar = () => {
    const dispatch = useDispatch();
    const appointments = useSelector(state => state.appointments);
    console.log("Appointments:", appointments);
    const [date, setDate] = useState(new Date());
    const [days, setDays] = useState(generateDates(date));

    return (
        <div>
            <TopAppBar date={date} setDate={setDate} setDays={setDays} />
            {/* <CalendarHeader date={date} setDate={setDate} setDays={setDays} /> */}
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Box sx={{ bgcolor: 'background.paper' }}>
                        <AppBar position="static" style={{ marginBottom: '10px' }}>
                            <div className="dayNamesRow">
                                <div className="dayNames">
                                    {Object.keys(daysBefore).map((day) => (
                                        <div>{capitalizeFirstLetter(day)}</div>
                                    ))}
                                </div>
                            </div>
                        </AppBar>
                        <div className="calendar">
                            <div className="parent">
                                {days.map((day) => (
                                    <Day
                                        key={day.toISOString()}
                                        day={day}
                                        appointments={appointments.appointments}
                                    />
                                ))}
                            </div>
                        </div>
                    </Box>
                </CardContent>
            </Card>

        </div>
    );
};
