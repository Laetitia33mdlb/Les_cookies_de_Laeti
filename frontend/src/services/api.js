// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

export const fetcher = async (url) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_API}/${url}`);
    return response.data;
  } catch (error) {
    throw new Error("Error while fetching data");
  }
};

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API ?? "http://localhost:5000",
});
