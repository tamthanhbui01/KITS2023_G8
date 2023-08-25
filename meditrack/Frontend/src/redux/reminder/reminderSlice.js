import { createSlice } from "@reduxjs/toolkit";

const reminderSlice = createSlice({
    name: "reminder",
    initialState: {
        reminders: {
            reminders: null,
            isLoading: false,
            error: false
        },
        singleReminder: {
            reminder: null,
            isLoading: false,
            error: false
        },
        createOrUpdateReminder: {
            isLoading: false,
            error: false
        },
        deleteReminder: {
            isLoading: false,
            error: false
        }
    },
    reducers: {
        // get all reminders
        getRemindersStart: state => {
            state.reminders.isLoading = true
        },
        getRemindersSuccess: (state, action) => {
            state.reminders.isLoading = false,
            state.reminders.reminders = action.payload
        },
        getRemindersFailed: state => {
            state.reminders.isLoading = false,
            state.reminders.error = true
        },
        // get single reminder
        getSingleReminderStart: state => {
            state.singleReminder.isLoading = true
        },
        getSingleReminderSuccess: (state, action) => {
            state.singleReminder.isLoading = false,
            state.singleReminder.reminder = action.payload
        },
        getSingleReminderFailed: state => {
            state.singleReminder.isLoading = false,
            state.singleReminder.error = true
        },
        //create or update reminder
        createOrUpdateReminderStart: state =>  {
            state.createOrUpdateReminder.isLoading = true
        },
        createOrUpdateReminderSuccess: state => {
            state.createOrUpdateReminder.isLoading = false,
            state.createOrUpdateReminder.error = false
        },
        createOrUpdateReminderFailed: state => {
            state.createOrUpdateReminder.isLoading = false,
            state.createOrUpdateReminder.error = true
        },
        //delete reminder
        deleteReminderStart: state =>  {
            state.deleteReminder.isLoading = true
        },
        deleteReminderSuccess: state => {
            state.deleteReminder.isLoading = false,
            state.deleteReminder.error = false
        },
        deleteReminderFailed: state => {
            state.deleteReminder.isLoading = false,
            state.deleteReminder.error = true
        },
    }
})

export const {
    // get all reminders
    getRemindersStart,
    getRemindersSuccess,
    getRemindersFailed,
    // get single reminder
    getSingleReminderStart,
    getSingleReminderSuccess,
    getSingleReminderFailed,
    //create or update reminder
    createOrUpdateReminderStart,
    createOrUpdateReminderSuccess,
    createOrUpdateReminderFailed,
    //delete reminder
    deleteReminderStart,
    deleteReminderSuccess,
    deleteReminderFailed
} = reminderSlice.actions

export default reminderSlice.reducer