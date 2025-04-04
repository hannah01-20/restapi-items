import { API } from "./api";
import toast from "react-hot-toast";

export const getItems = async () => {
    let items = null
    await API.get("/api/items/").
    then((response: any) => {
        items = response.data
    }).
    catch((error: any) => {
        toast.error(error.response.data.message || error.response.data.msg || "Failed to fetch items");
    });
    return items
}