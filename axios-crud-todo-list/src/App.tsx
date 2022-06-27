import { FC, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Todo } from "./components/interfaces";
import Main from "./components/mainPage";
import UpdateForm from "./components/updateForm";

const App: FC = () => {
  const [todo, setTodo] = useState<Todo[]>([]);

  return (
    <Routes>
      <Route path="/" element={<Main todo={todo} setTodo={setTodo} />} />
      <Route path="/update-employee/:id" element={<UpdateForm />} />
    </Routes>
  );
};

export default App;
