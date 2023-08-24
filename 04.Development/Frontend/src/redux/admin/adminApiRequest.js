import axios from "axios"
import { activateAccountFailed, activateAccountStart, activateAccountSuccess, changePasswordFailed, changePasswordStart, changePasswordSuccess, getAllUsersFailed, getAllUsersStart, getAllUsersSuccess, getSingleUserFailed, getSingleUserStart, getSingleUserSuccess } from "./adminSlice"

const BASE_ADMIN_URL = "http://localhost:8080/api/v1.0/admin"

export const getAllUsers = async (accessToken, dispatch, partUserAccount, partUserEmail, pageNo, pageSize) => {
    dispatch(getAllUsersStart())
    try{
        const res = await axios.get(BASE_ADMIN_URL + "/find-users-by?partUserAccount=" + partUserAccount
                                    + "&partUserEmail=" + partUserEmail
                                    + "&pageNo=" + pageNo
                                    + "&pageSize=" + pageSize, {
                                        headers: {
                                            "Authorization": `Bearer ${accessToken}`
                                        }
                                    })
        dispatch(getAllUsersSuccess(res.data))
    } catch (e) {
        dispatch(getAllUsersFailed())
    }
}

export const getSingleUser = async (accessToken, dispatch, userID) => {
    dispatch(getSingleUserStart())
    try {
        const res = await axios.get(BASE_ADMIN_URL+"/find-user-by-id/" + userID, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(getSingleUserSuccess(res.data))
    } catch (e) {
        dispatch(getSingleUserFailed())
    }
}
export const changePassword = async (accessToken, dispatch, userID, password) => {
    dispatch(changePasswordStart())
    try {
        await axios.put(BASE_ADMIN_URL + "/change-password/" + userID + "?newUserPassword=" + password, null, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(changePasswordSuccess())
    } catch (e) {
        dispatch(changePasswordFailed())
    }
}

export const activateAccount = async (accessToken, dispatch, userID) => {
    dispatch(activateAccountStart())
    try {
        await axios.put(BASE_ADMIN_URL + "/activate-account/" + userID, null, {
            headers: {
                "Authorization": `Bearer + ${accessToken}`
            }
        })
        dispatch(activateAccountSuccess())
    } catch (e) {
        dispatch(activateAccountFailed())
    }
}