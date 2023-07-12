import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    adress: "",
    email: "",
  });
const [table, setTable] = useState()

  const { firstName, lastName, phoneNumber, adress, email } = values;

  const handleValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   setTable(values)

    setValues({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      adress: "",
      email: "",
    });
  };
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        

        <input
          onChange={handleValues}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          required
          value={firstName}
        />
        <span>{values.firstName}</span>
        <input
          onChange={handleValues}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          required
          value={lastName}
        />
        <span>{values.lastName}</span>
        <input
          onChange={handleValues}
          id="phone-number"
          className="form-field"
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          required
          value={phoneNumber}
        />
        <span>{values.phoneNumber}</span>
        
        <input
          onChange={handleValues}
          id="adress"
          className="form-field"
          type="text"
          placeholder="Adress"
          name="adress"
          required
          value={adress}
        />
        <span>{values.adress}</span>

        
        <input
          onChange={handleValues}
          id="email"
          className="form-field"
          type="email"
          placeholder="Email"
          name="email"
          required
          value={email}
        />
        <span>{values.email}</span>

        
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
     
    </div>
  );
}
