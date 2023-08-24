import axios from "axios";
import { createOrUpdateBackgroundFailed, createOrUpdateBackgroundStart, createOrUpdateBackgroundSuccess, getBackgroundsFailed, getBackgroundsStart, getBackgroundsSuccess, getSingleBackgroundFailed, getSingleBackgroundStart, getSingleBackgroundSuccess } from "./backgroundSlice";

const BASE_BACKGROUND_URL = "http://localhost:8080/api/v1.0/user/background/"

export const getAllBackgrounds = async (accessToken, dispatch, medID, pageNo, pageSize) => {
    dispatch(getBackgroundsStart())
    try {
        const res = await axios.get(BASE_BACKGROUND_URL + medID + "?pageNo=" + pageNo + "&pageSize=" + pageSize, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(getBackgroundsSuccess(res.data))
    } catch (e) {
        dispatch(getBackgroundsFailed())
    }
} 

export const getSingleBackground = async (accessToken, dispatch, medID, bgDate) => {
    dispatch(getSingleBackgroundStart())
    try {
        const res = await axios.get(BASE_BACKGROUND_URL + medID + "/" + bgDate, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(getSingleBackgroundSuccess(res.data))
    } catch (e) {
        dispatch(getSingleBackgroundFailed())
    }
}

export const createBackground = async (accessToken, dispatch, medID, backgroundRequest) => {
    dispatch(createOrUpdateBackgroundStart())
    try {
        await axios.post(BASE_BACKGROUND_URL + medID, backgroundRequest, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(createOrUpdateBackgroundSuccess())
    } catch (e) {
        dispatch(createOrUpdateBackgroundFailed())
    }
}   

export const updateBackground = async (accessToken, dispatch, medID, backgroundRequest) => {
    dispatch(createOrUpdateBackgroundStart())
    try {
        await axios.put(BASE_BACKGROUND_URL + medID, backgroundRequest, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(createOrUpdateBackgroundSuccess())
    } catch (e) {
        dispatch(createOrUpdateBackgroundFailed())
    }
}