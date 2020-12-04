import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/fullstack-clone-a3972/us-central1/api",
});

export default instance;
