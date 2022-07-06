import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteEmployeeService } from "../../services/employee.services";
import { getCurrentUser } from "../../services/auth.service";

interface DataProps {
  id: any;
  firstName: string;
  lastName: string;
  gender: string;
}

interface Props {
  data: DataProps[];
}

export const AdminDashboard: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect((): void => {
    const currentUser = getCurrentUser();
    if (currentUser.role === "admin") {
      setIsAdmin(true);
    }
  }, []);

  const onDeleteClick = (id: number): void => {
    deleteEmployeeService(id);
  };

  const onUpdateClick = (employee: DataProps): void => {
    localStorage.setItem("ID", employee.id);
    localStorage.setItem("FirstName", employee.firstName);
    localStorage.setItem("LastName", employee.lastName);
    localStorage.setItem("Gender", employee.gender);

    navigate(`/update/:${employee.id}`);
  };

  return (
    <>
      <h1>Admin Dashboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
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

                {isAdmin ? (
                  <>
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
                        onClick={() => onUpdateClick(employee)}
                        className="btn btn-dark"
                      >
                        Update
                      </button>
                    </th>
                  </>
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </table>
      {isAdmin ? (
        <>
          <Link to={"/add-employee"} className="btn btn-primary">
            Add Employee
          </Link>
        </>
      ) : null}
    </>
  );
};
