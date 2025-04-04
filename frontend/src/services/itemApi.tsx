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

interface addItemData {
    name: string;
    price: number;
}

export const addItem = async (data: addItemData) => {
    let is_Success = false
    await API.post("/api/items/", data).
    then((response: any) => {
        toast.success(response.data.msg || "Item created successfully");
        is_Success = true
    }).
    catch((error: any) => {
        toast.error(error.response.data.message || error.response.data.msg || "Failed to create item");
    });
    return is_Success
}