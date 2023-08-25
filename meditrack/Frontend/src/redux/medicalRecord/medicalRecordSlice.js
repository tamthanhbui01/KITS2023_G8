import { createSlice } from "@reduxjs/toolkit";

const medicalRecordSlice = createSlice({
    name: "medicalRecord",
    initialState: {
        medicalRecords: {
            medicalRecords: null,
            isLoading: false,
            error: false
        },
        updateMedicalRecord: {
            isLoading: false,
            error: false
        }
    },
    reducers: {
        //get medical record
        getMedicalRecordStart: state => {
            state.medicalRecords.isLoading = true
        },
        getMedicalRecordSuccess: (state, action) => {
            state.medicalRecords.medicalRecords = action.payload,
            state.medicalRecords.isLoading = false
        },
        getMedicalRecordFailed: state => {
            state.medicalRecords.isLoading = false,
            state.medicalRecords.error = true
        },
        // update medical record
        updateMedicalRecordStart: state =>  {
            state.createOrUpdateAppointment.isLoading = true
        },
        updateMedicalRecordSuccess: state => {
            state.createOrUpdateAppointment.isLoading = false,
            state.createOrUpdateAppointment.error = false
        },
        updateMedicalRecordFailed: state => {
            state.createOrUpdateAppointment.isLoading = false,
            state.createOrUpdateAppointment.error = true
        },
    }
})

export const {
    //get medical record
    getMedicalRecordStart,
    getMedicalRecordSuccess,
    getMedicalRecordFailed,
    // update medical record
    updateMedicalRecordStart,
    updateMedicalRecordSuccess,
    updateMedicalRecordFailed
} = medicalRecordSlice.actions

export default medicalRecordSlice.reducer