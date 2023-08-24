import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from './appointments/appointmentSlice'
import userReducer from './users/userSlice'
import adminReducer from './admin/adminSlice'
import userProfileReducer from './userProfile/userProfileSlice'
import medicalRecordReducer from './medicalRecord/medicalRecordSlice'
import backgroundReducer from './background/backgroundSlice'
import prescriptionReducer from './prescription/prescriptionSlice'
import reminderReducer from './reminder/reminderSlice'
export default configureStore({
    reducer:{
        user: userReducer,
        admin: adminReducer,
        userProfile: userProfileReducer,
        appointment: appointmentReducer,
        medicalRecord: medicalRecordReducer,
        background: backgroundReducer,
        prescription: prescriptionReducer,
        reminder: reminderReducer
    }
})