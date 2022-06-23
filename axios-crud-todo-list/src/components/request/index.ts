import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { URL } from "../../URL";
import { Todo, AppForm } from "../interfaces";

export const getRequest = async (
  setTodo: Dispatch<SetStateAction<Todo[]>>,
  setLoading: Dispatch<SetStateAction<boolean>>
): Promise<void> => {
  const fetchData = async () => {
    try {
      const res = await axios.get(URL);
      setTodo(res.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  fetchData();
};

export const deleteRequest = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${URL}/${id}`);
  } catch (error) {
    alert(error);
  }
};

export const postRequest = async (appForm: AppForm) => {
  try {
    await axios.post(URL, appForm);
  } catch (error) {
    alert(error);
  }
};
export const putRequest = async (id: any, defaultForm: AppForm) => {
  await axios.put(`${URL}/${id}`, defaultForm);
};
