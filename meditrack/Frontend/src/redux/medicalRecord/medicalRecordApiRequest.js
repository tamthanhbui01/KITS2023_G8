import axios from "axios";
import { getMedicalRecordFailed, getMedicalRecordStart, getMedicalRecordSuccess, updateMedicalRecordFailed, updateMedicalRecordStart, updateMedicalRecordSuccess } from "./medicalRecordSlice";

const BASE_MEDICAL_RECORD_URL = "http://localhost:8080/api/v1.0/user/medical-record/"

export const getMedicalRecord = async (accessToken, dispatch, upID) => {
    dispatch(getMedicalRecordStart())
    try {
        const res = await axios.get(BASE_MEDICAL_RECORD_URL + upID, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(getMedicalRecordSuccess(res.data))
    } catch (error) {
        dispatch(getMedicalRecordFailed())
    }
}

export const updateMedicalRecord = async (accessToken, dispatch, upID, updateMedicalRequest) => {
    dispatch(updateMedicalRecordStart())
    try {
        await axios.put(BASE_MEDICAL_RECORD_URL + upID, updateMedicalRequest, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(updateMedicalRecordSuccess())
    } catch (e) {
        dispatch(updateMedicalRecordFailed())
    }
}