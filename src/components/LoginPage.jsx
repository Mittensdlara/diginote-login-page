import React, { useReducer } from "react";
import pagePic from "../img/illustration1.svg";
import LoginForm from "./LoginForm";

const initialState = {
  showPass: true,
  validPass: "",
  validEmail: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_PASSWORD":
      return {
        ...state,
        showPass: !state.showPass,
      };
    case "SET_VALID_PASS":
      return {
        ...state,
        validPass: action.payload,
      };
    case "SET_VALID_EMAIL":
      return {
        ...state,
        validEmail: action.payload,
      };
    default:
      return state;
  }
};

const LoginPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleToggle = (e) => {
    e.preventDefault();
    dispatch({ type: "TOGGLE_PASSWORD" });
  };

  const setValidPass = (value) => {
    dispatch({ type: "SET_VALID_PASS", payload: value });
  };

  const setValidEmail = (value) => {
    dispatch({ type: "SET_VALID_EMAIL", payload: value });
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
        showPass={state.showPass}
        validPass={state.validPass}
        validEmail={state.validEmail}
        setValidPass={setValidPass}
        setValidEmail={setValidEmail}
        handleToggle={handleToggle}
      />
    </div>
  );
};

export default LoginPage;
