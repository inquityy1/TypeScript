import "./list.css";
import { useState, useEffect } from "react";
import axios from "axios";
import API from "../api.jsx";

interface JSONProps {
  id: number;
  first_name: string;
  last_name: string;
  gender: "Male" | "Female";
}

const List: React.FC = () => {
  const [employees, setEmployees] = useState<JSONProps[]>([]);

  useEffect(() => {
    axios.get(API).then((response) => setEmployees(response.data));
  }, []);

  const onDeleteClick = (id: number) => {
    console.log(id);

    axios.delete(`${API}/${id}`).then(() => {
      const employeess = employees.filter((item) => item.id !== id);
      setEmployees(employeess);
    });
  };

  const employeeForList = employees.map((employee, index) => (
    <tr className="table-row" key={index}>
      <td>{employee.id}</td>
      <td>{employee.first_name}</td>
      <td>{employee.last_name}</td>
      <td>{employee.gender}</td>
      <td>
        <button onClick={() => onDeleteClick(employee.id)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Last name</th>
          <th>gender</th>
        </tr>
      </thead>

      <tbody>{employeeForList}</tbody>
    </table>
  );
};

export default List;
