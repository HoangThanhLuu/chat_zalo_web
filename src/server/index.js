import axios from "axios";

export const PORT = axios.create({
    baseURL: "http://localhost:8080"
})