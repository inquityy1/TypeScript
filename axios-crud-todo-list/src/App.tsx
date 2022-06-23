import { FC, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Todo } from "./components/interfaces";
import Main from "./components/mainPage";
import UpdateForm from "./components/updateForm";

const App: FC = () => {
  const [todo, setTodo] = useState<Todo[]>([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main todo={todo} setTodo={setTodo} />}
        ></Route>
        <Route path="/update-employee/:id" element={<UpdateForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
