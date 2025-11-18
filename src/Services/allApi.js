import axiosConfig from "./axiosConfig";
import { BaseUrl } from "./baseURL";

export const createContact = async (reqBody) => {

    return axiosConfig('Post',"http://localhost:3000/contact",reqBody)

}
export const getContact = async () => {

    return axiosConfig('Get',"http://localhost:3000/contact","")

}
export const deleteContact = async (id) => {

    return axiosConfig('Delete',`http://localhost:3000/contact/${id}`,{})

}
export const editContact = async (id,reqBody) => {

    return axiosConfig('Put',`http://localhost:3000/contact/${id}`,reqBody)

}