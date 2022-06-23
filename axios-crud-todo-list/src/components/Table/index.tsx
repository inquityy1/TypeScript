import { Link } from "react-router-dom";
import { Todo } from "../interfaces";
import { deleteRequest } from "../request";

type Props = {
  todo: Todo[];
};

const onDeleteClick = (id: number): void => {
  deleteRequest(id);
};

const Table: React.FC<Props> = ({ todo }) => {
  const setID = (employee: Todo) => {
    localStorage.setItem("ID", employee.id);
  };

  return (
    <div className="app-table">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((employee: Todo) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.gender}</td>
              <td>
                <button onClick={() => onDeleteClick(employee.id)}>
                  Delete
                </button>
              </td>
              <td>
                <Link to={`/update-employee/${employee.id}`}>
                  <button onClick={() => setID(employee)}>Update</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
