/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [Login, setLogin] = useState({
    userid: "",
    loginpass: "",
  });

  const hendlelogin = async (e) => {
    e.preventDefault();
    try {
      const logindata = await axios.post("http://localhost:5000/login", Login);
      if (logindata.data) {
        toast.success(logindata.data)
      }
    } catch (error) {
      toast.error(error.response?.data || "Login failed!");
    }
  };

  const submithendle = (e) => {
    const { name, value } = e.target;
    setLogin({ ...Login, [name]: value });
  };

  return (
    <UserContext.Provider value={{ hendlelogin, submithendle }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
