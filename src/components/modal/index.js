import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { makeAppt } from '../../store/actions';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function DataModal({ open, handleClose }) {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        dispatch(makeAppt(data))
        handleClose();
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Container component="main" maxWidth="xs">
                        <div >
                            <Typography component="h1" variant="h5" style={{ textAlign: "center", marginBottom: "10px" }}>
                                Make Appointment
                            </Typography>
                            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="name"
                                            label="name"
                                            type="text"
                                            id="name"
                                            autoComplete="name"
                                            {...register("name", { required: true })}
                                        />
                                        {errors.name && <span>This field is required</span>}
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="gender"
                                                {...register("gender", { required: true })}
                                            >
                                                <MenuItem value={`male`}>Male</MenuItem>
                                                <MenuItem value={`female`}>Female</MenuItem>
                                                <MenuItem value={`others`}>Others</MenuItem>
                                            </Select>
                                        </FormControl>
                                        {errors.gender && <span>This field is required</span>}
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="age"
                                            label="age"
                                            name="age"
                                            autoComplete="age"
                                            {...register("age", { required: true })}
                                        />
                                        {errors.age && <span>This field is required</span>}
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="date"
                                            label="date"
                                            type="date"
                                            id="date"
                                            autoComplete="date"
                                            {...register("date", { required: true })}
                                        />
                                        {errors.date && <span>This field is required</span>}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="time"
                                            label="time"
                                            type="time"
                                            id="time"
                                            autoComplete="time"
                                            {...register("time", { required: true })}
                                        />
                                        {errors.time && <span>This field is required</span>}
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    style={{ marginTop: "10px" }}
                                >
                                    submit
                                </Button>
                            </form>
                        </div>
                    </Container>
                </Box>
            </Modal>
        </div>
    );
}
