import axios from "axios";
import { API_URL } from "../API_URL";

export const addEmployeeService = (
  firstName: string,
  lastName: string,
  gender: string,
  setData: React.Dispatch<React.SetStateAction<never[]>>
): void => {
  axios
    .post(`${API_URL}list-employees`, { firstName, lastName, gender })
    .then((response) => {
      setData(response.data);
    });
};

export const deleteEmployeeService = (id: number): void => {
  axios.delete(`${API_URL}list-employees/${id}`);
};
