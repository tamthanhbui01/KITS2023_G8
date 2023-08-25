import { createSlice } from "@reduxjs/toolkit";

const accountManagementSlice = createSlice({
    name: "accountManagement",
    initialState: {
        changePassword: {
            isLoading: false,
            error: false
        },
        updateEmail: {
            isLoading: false,
            error: false
        },
        deleteAccount: {
            isLoading: false,
            error: false
        },
    },
    reducers: {
        // change password
        changePasswordStart: state => {
            state.changePassword.isLoading = true
        },
        changePasswordSuccess: state => {
            state.changePassword.isLoading = false
        },
        changePasswordFailed: state => {
            state.changePassword.isLoading = false,
            state.changePassword.error = true
        },
        //update email
        updateEmailStart: state => {
            state.changePassword.isLoading = true
        },
        updateEmailSuccess: state => {
            state.changePassword.isLoading = false
        },
        updateEmailFailed: state => {
            state.changePassword.isLoading = false,
            state.changePassword.error = true
        },
        //delete account
        deleteAccountStart: state => {
            state.changePassword.isLoading = true
        },
        deleteAccountSuccess: state => {
            state.changePassword.isLoading = false
        },
        deleteAccountFailed: state => {
            state.changePassword.isLoading = false,
            state.changePassword.error = true
        },
    }
})

export const {
    // change password
    changePasswordStart,
    changePasswordSuccess,
    changePasswordFailed,
    //update email
    updateEmailStart,
    updateEmailSuccess,
    updateEmailFailed,
    //delete account
    deleteAccountStart,
    deleteAccountSuccess,
    deleteAccountFailed
} = accountManagementSlice.actions

export default accountManagementSlice.reducer