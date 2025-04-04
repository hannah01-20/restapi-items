import { API } from "./api";
import toast from "react-hot-toast";

export const getUserData = async () =>{
    let user = null
    await API.get("/api/users/").
    then((response: any) => {
        user = response.data
    }).
    catch((error: any) => {
        toast.error(error.response.data.message || error.response.data.msg);
    });
    return user
}