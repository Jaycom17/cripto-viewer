import { axiosInstance } from "./axios.service";

export const getMarketsByCryptoId = async (id?: string) => {
  try {
    const response = await axiosInstance.get(`assets/${id}/markets`);
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
