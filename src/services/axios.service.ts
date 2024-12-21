import { VITE_API_URL } from "../config/env";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});