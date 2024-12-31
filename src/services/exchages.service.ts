import { axiosInstance } from "./axios.service";

export const getExchanges = async () => {
  try {
    const response = await axiosInstance.get("/exchanges");
    return response.data;
  } catch (error) {
    throw new Error();
  }
};