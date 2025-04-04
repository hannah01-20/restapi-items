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
    const response = await API.get(`/api/items/${id}/`).
    then((response: any) => {
        return response.data
    }).
    catch((error: any) => {
        toast.error(error.response.data.message || error.response.data.msg || "Failed to fetch item");

        throw error.response
    });
    return response
}

interface addItemData {
    name: string;
    price: number;
}

export const addItem = async (data: addItemData) => {
    await API.post("/api/items/", data).
    then((response: any) => {
        return response.data
    }).
    catch((error: any) => {
        throw error.response
    });
}

export const updateItem = async (data: addItemData, id: string | undefined) => {
    await API.put(`/api/items/${id}/`, data).
    then((response: any) => {
        return response.data
    }).
    catch((error: any) => {
        throw error.response
    });
}

export const deleteItem = async (id: string | undefined) => {
    await API.delete(`/api/items/${id}/`).
    then((response: any) => {
        return response
    }).
    catch((error: any) => {
        return error
    });
}