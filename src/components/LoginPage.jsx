// components/LoginPage.js

import React, { useState } from "react";
import pagePic from "../img/illustration1.svg";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const [showPass, setShowPass] = useState(true);
  const [validPass, setValidPass] = useState("");
  const [validEmail, setValidEmail] = useState("");

  const handleToggle = (e) => {
    e.preventDefault();
    setShowPass((prevPass) => !prevPass);
  };

  return (
    <div className="grid h-screen grid-cols-2">
      <div className="bg-light-bg justify-center flex flex-col items-center">
        <img
          className="min-width: 100%; max-width: 100%"
          src={pagePic}
          alt=""
        />
        <h1 className="text-white mb-5 text-center text-3xl font-semibold">
          Revolutionary Documentations
        </h1>
        <p className="text-gray mb-11 text-center text-lg font-medium">
          Using DigiNote is one good way to save our beautiful planet
        </p>
      </div>
      <LoginForm
        showPass={showPass}
        validPass={validPass}
        validEmail={validEmail}
        setValidPass={setValidPass}
        setValidEmail={setValidEmail}
        handleToggle={handleToggle}
      />
    </div>
  );
};

export default LoginPage;
