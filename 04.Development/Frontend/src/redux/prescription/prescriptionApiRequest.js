import axios from "axios";
import { createOrUpdatePrescriptionFailed, createOrUpdatePrescriptionStart, createOrUpdatePrescriptionSuccess, deletePrescriptionFailed, deletePrescriptionStart, deletePrescriptionSuccess, getPrescriptionsFailed, getPrescriptionsStart, getPrescriptionsSuccess, getSinglePrescriptionsFailed, getSinglePrescriptionsStart, getSinglePrescriptionsSuccess } from "./prescriptionSlice";

const BASE_PRESCRIPTION_URL = "http://localhost:8080/api/v1.0/user/prescription/"

export const getAllPrescriptions = async (accessToken, dispatch, upID, pageNo, pageSize) => {
    dispatch(getPrescriptionsStart())
    try {
        const res = await axios.get(BASE_PRESCRIPTION_URL + "get-all/" + upID + "?pageNo=" + pageNo + "&pageSize=" + pageSize, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(getPrescriptionsSuccess(res.data))
    } catch (e) {
        dispatch(getPrescriptionsFailed())
    }
}

export const getSinglePrescription = async (accessToken, dispatch, preID) => {
    dispatch(getSinglePrescriptionsStart())
    try {
        const res = await axios.get(BASE_PRESCRIPTION_URL + "get-single/" + preID, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(getSinglePrescriptionsSuccess(res.data))
    } catch (e) {
        dispatch(getSinglePrescriptionsFailed())
    }
}

export const createPrescription = async (accessToken, dispatch, upID, createPrescriptionRequest) => {
    dispatch(createOrUpdatePrescriptionStart())
    try {
        await axios.post(BASE_PRESCRIPTION_URL + upID, createPrescriptionRequest, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(createOrUpdatePrescriptionSuccess())
    } catch (e) {
        dispatch(createOrUpdatePrescriptionFailed())
    }
}

export const updatePrescription = async (accessToken, dispatch, preID, updatePrescriptionRequest) => {
    dispatch(createOrUpdatePrescriptionStart())
    try {
        await axios.put(BASE_PRESCRIPTION_URL + preID, updatePrescriptionRequest, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(createOrUpdatePrescriptionSuccess())
    } catch (e) {
        dispatch(createOrUpdatePrescriptionFailed())
    }
}

export const deletePrescription = async (accessToken, dispatch, preID) => {
    dispatch(deletePrescriptionStart())
    try {
        await axios.delete(BASE_PRESCRIPTION_URL + preID, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(deletePrescriptionSuccess())
    } catch (e) {
        dispatch(deletePrescriptionFailed())
    }
}