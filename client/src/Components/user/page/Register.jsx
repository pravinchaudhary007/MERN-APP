import { NavLink } from "react-router-dom";
import image from "../../../assets/square.jpg";
import axios from "axios"

const Register = () => {

    
  const HendlerRegister = async () =>{
    const server = await axios() 
  }


  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className="min-h-screen bg-cover  bg-center bg-no-repeat  w-full  flex justify-center items-center"
    >
      <div className="h-auto w-[30%]">
        <form className="border grid text-white font-medium backdrop-blur-sm  bg-transparent border-black rounded px-4 py-5">
          <h1 className="text-xl text-center font-bold mb-4">Register</h1>
          <div className="mb-4 ">
            <label htmlFor="username" className="block text-base ">
              User Name
            </label>
            <input
              type="text"
              name="username"
              className="border-b px-2 tracking-wider py-1 active:border-b bg-transparent focus:border-white  outline-none w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block ">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="border-b px-2 py-1 tracking-wide active:border-b bg-transparent border-white focus:border-white  outline-none w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="border-b px-2 py-1 active:border-b bg-transparent  border-white focus:border-white  outline-none w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cmfmpass" className="block ">
              Confirm Password
            </label>
            <input
              type="password"
              name="cmfmpass"
              className="border-b px-2 py-1 active:border-b bg-transparent border-white  focus:border-white  outline-none w-full"
              required
            />
          </div>

          <div className="flex mx-4 justify-between items-center">
            <button
              type="reset"
              className="bg-orange-500 shadow-lg drop-shadow-lg focus:border-white border-white  w-24 px-4 py-1  rounded-sm"
            >
              Clear
            </button>
           <NavLink to={'/login'}> <button
              type="submit" 
              className="bg-blue-500 shadow-lg drop-shadow-lg hover:bg-blue-700 w-24 text-white px-4 py-1 rounded-sm"
            >
              Register
            </button></NavLink>
          </div>

          <NavLink to={"/login"}>
            {" "}
            <p className="py-2 underline hover:text-blue-700 w-fit">
              Login Now ?
            </p>
          </NavLink>
        </form>
      </div>
    </section>
  );
};

export default Register;
