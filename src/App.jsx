import React, { useState } from "react";
import "./App.css";
import pagePic from "./img/illustration1.svg";
import showIcon from "./img/show.png";
import hideIcon from "./img/hide.svg";

function App() {
  const [showPass, setShowPass] = useState(true);
  const [validPass, setValidPass] = useState("");
  const [validEmail, setValidEmail] = useState("");

  const handleToggle = (e) => {
    e.preventDefault();
    setShowPass((prevePass) => !prevePass);
  };
  return (
    <>
      <div className="app">
        <div className="grid h-screen grid-cols-2 ">
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

          <div className="bg-dark-bg justify-center flex flex-col items-center flex-12">
            <h1 className="text-white mb-8 text-3xl font-semibold">Log in</h1>

            <div className="w-7/12 ">
              <form className="flex flex-col ">
                <p className="text-white ">Email</p>
                <input
                  type="text"
                  placeholder="John@doe.com"
                  className={
                    validEmail.includes("@")
                      ? "relative mb-2 border text-gray border-gray text-sm  font-medium rounded-md w-full py-3 pl-4  bg-light-bg  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                      : "relative mb-2 border text-gray border-red-500 text-sm  font-medium rounded-md w-full py-3 pl-4  bg-light-bg  focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-1"
                  }
                  value={validEmail}
                  onChange={(e) => setValidEmail(e.target.value)}
                />
                {validEmail.includes("@") &&
                validEmail.includes(".") &&
                validEmail.includes("@") ? (
                  ""
                ) : (
                  <p className="mb-4 text-red-500 font-thin text-sm">
                    Invalid email
                  </p>
                )}
                <br />

                <p className="text-white">Password</p>
                <input
                  className={
                    validPass.length > 8
                      ? "relative mb-2 border text-gray border-gray text-sm  font-medium rounded-md w-full py-3 pl-4  bg-light-bg  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                      : "relative mb-2 border text-gray border-red-500 text-sm  font-medium rounded-md w-full py-3 pl-4  bg-light-bg  focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-1"
                  }
                  type={showPass ? "password" : "text"}
                  name="password"
                  value={validPass}
                  placeholder="•••••••"
                  required
                  onChange={(e) => setValidPass(e.target.value)}
                />
                {validPass.length > 8 ? (
                  ""
                ) : (
                  <p className="mb-4 text-red-500 font-thin text-sm">
                    {" "}
                    Password must contain at least 8 characters
                  </p>
                )}
                <div className="absolute top-5 bottom-48 right-40  flex ">
                  <button
                    onClick={handleToggle}
                    className="flex items-center justify-center rounded-md  "
                  >
                    {showPass ? (
                      <img className="w-6 mr-4" src={showIcon} alt="" />
                    ) : (
                      <img className="w-5 mr-4" src={hideIcon} alt="" />
                    )}
                  </button>
                </div>
                <br />
                <div className="flex justify-between">
                  {" "}
                  <button className="text-hover-blue hover:text-blue-800">
                    Forget Password?
                  </button>
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500"
                    />
                    <label
                      htmlFor="remember-me"
                      className="text-hover-blue ml-1 hover:text-blue-800"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </form>

              <br />
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="text-white rounded-lg m-5 p-3 w-full bg-hover-blue hover:bg-blue-800"
                >
                  Log in
                </button>
              </div>
              <div className="mb-6 flex items-center">
                <span className="mr-4 h-px grow bg-gray"></span>
                <span className="text-sm font-semibold text-gray">OR</span>
                <span className="ml-4 h-px grow bg-gray"></span>
              </div>
              <div className="login-buttons flex flex-col items-center">
                <button className="bg-white rounded-lg m-2 p-3 w-full hover:bg-gray">
                  Continue with Google
                </button>
                <button className="bg-white  rounded-lg m-2 p-3 w-full hover:bg-gray">
                  Contibue with Apple
                </button>
              </div>
              <div className="new-account flex items-center justify-center">
                <p className="text-white font-semibold">
                  Don't have an account?{" "}
                  <a href="#" className="hover:text-blue-800 text-hover-blue">
                    Sign up
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
