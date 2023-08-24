import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        login: {
            currentUser: null,
            isLoading: false,
            error: false
        },
        register: {
            isLoading: false,
            error: false
        },
        logout: {
            isLoading: false,
            error: false
        }
    },
    reducers: {
        loginStart: state => {
            state.login.isLoading = true
        },
        loginSuccess: (state, action) => {
            state.login.isLoading = false
            state.login.currentUser = action.payload
            state.login.error = false
        },
        loginFailed: state => {
            state.login.isLoading = false
            state.login.error = true
        },
        registerStart: state => {
            state.register.isLoading = true
        },
        registerSuccess: state => {
            state.register.isLoading = false
            state.register.error = false
        },
        registerFailed: state => {
            state.register.isLoading = false
            state.register.error = true
        },
        logoutStart: state => {
            state.logout.isLoading = true
        },
        logoutSuccess: state => {
            state.logout.isLoading = false
            state.login.currentUser = null
            state.logout.error = false
        },
        logoutFailed: state => {
            state.logout.isLoading = false
            state.logout.error = true
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed
} = userSlice.actions

export default userSlice.reducer