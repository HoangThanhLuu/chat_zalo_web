import axios from "axios";

// Create an Axios instance with the base URL of your server
const PORT = axios.create({
    baseURL: "http://localhost:8080"
});

export default PORT;
