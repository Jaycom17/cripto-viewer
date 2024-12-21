import { axiosInstance } from "./axios.service";

export const getCoins = async () => {
  try {
    const response = await axiosInstance.get("/assets");
    return response.data;
  } catch (error) {
    throw new Error();
  }
};