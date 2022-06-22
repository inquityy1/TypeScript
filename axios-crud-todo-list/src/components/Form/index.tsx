import { FC } from "react";
import { useState } from "react";
import { AppForm } from "../interfaces";
import { postRequest } from "../request";

const Form: FC = () => {
  const [defaultForm, setDefaultForm] = useState<AppForm>({
    firstName: "",
    lastName: "",
    gender: "Male",
  });

  const onClickSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    postRequest(defaultForm);

    defaultForm.firstName = "";
    defaultForm.lastName = "";
    defaultForm.gender = "Male";
  };

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setDefaultForm({
      ...defaultForm,
      [name]: value,
    });
  };

  return (
    <form onSubmit={onClickSubmit}>
      <input
        placeholder="First Name"
        type="text"
        name="firstName"
        value={defaultForm.firstName}
        onChange={handleOnChange}
      />
      <input
        placeholder="Last Name"
        type="text"
        name="lastName"
        value={defaultForm.lastName}
        onChange={handleOnChange}
      />
      <label>Choose a gender:</label>
      <select name="gender" defaultValue="Male" onChange={handleOnChange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <button className="btn btn-primary">Add</button>
    </form>
  );
};

export default Form;
