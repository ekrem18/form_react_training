import React, { useState } from "react";
import "./index.css";

export default function App() {
  
  const [name, setName] = useState("")
  
  const handleFirstname = (e) =>{
    setName(e.target.value)
  }

  return (
    <div className="form-container">
      <form className="register-form" >
        
        <input
          onChange={handleFirstname}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          required
        />
        <span>{name}</span>
        
        
        <input
          
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          required
          
        />
        <span>lastname</span>
        
        <input
         
          id="phone-number"
          className="form-field"
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          required
          
        />
        
       
        <input
          
          id="adress"
          className="form-field"
          type="text"
          placeholder="Adress"
          name="adress"
          required
          
        />
        

      
        <input
          
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
