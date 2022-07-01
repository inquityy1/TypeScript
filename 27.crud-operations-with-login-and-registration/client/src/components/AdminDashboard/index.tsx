import axios from "axios";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { deleteEmployeeService } from "../../services/employee.services";
import { API_URL } from "../../API_URL";

interface DataProps {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
}

interface Props {
  data: DataProps[];
}

export const AdminDashboard: FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  const onAddClick: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    navigate("/add-employee");
  };

  const onDeleteClick = (id: number): void => {
    deleteEmployeeService(id);
  };

  const onUpdateClick = (id: number): void => {
    navigate(`/update/:${id}`);
  };

  return (
    <>
      <h1>Admin Dashboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Gender</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee: DataProps) => {
            return (
              <tr key={employee.id}>
                <th>{employee.id}</th>
                <th>{employee.firstName}</th>
                <th>{employee.lastName}</th>
                <th>{employee.gender}</th>
                <th>
                  <button
                    onClick={() => onDeleteClick(employee.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => onUpdateClick(employee.id)}
                    className="btn btn-dark"
                  >
                    Update
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={onAddClick} className="btn btn-primary">
        Add Employee
      </button>
    </>
  );
};
