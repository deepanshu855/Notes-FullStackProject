import axios from "axios";

const instance = axios.create({
  baseURL: "https://notes-fullstackproject.onrender.com",
});

export default instance;
