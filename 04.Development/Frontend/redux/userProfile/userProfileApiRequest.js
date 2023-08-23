import axios from "axios";
import { createOrUpdateUserProfileFailed, createOrUpdateUserProfileStart, createOrUpdateUserProfileSuccess, deleteUserProfileFailed, deleteUserProfileStart, deleteUserProfileSuccess, getSingleUserProfileFailed, getSingleUserProfileStart, getSingleUserProfileSuccess, getUserProfilesFailed, getUserProfilesStart, getUserProfilesSuccess } from "./userProfileSlice";

const BASE_USER_PROFILE_URL = "http://localhost:8080/api/v1.0/user/user-profile/"

export const getUserProfiles = async (accessToken, dispatch, userID) => {
    dispatch(getUserProfilesStart())
    try {
        const res = await axios.get(BASE_USER_PROFILE_URL + "/" + userID, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(getUserProfilesSuccess(res.data))
    } catch (e) {
        dispatch(getUserProfilesFailed())
    }
}

export const getSingleUserProfile = async (accessToken, dispatch, upID) => {
    dispatch(getSingleUserProfileStart())
    try {
        const res = await axios.get(BASE_USER_PROFILE_URL + "/" + upID, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(getSingleUserProfileSuccess(res.data))
    } catch (e) {
        dispatch(getSingleUserProfileFailed())
    }
}

export const createUserProfile = async (accessToken, dispatch, userID, userProfileRequest) => {
    dispatch(createOrUpdateUserProfileStart())
    try {
        await axios.post(BASE_USER_PROFILE_URL + "/" + userID, userProfileRequest, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(createOrUpdateUserProfileSuccess())
    } catch (e) {
        dispatch(createOrUpdateUserProfileFailed())
    }
}

export const updateUserProfile = async (accessToken, dispatch, upID, userProfileRequest) => {
    dispatch(createOrUpdateUserProfileStart())
    try {
        await axios.put(BASE_USER_PROFILE_URL + "/" + upID, userProfileRequest, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(createOrUpdateUserProfileSuccess())
    } catch (e) {
        dispatch(createOrUpdateUserProfileFailed())
    }
}

export const deleteUserProfile = async (accessToken, dispatch, upID) => {
    dispatch(deleteUserProfileStart())
    try {
        await axios.delete(BASE_USER_PROFILE_URL + "/" + upID, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(deleteUserProfileSuccess())
    } catch (e) {
        dispatch(deleteUserProfileFailed())
    }
}