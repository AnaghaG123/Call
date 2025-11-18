import axiosConfig from "./axiosConfig";
import { BaseUrl } from "./baseURL";

export const createContact = (reqBody) =>
    axiosConfig('Post', `${BaseUrl}/contact`, reqBody);

export const getContact = () =>
    axiosConfig('Get', `${BaseUrl}/contact`, "");

export const deleteContact = (id) =>
    axiosConfig('Delete', `${BaseUrl}/contact/${id}`, {});

export const editContact = (id, reqBody) =>
    axiosConfig('Put', `${BaseUrl}/contact/${id}`, reqBody);
