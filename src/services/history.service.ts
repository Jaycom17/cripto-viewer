import { axiosInstance } from "./axios.service";

export const getHistory = async (id: string, interval: string) => {
  try {
    const response = await axiosInstance.get(`assets/${id}/history?interval=${interval}`);
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
