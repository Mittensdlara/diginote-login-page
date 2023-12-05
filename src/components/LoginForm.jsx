
import React from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

const LoginForm = ({
    showPass,
    validPass,
    validEmail,
    setValidPass,
    setValidEmail,
    handleToggle,
  }) => {
    return (
      <div className="bg-dark-bg justify-center flex flex-col items-center flex-12">
        <h1 className="text-white mb-8 text-3xl font-semibold">Log in</h1>
  
        <div className="w-7/12">
          <form className="flex flex-col">
            <EmailInput
              validEmail={validEmail}
              setValidEmail={setValidEmail}
            />
  
            <PasswordInput
              showPass={showPass}
              validPass={validPass}
              setValidPass={setValidPass}
              handleToggle={handleToggle}
            />
  
            <div className="flex justify-between">
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
    );
  };
  
  export default LoginForm;