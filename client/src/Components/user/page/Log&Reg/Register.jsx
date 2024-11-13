import { NavLink, useNavigate } from "react-router-dom";
import image from "../../../../assets/square.jpg";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    username: "",
    phonenumber: "",
    email: "",
    password: "",
    cmfmpass: "",
  });

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const HendlerRegister = async (e) => {
    e.preventDefault();
    try {
      const server = await axios.post(
        "http://localhost:5000/register",
        FormData
      );

      if (server.data) {
        toast.success(server.data);
        setFormData({
          username: "",
          phonenumber: "",
          email: "",
          password: "",
          cmfmpass: "",
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      toast.error(error.response?.data || "Registration failed!");
    }
  };

  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className="min-h-screen select-none bg-cover bg-center bg-no-repeat w-full flex justify-center items-center"
    >
      <div className="h-auto w-full sm:w-[80%] md:w-[50%] lg:w-[30%]">
        <form
          onSubmit={HendlerRegister}
          className="border grid text-white font-medium backdrop-blur-sm bg-black bg-opacity-50 border-white rounded px-4 py-5"
        >
          <h1 className="text-xl text-center font-bold mb-4">Register</h1>
          <div className="mb-4">
            <label htmlFor="username" className="block text-base">
              User Name
              <input
                type="text"
                name="username"
                value={FormData.username}
                onChange={changeHandle}
                className="border-b px-2 tracking-wider py-1 active:border-b bg-transparent focus:border-white outline-none w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="phonenumber" className="block">
              Phone Number
              <input
                type="number"
                name="phonenumber"
                autoComplete="off"
                value={FormData.phonenumber}
                onChange={changeHandle}
                className="border-b px-2 py-1 tracking-wide active:border-b bg-transparent border-white focus:border-white outline-none w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block">
              Email
              <input
                type="email"
                name="email"
                value={FormData.email}
                onChange={changeHandle}
                className="border-b px-2 py-1 tracking-wide active:border-b bg-transparent border-white focus:border-white outline-none w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block">
              Password
              <input
                type="password"
                name="password"
                value={FormData.password}
                onChange={changeHandle}
                autoComplete="off"
                className="border-b px-2 py-1 active:border-b bg-transparent border-white focus:border-white outline-none w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="cmfmpass" className="block">
              Confirm Password
              <input
                type="password"
                autoComplete="off"
                name="cmfmpass"
                value={FormData.cmfmpass}
                onChange={changeHandle}
                className="border-b px-2 py-1 active:border-b bg-transparent border-white focus:border-white outline-none w-full"
              />
            </label>
          </div>

          <div className="flex mx-4 justify-between items-center">
            <button
              type="reset"
              className="bg-orange-500 shadow-lg drop-shadow-lg focus:border-white border-white w-24 px-4 py-1 rounded-sm"
            >
              Clear
            </button>
            <button
              type="submit"
              className="bg-blue-500 shadow-lg drop-shadow-lg hover:bg-blue-700 w-24 text-white px-4 py-1 rounded-sm"
            >
              Register
            </button>
          </div>

          <NavLink to="/login">
            <p className="py-2 px-5 underline hover:text-blue-700 w-fit">
              Login Now ?
            </p>
          </NavLink>
        </form>
      </div>

      {/* ToastContainer with Bounce transition */}
      <ToastContainer transition={Bounce} />
    </section>
  );
};

export default Register;
