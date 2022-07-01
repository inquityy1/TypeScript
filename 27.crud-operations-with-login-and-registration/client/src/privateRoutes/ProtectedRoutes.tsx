import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../services/auth.service";

const ProtectedRoutes: FC = () => {
  const currentUser = getCurrentUser();
  let auth: boolean = false;

  if (currentUser.role === "admin") {
    auth = true;
  }

  return auth ? <Outlet /> : <Navigate to="/user" />;
};

export default ProtectedRoutes;
