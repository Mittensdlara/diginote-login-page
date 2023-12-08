const EmailInput = ({ validEmail, setValidEmail }) => {
  return (
    <>
      <p className="text-white ">Email</p>
      <input
        type="text"
        placeholder="John@doe.com"
        className={
          validEmail.includes("@") &&
          validEmail.includes(".") &&
          validEmail.includes("@")
            ? "relative mb-2 border text-gray border-gray text-sm  font-medium rounded-md w-full py-3 pl-4  bg-light-bg  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
            : "relative mb-2 border text-gray border-red-500  text-sm  font-medium rounded-md w-full py-3 pl-4  bg-light-bg  focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-1"
        }
        value={validEmail}
        onChange={(e) => setValidEmail(e.target.value)}
      />
      {validEmail.includes("@") &&
      validEmail.includes(".") &&
      validEmail.includes("@") ? (
        ""
      ) : (
        <p className="mb-4 text-red-500 font-thin text-sm">Invalid email</p>
      )}
      <br />
    </>
  );
};

export default EmailInput;
