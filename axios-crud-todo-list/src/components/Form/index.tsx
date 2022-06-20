export const Form = ({ appForm, onClickSubmit, handleInputChange }: any) => {
  return (
    <form onSubmit={onClickSubmit}>
      <input
        placeholder="First Name"
        type="text"
        name="firstName"
        value={appForm.firstName}
        onChange={handleInputChange}
      />
      <input
        placeholder="Last Name"
        type="text"
        name="lastName"
        value={appForm.lastName}
        onChange={handleInputChange}
      />
      <label>Choose a gender:</label>
      <select name="gender" defaultValue={"Male"} onChange={handleInputChange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <button className="btn btn-primary">Add</button>
    </form>
  );
};
