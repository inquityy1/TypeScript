import "./add-employee.css";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployeeService } from "../../services/employee.services";

interface Props {
  setData: React.Dispatch<React.SetStateAction<never[]>>;
}

export const AddEmployee: FC<Props> = ({ setData }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const navigate = useNavigate();

  const onClickSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    addEmployeeService(firstName, lastName, gender, setData);

    setTimeout(() => {
      navigate("/admin");
      setTimeout(() => {
        window.location.reload();
      }, 50);
    }, 300);
  };

  const onBackClick = () => {
    navigate("/admin");
  };

  return (
    <div className="add-employee-form">
      <form onSubmit={onClickSubmit}>
        <div className="first-name input">
          <input
            type="text"
            name="username"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="last-name input">
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="gender input">
          <input
            type="text"
            name="username"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="add-employee-button">
          <button className="btn btn-primary">Add Employee</button>
        </div>
      </form>
      <div className="go-back-button">
        <button onClick={onBackClick} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  );
};
