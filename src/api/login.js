import axios from "axios";
const API = axios.create({
  baseURL: "https://dummyjson.com",
});
export const newUser = async (payLoad) => {
  const { data } = await API.post("/auth/login", payLoad);
  return data;
};
