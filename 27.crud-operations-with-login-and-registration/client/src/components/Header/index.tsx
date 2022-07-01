import "./header.css";
import { FC, useEffect, useState } from "react";
import { getCurrentUser, logout } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState<boolean>(false);

  useEffect((): void => {
    const currentUser = getCurrentUser();
    if (currentUser.role) {
      setUser(true);
    }
  }, []);

  const logOut = (): void => {
    logout();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="header-container">
      <h2>Neca's App</h2>
      {user ? (
        <button className="btn btn-primary" onClick={logOut}>
          Logout
        </button>
      ) : null}
    </div>
  );
};
