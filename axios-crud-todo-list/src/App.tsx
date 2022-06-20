import "./App.css";
import { FC, useEffect, useState } from "react";
// import axios from "axios";
// import { URL } from "./URL";
import { Todo, AppForm } from "./components/interfaces";
import { getRequest, deleteRequest, postRequest } from "./components/request";
// import Table from "./components/Table";
import { Form } from "./components/Form";

const App: FC = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [appForm, setAppForm] = useState<AppForm>({
    firstName: "",
    lastName: "",
    gender: "Male",
  });

  useEffect(() => {
    getRequest(setTodo, setLoading);
  }, [todo]);

  const onDeleteClick = (id: number): void => {
    deleteRequest(id);
  };

  const handleClear = (): void => {
    appForm.firstName = "";
    appForm.lastName = "";
  };

  const onClickSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    postRequest(appForm);
    handleClear();
  };

  const handleInputChange = (e: any): void => {
    const { name, value } = e.target;
    setAppForm({
      ...appForm,
      [name]: value,
    });
  };

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-table">
          {loading && <div>Loading</div>}
          {!loading && (
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
                {todo.map((employee) => (
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
                  </tr>
                ))}
              </tbody>
            </table>
            // <Table todo={todo} />
          )}
        </div>

        <div className="app-form">
          <div className="table-form">
            <form onSubmit={onClickSubmit}>
              <input
                placeholder="First Name"
                type="text"
                name="firstName"
                value={appForm.firstName}
                onChange={handleInputChange}
              />
              <input
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={appForm.lastName}
                onChange={handleInputChange}
              />
              <label>Choose a gender:</label>
              <select
                name="gender"
                defaultValue="Male"
                onChange={handleInputChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <button className="btn btn-primary">Add</button>
            </form>
            {/* <Form
              appForm={appForm}
              onClickSubmit={onClickSubmit}
              handleInputChange={handleInputChange}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
