import React, { useState } from "react";
// import logo from './logo.svg';
import './signinforms.css';
// import { Login } from "./Login";
import { Register } from "./regiter/Register";
import { SignUp } from "./Signup/SignUp";

function Signinforms () {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "signup" ? <SignUp onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default Signinforms;