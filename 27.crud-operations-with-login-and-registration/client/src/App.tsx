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
import { AdminDashboard } from "./components/AdminDashboard";
import { UserDashboard } from "./components/UserDashboard/UserDashboard";
import { AddEmployee } from "./components/AddEmployee";
import { UpdateEmployee } from "./components/UpdateEmployee";

const App: FC = () => {
  const [data, setData] = useState([]);

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
  }, [data]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<LogedOutRoutes />}>
          <Route path="/" element={<Login />} />
        </Route>

        <Route element={<AdminRoutes />}>
          <Route path="/admin" element={<AdminDashboard data={data} />} />
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
          <Route path="/user" element={<AdminDashboard data={data} />} />
        </Route>
      </Routes>

      {/* <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<SignUp />} />

        <Route element={<ProtectedRoutes />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/feed" element={<PostFeed />} />
          <Route exact path="/edit-profile" element={<CreateProfile />} />
          <Route exact path="/add-experience" element={<CreateExperience />} />
          <Route exact path="/add-education" element={<CreateEducation />} />
          <Route exact path="/create-profile" element={<CreateProfile />} />
        </Route>

        <Route exact path="/profiles" element={<Profiles />} />
        <Route exact path="/profiles/:name" element={<UserProfile />} />
      </Routes>
      <Footer /> */}
    </Router>
  );
};

export default App;
