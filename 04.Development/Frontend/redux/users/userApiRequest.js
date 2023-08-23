import axios from "axios";
import { loginFailed, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess, registerFailed, registerStart, registerSuccess } from "./userSlice";

const BASE_AUTH_URL = "http://localhost:8080/api/v1.0/auth";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post(BASE_AUTH_URL + "/authenticate", user)
        dispatch(loginSuccess(res.data))
        navigate("/")
    } catch (error) {
        dispatch(loginFailed())
    }
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        await axios.post(BASE_AUTH_URL + "/register", user)
        dispatch(registerSuccess())
        navigate("/login")
    } catch (error) {
        dispatch(registerFailed())
    }
}

export const logoutUser = async (accessToken, dispatch, navigate) => {
    dispatch(logoutStart())
    try {
        await axios.post(BASE_AUTH_URL + "/logout",{},
        {
            headers:{
                "Authorization": `Bearer ${accessToken}`
            }
        });
        dispatch(logoutSuccess())
        navigate("/login")
    } catch (error) {
        dispatch(logoutFailed())
    }
}