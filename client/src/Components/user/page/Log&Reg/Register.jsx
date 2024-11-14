import { NavLink, useNavigate } from "react-router-dom";
import image from "../../../../assets/square.jpg";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
  const navigate = useNavigate();
  const [eye,seteye] = useState(false)
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
          className="border grid font-medium backdrop-blur-sm bg-black bg-opacity-50 border-white rounded px-4 py-5"
        >
          <h1 className="text-xl text-center font-bold mb-4">Register</h1>
          <div className="mb-4">
            <label htmlFor="username" className="block text-white text-base">
              User Name
              <input
                type="text"
                name="username"
                value={FormData.username}
                onChange={changeHandle}
                className="border-b px-2 tracking-wider py-1 text-black caret-black 
                 outline-none w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="phonenumber" className="block text-white">
              Phone Number
              <input
                type="number"
                name="phonenumber"
                autoComplete="off"
                value={FormData.phonenumber}
                onChange={changeHandle}
                className="border-b px-2 py-1 text-black caret-black tracking-wide   outline-none w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-white">
              Email
              <input
                type="email"
                name="email"
                value={FormData.email}
                onChange={changeHandle}
                className="border-b px-2 py-1 text-black caret-black tracking-wide  outline-none w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-white">
              Password
              <input
                type={`${eye === true ? "text" : "password"}`}
                name="password"
                value={FormData.password}
                onChange={changeHandle}
                autoComplete="off"
                className="border-b px-2 py-1 text-black caret-black outline-none w-full"
              />
              <div onClick={() => seteye(!eye)} className={`absolute cursor-pointer ${eye === false ? "hidden" : "block"} right-8 text-black  bottom-[36%]`}>
                  <FaRegEye className="h-4 w-4" />
                </div>
                <div onClick={() => seteye(!eye)} className={`absolute  cursor-pointer ${eye === true ? "hidden" : "block"} right-8 text-black  bottom-[36%]`}>
                  <FaRegEyeSlash className="h-4 w-4" />
                </div>

            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="cmfmpass" className="block text-white">
              Confirm Password
              <input
                type="password"
                autoComplete="off"
                name="cmfmpass"
                value={FormData.cmfmpass}
                onChange={changeHandle}
                className="border-b px-2 py-1 text-black caret-black   outline-none w-full"
              />
            </label>
          </div>

          <div className="flex mx-4 justify-between items-center">
            <button
              type="reset"
              className="bg-orange-500 hover:bg-orange-600 shadow-lg drop-shadow-lg text-white focus:border-white border-white w-24 px-4 py-1 rounded-sm"
            >
              Clear
            </button>
            <button
              type="submit"
              className="bg-blue-500 shadow-lg drop-shadow-lg hover:bg-blue-600 w-24 text-white px-4 py-1 rounded-sm"
            >
              Register
            </button>
          </div>

          <NavLink to="/login">
            <p className="py-2 px-5 underline text-white hover:text-blue-700 w-fit">
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
