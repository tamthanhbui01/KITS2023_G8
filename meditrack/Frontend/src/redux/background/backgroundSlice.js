import { createSlice } from "@reduxjs/toolkit";

const backgroundSlice = createSlice({
    name: "background",
    initialState: {
        backgrounds: {
            allBackgrounds: null,
            isLoading: false,
            error: false
        },
        singleBackground: {
            background: null,
            isLoading: false,
            error: false
        },
        createOrUpdateBackground: {
            isLoading: false,
            error: false
        }
    },
    reducers: {
        // get all backgrounds
        getBackgroundsStart: state => {
            state.backgrounds.isLoading = true
        },
        getBackgroundsSuccess: (state, action) => {
            state.backgrounds.isLoading = false,
            state.backgrounds.allBackgrounds = action.payload
        },
        getBackgroundsFailed: state => {
            state.backgrounds.isLoading = false,
            state.backgrounds.error = true
        },
        // get single background
        getSingleBackgroundStart: state => {
            state.singleBackground.isLoading = true
        },
        getSingleBackgroundSuccess: (state, action) => {
            state.singleBackground.isLoading = false,
            state.singleBackground.background = action.payload
        },
        getSingleBackgroundFailed: state => {
            state.singleBackground.isLoading = false,
            state.singleBackground.error = true
        },
        //create or update background
        createOrUpdateBackgroundStart: state =>  {
            state.createOrUpdateBackground.isLoading = true
        },
        createOrUpdateBackgroundSuccess: state => {
            state.createOrUpdateBackground.isLoading = false,
            state.createOrUpdateBackground.error = false
        },
        createOrUpdateBackgroundFailed: state => {
            state.createOrUpdateBackground.isLoading = false,
            state.createOrUpdateBackground.error = true
        },
    }
})

export const {
    // get all backgrounds
    getBackgroundsStart,
    getBackgroundsSuccess,
    getBackgroundsFailed,
    // get single background
    getSingleBackgroundStart,
    getSingleBackgroundSuccess,
    getSingleBackgroundFailed,
    //create or update background
    createOrUpdateBackgroundStart,
    createOrUpdateBackgroundSuccess,
    createOrUpdateBackgroundFailed
} = backgroundSlice.actions

export default backgroundSlice.reducer