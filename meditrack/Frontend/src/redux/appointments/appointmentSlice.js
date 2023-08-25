import { createSlice } from "@reduxjs/toolkit";

const appointmentSlice = createSlice({
    name: "appointment",
    initialState: {
        appointments: {
            allAppointments: null,
            isLoading: false,
            error: false
        },
        singleAppointment: {
            singleAppointment: null,
            isLoading: false,
            error: false
        },
        createOrUpdateAppointment: {
            isLoading: false,
            error: false
        }
    },
    reducers: {
        // get all appointments
        getAppointmentsStart: state => {
            state.appointments.isLoading = true
        },
        getAppointmentsSuccess: (state, action) => {
            state.appointments.isLoading = false,
            state.appointments.allAppointments = action.payload
        },
        getAppointmentsFailed: state => {
            state.appointments.isLoading = false,
            state.appointments.error = true
        },
        //get single appointment
        getSingleAppointmentStart: state => {
            state.singleAppointment.isLoading = true
        },
        getSingleAppointmentSuccess: (state, action) => {
            state.singleAppointment.isLoading = false,
            state.singleAppointment.singleAppointment = action.payload
        },
        getSingleAppointmentFailed: state => {
            state.singleAppointment.isLoading = false,
            state.singleAppointment.error = true
        },
        //create or update appointment
        createOrUpdateAppointmentStart: state =>  {
            state.createOrUpdateAppointment.isLoading = true
        },
        createOrUpdateAppointmentSuccess: state => {
            state.createOrUpdateAppointment.isLoading = false,
            state.createOrUpdateAppointment.error = false
        },
        createOrUpdateAppointmentFailed: state => {
            state.createOrUpdateAppointment.isLoading = false,
            state.createOrUpdateAppointment.error = true
        },
        //
        //Cancel and Postpone
    }
})

export const {
    //get all appointments
    getAppointmentsStart,
    getAppointmentsSuccess,
    getAppointmentsFailed,
    //get single appointment
    getSingleAppointmentStart,
    getSingleAppointmentSuccess,
    getSingleAppointmentFailed,
    // create or update appointment
    createOrUpdateAppointmentStart,
    createOrUpdateAppointmentSuccess,
    createOrUpdateAppointmentFailed
} = appointmentSlice.actions

export default appointmentSlice.reducer