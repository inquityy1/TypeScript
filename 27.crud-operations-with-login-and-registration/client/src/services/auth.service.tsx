import axios from "axios";
import { API_URL } from "../API_URL";

type User = {
  username: string;
  password: string;
  role: string;
};

type GetUsersData = {
  data: User[];
  find: any;
};

export const getUsers = () => {
  return axios.get<GetUsersData>(API_URL + "users");
};

export const login = async (username: string, password: string) => {
  try {
    const response = await getUsers();
    const user = response.data.find((u: any) => {
      return u.username === username && u.password === password;
    });

    if (!user) {
      throw new Error("Wrong credentials");
    }

    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user") || "{}");
};

export const logout = (): void => {
  localStorage.removeItem("user");
};
