import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        users: {
            allUsers: null,
            isLoading: false,
            error: false
        },
        singleUser: {
            user: null,
            isLoading: false,
            error: false
        },
        changePassword: {
            isLoading: false,
            error: false
        },
        activateAccount: {
            isLoading: false,
            error: false
        }
    },
    reducers: {
        //find users by
        getAllUsersStart: state => {
            state.users.isLoading = true
        },
        getAllUsersSuccess: (state, action) => {
            state.users.allUsers = action.payload,
            state.users.isLoading = false
        },
        getAllUsersFailed: state => {
            state.users.isLoading = false,
            state.users.error = true
        },
        // get single user
        getSingleUserStart: state => {
            state.singleUser.isLoading = true
        },
        getSingleUserSuccess: (state, action) => {
            state.singleUser.user = action.payload,
            state.singleUser.isLoading = false
        },
        getSingleUserFailed: state => {
            state.singleUser.isLoading = false,
            state.singleUser.error = true
        },
        //change password
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
        // activate account
        activateAccountStart: state => {
            state.changePassword.isLoading = true
        },
        activateAccountSuccess: state => {
            state.changePassword.isLoading = false
        },
        activateAccountFailed: state => {
            state.changePassword.isLoading = false,
            state.changePassword.error = true
        },
    }
})

export const {
    // find users by
    getAllUsersStart,
    getAllUsersSuccess,
    getAllUsersFailed,
    //get single user
    getSingleUserStart,
    getSingleUserSuccess,
    getSingleUserFailed,
    // change password
    changePasswordStart,
    changePasswordSuccess,
    changePasswordFailed,
    //activate account
    activateAccountStart,
    activateAccountSuccess,
    activateAccountFailed
} = adminSlice.actions

export default adminSlice.reducer