import axios from "axios";
import { changePasswordFailed, changePasswordStart, changePasswordSuccess, deleteAccountFailed, deleteAccountStart, deleteAccountSuccess, updateEmailFailed, updateEmailStart, updateEmailSuccess } from "./accountManagementSlice";

const BASE_ACCOUNT_MANAGEMENT_URL = "http://localhost:8080/api/v1.0/account-management";

export const changePassword = async (accessToken, dispatch, userID, changePasswordRequest) => {
    dispatch(changePasswordStart())
    try {
        await axios.put(BASE_ACCOUNT_MANAGEMENT_URL + "/change-password/" + userID, changePasswordRequest, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(changePasswordSuccess())
    } catch (e) {
        dispatch(changePasswordFailed())
    }
}

export const updateEmail = async (accessToken, dispatch, userID, newUserEmail) => {
    dispatch(updateEmailStart())
    try{
        await axios.put(BASE_ACCOUNT_MANAGEMENT_URL + "/update-email/" + userID + "?newUserEmail=" + newUserEmail, null, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(updateEmailSuccess())
    } catch (e) {
        dispatch(updateEmailFailed())
    }
}

export const deleteAccount = async (accessToken, dispatch, userID) => {
    dispatch(deleteAccountStart())
    try {
        await axios.delete(BASE_ACCOUNT_MANAGEMENT_URL + "/delete-account/" + userID, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(deleteAccountSuccess())
    } catch (e) {
        dispatch(deleteAccountFailed())
    }
}

