import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
    name: "userProfile",
    initialState: {
        userProfiles: {
            userProfiles: null,
            isLoading: false,
            error: false
        },
        singleUserProfile: {
            userProfile: null,
            isLoading: false,
            error: false
        },
        createOrUpdateUserProfile: {
            isLoading: false,
            error: false
        },
        deleteUserProfile: {
            isLoading: false,
            error: false
        }
    },
    reducers: {
        // get all user profiles
        getUserProfilesStart: state => {
            state.userProfiles.isLoading = true
        },
        getUserProfilesSuccess: (state, action) => {
            state.userProfiles.isLoading = false,
            state.userProfiles.userProfiles = action.payload
        },
        getUserProfilesFailed: state => {
            state.userProfiles.isLoading = false,
            state.userProfiles.error = true
        },
        // get single user profiles
        getSingleUserProfileStart: state => {
            state.singleUserProfile.isLoading = true
        },
        getSingleUserProfileSuccess: (state, action) => {
            state.singleUserProfile.isLoading = false,
            state.singleUserProfile.userProfile = action.payload
        },
        getSingleUserProfileFailed: state => {
            state.singleUserProfile.isLoading = false,
            state.singleUserProfile.error = true
        },
        //create or update user profile
        createOrUpdateUserProfileStart: state =>  {
            state.createOrUpdateUserProfile.isLoading = true
        },
        createOrUpdateUserProfileSuccess: state => {
            state.createOrUpdateUserProfile.isLoading = false,
            state.createOrUpdateUserProfile.error = false
        },
        createOrUpdateUserProfileFailed: state => {
            state.createOrUpdateUserProfile.isLoading = false,
            state.createOrUpdateUserProfile.error = true
        },
        //delete user profile
        deleteUserProfileStart: state =>  {
            state.deleteUserProfile.isLoading = true
        },
        deleteUserProfileSuccess: state => {
            state.deleteUserProfile.isLoading = false,
            state.deleteUserProfile.error = false
        },
        deleteUserProfileFailed: state => {
            state.deleteUserProfile.isLoading = false,
            state.deleteUserProfile.error = true
        },
    }
})

export const {
    // get all user profiles
    getUserProfilesStart,
    getUserProfilesSuccess,
    getUserProfilesFailed,
    // get single user profiles
    getSingleUserProfileStart,
    getSingleUserProfileSuccess,
    getSingleUserProfileFailed,
    //create or update user profile
    createOrUpdateUserProfileStart,
    createOrUpdateUserProfileSuccess,
    createOrUpdateUserProfileFailed,
    //delete user profile
    deleteUserProfileStart,
    deleteUserProfileSuccess,
    deleteUserProfileFailed
} = userProfileSlice.actions

export default userProfileSlice.reducer