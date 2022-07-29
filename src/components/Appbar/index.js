import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './style.css';
import { goMonthBack, goMonthForward, goYearBack, goYearForward } from '../../utility/header';
import DataModal from '../modal';

export default function TopAppBar({ date, setDate, setDays }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            SELIES CALENDAR
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <div className="calendar-header">
                                <div
                                    className="button-handler"
                                    onClick={() => {
                                        goYearBack(date, setDate, setDays);
                                    }}
                                >
                                    <Button variant="contained" endIcon={<SkipPreviousIcon />}>
                                    </Button>
                                </div>
                                <div
                                    className="button-handler"
                                    onClick={() => {
                                        goMonthBack(date, setDate, setDays);
                                    }}
                                >
                                    <Button variant="contained" endIcon={<ArrowLeftIcon />}>
                                    </Button>
                                </div>
                                <div>{date.toISOString().substring(0, 7)}</div>
                                <div
                                    className="button-handler"
                                    onClick={() => {
                                        goMonthForward(date, setDate, setDays);
                                    }}
                                >
                                    <Button variant="contained" endIcon={<ArrowRightIcon />}>
                                    </Button>
                                </div>
                                <div
                                    className="button-handler"
                                    onClick={() => {
                                        goYearForward(date, setDate, setDays);
                                    }}
                                >
                                    <Button variant="contained" endIcon={<SkipNextIcon />}>
                                    </Button>
                                </div>
                            </div>
                        </Typography>
                        <Button color="inherit" onClick={handleOpen}>MAKE APPOINTMENT</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <DataModal open={open} handleClose={handleClose} />
        </>
    );
}
