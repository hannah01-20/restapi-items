import { API } from "./api";
import toast from "react-hot-toast";

interface RegisterData {
    username: string;
    email: string;
    password: string;
    re_password: string;
}

export const register = async (data: RegisterData)=>{
    await API.post("/api/users/", data).
    then((response: any) => {
        console.log(response.data);
        toast.success(response.data.message);
    }).
    catch((error: any) => {
        console.log(error.response.data);
        toast.error(error.response.data.message);
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