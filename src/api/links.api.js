import axios from "axios";

const linksApi = axios.create({
  baseURL: "https://link-room-api.vercel.app/link-room/v1/links/",
});

export const getAllLinks = () => linksApi.get("/");

export const getLink = id => linksApi.get(`/${id}/`);

export const createLink = (link) => linksApi.post("/", link);

export const deleteLink = (id) => linksApi.delete(`/${id}/`);

export const updateLink = (id, link) => linksApi.put(`/${id}/`, link);
