// AUTHENTICATION API CALLS
// LOGIN, LOGOUT, REGISTER

import { API } from "./api";
import toast from "react-hot-toast";

interface RegisterData {
    username: string;
    email: string;
    password: string;
    re_password: string;
}

export const register = async (data: RegisterData) =>{
    await API.post("/api/users/", data).
    then((response: any) => {
        // toast.success(response.data.message);
        return response
    }).
    catch((error: any) => {
        console.log(error.response.data);
        throw error
    });
}

export const login = async (data: {username: string, password: string})=>{
    // let is_success = false
    await API.post("/api/login/", data).
    then((response: any) => {
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        // toast.success("Welcome back!");
        // is_success = true
        return response
    }).
    catch((error: any) => {
        // toast.error(error.response.data.message);
        throw error.response
    });
    // return is_success
}

export const logout = async () => {
    await API.post("/api/logout/").
    then(() => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
    }).
    catch((error: any) => {
        toast.error(error.response.data.message || "Logout failed");
    });
}