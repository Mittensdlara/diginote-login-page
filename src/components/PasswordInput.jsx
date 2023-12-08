import showIcon from "../img/show.png";
import hideIcon from "../img/hide.svg";

const PasswordInput = ({ showPass, validPass, setValidPass, handleToggle }) => {
  return (
    <>
      <div className="">
        <p className="text-white">Password</p>
        <div className="relative">
          <input
            className={
              validPass.length > 8
                ? "relative mb-2 border text-gray border-gray text-sm  font-medium rounded-md w-full py-3 pl-4  bg-light-bg  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                : "relative mb-2 border text-gray  text-sm  font-medium rounded-md w-full py-3 pl-4  bg-light-bg border-red-500  focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-1"
            }
            type={showPass ? "password" : "text"}
            name="password"
            value={validPass}
            placeholder="•••••••"
            required
            onChange={(e) => setValidPass(e.target.value)}
          />
          <div className="absolute top-0 right-0 bottom-0 m-auto mr-4 flex items-center">
            <button
              onClick={handleToggle}
              className=" flex items-center justify-center rounded-md "
            >
              {showPass ? (
                <img className="w-6 mb-2" src={showIcon} alt="" />
              ) : (
                <img className="w-5 mb-2" src={hideIcon} alt="" />
              )}
            </button>
          </div>
        </div>
        {validPass.length > 8 ? (
          ""
        ) : (
          <p className="mb-4 text-red-500 font-thin text-sm ">
            {" "}
            Password must contain at least 8 characters
          </p>
        )}
      </div>
      <br />
    </>
  );
};

export default PasswordInput;
