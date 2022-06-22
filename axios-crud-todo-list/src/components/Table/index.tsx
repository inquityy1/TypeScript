import { Todo } from "../interfaces";
import { deleteRequest } from "../request";

type Props = {
  todo: Todo[];
};

const onDeleteClick = (id: number): void => {
  deleteRequest(id);
};

const onUpdateClick = async (employee: any) => {};

const Table: React.FC<Props> = ({ todo }: any) => {
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
                <button onClick={() => onUpdateClick(employee)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
