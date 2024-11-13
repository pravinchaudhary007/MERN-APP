import { NavLink } from "react-router-dom";
import image from "../../../../assets/square.jpg";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
const Login = () => {

  const { hendlelogin, submithendle } = useContext(UserContext);


  return (
    <>
      <section
        style={{ backgroundImage: `url(${image})` }}
        className=" h-screen select-none bg-cover  bg-center bg-no-repeat  w-full flex justify-center items-center"
      >
        <div className="h-auto w-[30%]">
          <form
            onSubmit={hendlelogin}
            className="border grid  shadow-lg drop-shadow-lg bg-black bg-opacity-50  border-white text-white rounded px-4 py-6"
          >
            <h1 className="text-xl text-center font-bold mb-4">Login</h1>
            <div className="mb-4 ">
              <label htmlFor="username" className="block text-base mb-2">
                User Name / Email
                <input
                  type="text"
                  name="userid"
                  onChange={submithendle}
                  autoComplete="off"
                  className="border-b tracking-wider focus:bg-transparent bg-transparent px-2 py-1 active:border-b focus:border-orange-500 border-white outline-none w-full"
                  required={true}
                />
              </label>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">
                Password
                <input
                  type="password"
                  name="loginpass"
                  autoComplete="off"
                  onChange={submithendle}
                  className="border-b px-2 py-1 focus:bg-transparent bg-transparent active:border-b border-white   focus:border-orange-500  outline-none w-full"
                  required={true}
                />
              </label>
            </div>
            <div className="flex justify-between mx-4 items-center">
              <button
                type="reset"
                className="bg-orange-500 shadow-lg drop-shadow-lg hover:bg-orange-600 w-24 px-4 py-1  rounded-sm"
              >
                Clear
              </button>
              <button
                type="submit"
                className="bg-blue-500 shadow-lg drop-shadow-lg hover:bg-blue-700  w-24 text-white px-4 py-1 rounded-sm"
              >
                Login
              </button>
            </div>
            <div className="flex mx-4 justify-between items-center">
              <NavLink to={"/forgatepass"}>
                {" "}
                <p className="py-2 underline hover:text-blue-700 w-fit">
                  Forgate Password ?
                </p>
              </NavLink>
              <NavLink to={"/register"}>
                {" "}
                <p className="py-2 underline hover:text-blue-700 w-fit">
                  Register Now ?
                </p>
              </NavLink>
            </div>
          </form>
        </div>
        <ToastContainer transition={Bounce} />
      </section>
    </>
  );
};

export default Login;
