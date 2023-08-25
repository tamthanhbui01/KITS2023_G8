import { createSlice } from "@reduxjs/toolkit";

const prescriptionSlice = createSlice({
    name: "prescription",
    initialState: {
        prescriptions: {
            prescriptions: null,
            isLoading: false,
            error: false
        },
        singlePrescription: {
            prescription: null,
            isLoading: false,
            error: false
        },
        createOrUpdatePrescription: {
            isLoading: false,
            error: false
        },
        deletePrescription: {
            isLoading: false,
            error: false
        }
    },
    reducers: {
        // get all prescriptions
        getPrescriptionsStart: state => {
            state.prescriptions.isLoading = true
        },
        getPrescriptionsSuccess: (state, action) => {
            state.prescriptions.isLoading = false,
            state.prescriptions.prescriptions = action.payload
        },
        getPrescriptionsFailed: state => {
            state.prescriptions.isLoading = false,
            state.prescriptions.error = true
        },
        // get single prescriptions
        getSinglePrescriptionsStart: state => {
            state.singlePrescription.isLoading = true
        },
        getSinglePrescriptionsSuccess: (state, action) => {
            state.singlePrescription.isLoading = false,
            state.singlePrescription.prescription = action.payload
        },
        getSinglePrescriptionsFailed: state => {
            state.singlePrescription.isLoading = false,
            state.singlePrescription.error = true
        },
        //create or update prescription
        createOrUpdatePrescriptionStart: state =>  {
            state.createOrUpdatePrescription.isLoading = true
        },
        createOrUpdatePrescriptionSuccess: state => {
            state.createOrUpdatePrescription.isLoading = false,
            state.createOrUpdatePrescription.error = false
        },
        createOrUpdatePrescriptionFailed: state => {
            state.createOrUpdatePrescription.isLoading = false,
            state.createOrUpdatePrescription.error = true
        },
        //delete prescription
        deletePrescriptionStart: state =>  {
            state.deletePrescription.isLoading = true
        },
        deletePrescriptionSuccess: state => {
            state.deletePrescription.isLoading = false,
            state.deletePrescription.error = false
        },
        deletePrescriptionFailed: state => {
            state.deletePrescription.isLoading = false,
            state.deletePrescription.error = true
        },
        
    }
})

export const {
    // get all prescriptions
    getPrescriptionsStart,
    getPrescriptionsSuccess,
    getPrescriptionsFailed,
    // get single prescriptions
    getSinglePrescriptionsStart,
    getSinglePrescriptionsSuccess,
    getSinglePrescriptionsFailed,
    //create or update prescription
    createOrUpdatePrescriptionStart,
    createOrUpdatePrescriptionSuccess,
    createOrUpdatePrescriptionFailed,
    //delete prescription
    deletePrescriptionStart,
    deletePrescriptionSuccess,
    deletePrescriptionFailed
} = prescriptionSlice.actions

export default prescriptionSlice.reducer