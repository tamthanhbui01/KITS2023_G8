import axios from "axios";
import { createOrUpdateAppointmentFailed, createOrUpdateAppointmentStart, createOrUpdateAppointmentSuccess, getAppointmentsFailed, getAppointmentsStart, getAppointmentsSuccess, getSingleAppointmentFailed, getSingleAppointmentStart, getSingleAppointmentSuccess } from "./appointmentSlice";

const BASE_APPOINTMENT_URL = "http://localhost:8080/api/v1.0/user/appointment";

export const getAllAppointment = async (accessToken, dispatch, upID, pageNo, pageSize, appointmentStatus) => {
    dispatch(getAppointmentsStart())
    try{
        const res = await axios.get(BASE_APPOINTMENT_URL
        + "/get-all/" + upID + "?pageNo=" + pageNo + "&pageSize=" + pageSize
        + "&appointmentStatus=" + appointmentStatus,{
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(getAppointmentsSuccess(res.data))
    } catch (e) {
        dispatch(getAppointmentsFailed())
    }
}

export const getSingleAppointment = async (accessToken, dispatch, userID, appointmentID) => {
    dispatch(getSingleAppointmentStart())
    try{
        const res = await axios.get(BASE_APPOINTMENT_URL + "/" + userID + "/get-single/" + appointmentID, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(getSingleAppointmentSuccess(res.data))
    } catch (e){
        dispatch(getSingleAppointmentFailed())
    }
}

export const createAppointment = async (accessToken, dispatch, userID, appointment) => {
    dispatch(createOrUpdateAppointmentStart())
    try {
        await axios.post(BASE_APPOINTMENT_URL + "/" + userID + "/create-appointment", appointment, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(createOrUpdateAppointmentSuccess())
    } catch (e) {
        dispatch(createOrUpdateAppointmentFailed())
    }
}

export const updateAppointment = async (accessToken, dispatch, userID, appointmentID, appointment) =>{
    dispatch(createOrUpdateAppointmentStart())
    try{
        await axios.put(BASE_APPOINTMENT_URL + "/" + userID + "/update-appointment/" + appointmentID, appointment, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(createOrUpdateAppointmentSuccess())
    } catch (e) {
        dispatch(createOrUpdateAppointmentFailed())
    }
}

// Cancel and Postpone

