import axiosConfig from "./axiosConfig";
import { BaseUrl } from "./baseURL";

export const createContact = async (reqBody) => {

    return axiosConfig('Post',`${BaseUrl}/contact`,reqBody)

}
export const getContact = async () => {

    return axiosConfig('Get',`${BaseUrl}/contact`,"")

}
export const deleteContact = async (id) => {

    return axiosConfig('Delete',`${BaseUrl}/contact/${id}`,{})

}
export const editContact = async (id,reqBody) => {

    return axiosConfig('Put',`${BaseUrl}/contact/${id}`,reqBody)

}