import "./login.css";
import React, { useRef, useState } from "react";
import { login } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let navigate = useNavigate();

  const form = useRef<any>();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading === false) {
      setMessage("");
      setLoading(true);
    }

    if (message === "") {
      try {
        const user = await login(username, password);
        if (user.role === "admin") {
          navigate("/admin");
          window.location.reload();
        } else {
          navigate("/user");
          window.location.reload();
        }
      } catch (error) {
        setLoading(false);
        setMessage("Something's wrong");
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <form onSubmit={handleLogin} ref={form} className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              value={username}
              className="form-control"
              onChange={onChangeUsername}
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              className="form-control"
              value={password}
              onChange={onChangePassword}
              type="password"
            />
          </div>

          <div className="form-group top">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {/* Using && to shorten the ternary or if checks */}
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
