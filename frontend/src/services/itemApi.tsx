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

export const getItem = async (id: string) => {
    let item = null
    await API.get(`/api/items/${id}/`).
    then((response: any) => {
        item = response.data
    }).
    catch((error: any) => {
        toast.error(error.response.data.message || error.response.data.msg || "Failed to fetch item");
    });
    return item
}

interface addItemData {
    name: string;
    price: number;
}

export const addItem = async (data: addItemData) => {
    await API.post("/api/items/", data).
    then((response: any) => {
        // toast.success(response.data.msg || "Item created successfully");
        return response.data
    }).
    catch((error: any) => {
        // toast.error(error.response.data.message || error.response.data.msg || "Failed to create item");
        throw error.response
    });
}

export const updateItem = async (data: addItemData, id: string | undefined) => {
    let is_Success = false
    await API.put(`/api/items/${id}/`, data).
    then((response: any) => {
        toast.success(response.data.msg || "Item updated successfully");
        is_Success = true
    }).
    catch((error: any) => {
        toast.error(error.response.data.message || error.response.data.msg || "Failed to update item");
    });
    return is_Success
}

export const deleteItem = async (id: string | undefined) => {
    await API.delete(`/api/items/${id}/`).
    then((response: any) => {
        // toast.success(response.data.msg || "Item deleted successfully");
        // is_Success = true
        return response
    }).
    catch((error: any) => {
        // toast.error(error.response.data.message || error.response.data.msg || "Failed to delete item");
        return error
    });
}