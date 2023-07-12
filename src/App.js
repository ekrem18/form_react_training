import React, { useState } from "react";
import "./index.css";

export default function App() {
  

  const [values, setValues] = useState({
    firstName:"", 
    lastName:"" ,
    phoneNumber:"", 
    adress:"" ,
    email:"" 
  })
  
  const handleValues= (e) => {
    setValues({...values, [e.target.name]:e.target.value })
  };

  return (
    <div className="form-container">
      <form className="register-form" >
        
        <input
          onChange={handleValues}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          required
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
          
        />
        
       
        <input
          onChange={handleValues}
          id="adress"
          className="form-field"
          type="text"
          placeholder="Adress"
          name="adress"
          required
          
        />
        

      
        <input
          onChange={handleValues}
          id="email"
          className="form-field"
          type="email"
          placeholder="Email"
          name="email"
          required
         
        />
        

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
     
    </div>
  );
}
