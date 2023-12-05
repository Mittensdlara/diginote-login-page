import showIcon from "../img/show.png";
import hideIcon from "../img/hide.svg";

const PasswordInput = ({ showPass, validPass, setValidPass, handleToggle }) => {
  return (
    <>
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
    </>
  );
};

export default PasswordInput;
