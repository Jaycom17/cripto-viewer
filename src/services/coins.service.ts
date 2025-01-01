import { axiosInstance } from "./axios.service";

export const getCoins = async () => {
  try {
    const response = await axiosInstance.get("/assets");
    return response.data;
  } catch (error) {
    throw new Error();
  }
};

export const getCoin = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/assets/${id}`);
    return response.data;
  } catch (error) {
    throw new Error();
  }
};