import axios from "axios";
import { createOrUpdateReminderFailed, createOrUpdateReminderStart, createOrUpdateReminderSuccess, deleteReminderFailed, deleteReminderStart, deleteReminderSuccess, getRemindersFailed, getRemindersStart, getRemindersSuccess, getSingleReminderFailed, getSingleReminderStart, getSingleReminderSuccess } from "./reminderSlice";

const BASE_REMINDER_URL = "http://localhost:8080/api/v1.0/user/reminder/"

export const getAllReminders = async (accessToken, dispatch, upID, pageNo, pageSize, reminderEnum) => {
    dispatch(getRemindersStart())
    try {
        const res = await axios.get(BASE_REMINDER_URL + "get-all/" + upID + "?pageNo=" + pageNo 
                            + "&pageSize=" + pageSize + "&reminderEnum=" + reminderEnum, {
                                headers: {
                                    "Authorization": `Bearer ${accessToken}`
                                }
                            })
        dispatch(getRemindersSuccess(res.data))
    } catch (e) {
        dispatch(getRemindersFailed())
    }
}

export const getSingleReminder = async (accessToken, dispatch, remID) => {
    dispatch(getSingleReminderStart())
    try {
        const res = await axios.get(BASE_REMINDER_URL + "get-single/" + remID, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(getSingleReminderSuccess(res.data))
    } catch (e) {
        dispatch(getSingleReminderFailed())
    }
}

export const createReminder = async (accessToken, dispatch, upID, appID, preID, reminderEnum, reminderRequest) => {
    dispatch(createOrUpdateReminderStart())
    try {
        await axios.post(BASE_REMINDER_URL + upID + "?appID=" + appID + "&preID=" + preID + "&reminderEnum=" + reminderEnum, reminderRequest, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(createOrUpdateReminderSuccess())
    } catch (e) {
        dispatch(createOrUpdateReminderFailed())
    }
}

export const updateReminder = async (accessToken, dispatch, remID, reminderRequest) => {
    dispatch(createOrUpdateReminderStart())
    try {
        await axios.put(BASE_REMINDER_URL + remID, reminderRequest, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(createOrUpdateReminderSuccess())
    } catch (e) {
        dispatch(createOrUpdateReminderFailed())
    }
}

export const deleteReminder = async (accessToken, dispatch, remID) => {
    dispatch(deleteReminderStart())
    try {
        await axios.delete(BASE_REMINDER_URL + remID, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(deleteReminderSuccess())
    } catch (e) {
        dispatch(deleteReminderFailed())
    }
}