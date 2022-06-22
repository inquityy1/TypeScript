import "./App.css";
import { FC, useEffect, useState } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
// import axios from "axios";
// import { URL } from "./URL";
import { Todo } from "./components/interfaces";
import { getRequest } from "./components/request";

const App: FC = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getRequest(setTodo, setLoading);
  }, [todo]);

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-table">
          {loading && <div>Loading...</div>}
          {!loading && <Table todo={todo} />}
        </div>

        <div className="app-form">
          <div className="table-form">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
