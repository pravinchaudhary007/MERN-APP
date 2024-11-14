import { useEffect, useState } from "react";
import axios from "axios";
const Form = () => {
  const [activeForm, setActiveForm] = useState("login");
  const [registered, setRegistred] = useState([]);
  const [login, setLogin] = useState([]);
  const [logError, setLogError] = useState("");
  const [regError, setRegError] = useState("");
  useEffect(() => {
    const RegUser = async () => {
      try {
        const UserRegister = await axios.get(
          "http://localhost:5000/allregistreduser"
        );
        setRegistred(UserRegister.data);
      } catch (error) {
        setRegError(error.response?.data);
      }
      try {
        const Userlogin = await axios.get("http://localhost:5000/allloginuser");
        setLogin(Userlogin.data);
      } catch (error) {
        setLogError(error.response?.data);
      }
    };
    RegUser();
  }, []);

  const handleTabClick = (formType) => {
    setActiveForm(formType);
  };

  const LoginForm = () => (
    <section className=" h-screen p-6 w-full">
      <table className="border-separate border-2 border-black rounded w-full bg-white">
        <thead>
          <tr className="border-2 border-black">
            <th className="border border-black  px-4 py-2 w-1/3">No.</th>
            <th className="border border-black  px-4 py-2 w-1/3">User ID</th>
            <th className="border border-black  px-4 py-2 w-1/3">User Name</th>
            <th className="border border-black  px-4 py-2 w-1/3">
              User Password
            </th>
            <th className="border border-black  px-4 py-2 w-1/3">Login Time</th>
          </tr>
        </thead>
        <tbody className="text-center ">
        {[...login].reverse().map((user, index) => (
            <tr className="border-black border-2" key={index}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{user._id}</td>
              <td className="border px-4 py-2">{user.userid}</td>
              <td className="border px-4 py-2">{user.loginpass}</td>
              <td className="border px-4 py-2">
                {new Date(user.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {logError && <p className="text-red-500  pt-48 text-xl text-center">{logError}</p>}
    </section>
  );

  const RegisterForm = () => (
    <section className="h-screen p-6 w-full">
      <table className="border-separate border-2 rounded border-black w-full bg-white">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">No.</th>
            <th className="border border-black px-4 py-2">User Name</th>
            <th className="border border-black px-4 py-2">Phone Number</th>
            <th className="border border-black px-4 py-2">Email</th>
            <th className="border border-black px-4 py-2">Password</th>
            <th className="border border-black px-4 py-2">Registered Time</th>
          </tr>
        </thead>

        <tbody className="text-center w-fit  border-black border">
          {[...registered].reverse().map((user, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.phonenumber}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border w-20 py-2">{user.password}</td>
              <td className="border px-4 py-2">
                {new Date(user.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {regError && (
        <p className="text-red-500 pt-48 text-xl text-center">{regError}</p>
      )}
    </section>
  );

  const Part = () => (
    <ul className="flex justify-around items-center text-white bg-black">
      <li
        className={`cursor-pointer ${
          activeForm === "login" ? "text-orange-500" : ""
        }`}
        onClick={() => handleTabClick("login")}
      >
        Login
      </li>
      <li
        className={`cursor-pointer ${
          activeForm === "register" ? "text-orange-500" : ""
        }`}
        onClick={() => handleTabClick("register")}
      >
        Register
      </li>
    </ul>
  );

  return (
    <main className="overflow-hidden  overflow-y-scroll">
      <Part />
      {activeForm === "login" ? (
        <h2 className="text-center py-2 text-xl font-semibold">Login Form</h2>
      ) : (
        <h2 className="text-center py-2 text-xl font-semibold">
          Register Form
        </h2>
      )}
      {activeForm === "login" ? <LoginForm /> : <RegisterForm />}
    </main>
  );
};

export default Form;
