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
    // GET request using axios inside useEffect React hook
    axios.get(API).then((response) => setEmployees(response.data));
  }, []);

  const employeeForList = employees.map((employee, index) => (
    <tr className="table-row" key={index}>
      <td>{employee.id}</td>
      <td>{employee.first_name}</td>
      <td>{employee.last_name}</td>
      <td>{employee.gender}</td>
      <button>Delete</button>
    </tr>
  ));

  return (
    <table>
      <tr>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Last name</th>
          <th>gender</th>
        </tr>

        {employeeForList}
      </tr>
    </table>
  );
};

export default List;
