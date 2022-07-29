import "./style.css";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AppointmentDetails } from "../appointment-details";

export const Day = ({
    day,
    appointments,
    openModal,
    setStoredEvents,
}) => {
    const dayNumber = String(day.getDate());
    return (
        <>
            <Card>
                <CardContent>
                    <div className="day">
                        <header>
                            <div className="number-of-day">
                                {dayNumber.length === 1 ? `0${dayNumber}` : dayNumber}
                            </div>

                        </header>
                        <div className="events">
                            {appointments?.map((appointment) => (
                                <div key={appointment.name} className={`event blue`}>
                                    <AppointmentDetails
                                        appointment={appointment}
                                        date={day}
                                        setStoredEvents={setStoredEvents}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};
