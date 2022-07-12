import "./App.css";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  AdminRoutes,
  UserRoutes,
  LogedOutRoutes,
} from "./privateRoutes/PrivateRoutes";
import { API_URL } from "./API_URL";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { AddEmployee } from "./components/AddEmployee";
import { UpdateEmployee } from "./components/UpdateEmployee";

interface DataProps {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
}

const App: FC = () => {
  const [data, setData] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(false);

  useEffect((): void => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(`${API_URL}list-employees`);
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const searchOnNameHandler = (searchTerm: string): void => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newEmployeeList = data.filter((employee: DataProps) => {
        return Object.values(employee.firstName)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newEmployeeList);
      setDisabled(true);
    } else {
      setSearchResults(data);
      setDisabled(false);
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<LogedOutRoutes />}>
          <Route path="/" element={<Login />} />
        </Route>

        <Route element={<AdminRoutes />}>
          <Route
            path="/admin"
            element={
              <Dashboard
                data={searchTerm.length < 1 ? data : searchResults}
                term={searchTerm}
                searchKeyword={searchOnNameHandler}
                setData={setData}
                disabled={disabled}
              />
            }
          />
          <Route
            path="/add-employee"
            element={<AddEmployee setData={setData} />}
          />
          <Route
            path="/update/:id"
            element={<UpdateEmployee setData={setData} />}
          />
        </Route>
        <Route element={<UserRoutes />}>
          <Route path="/user" element={<Dashboard data={data} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
