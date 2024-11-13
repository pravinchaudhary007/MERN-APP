import { NavLink } from "react-router-dom";
import globle from '../../assets/globle.jpg'
import Button from "./Button";


const UserNavigation = () => {

  const Links = ["Home", "Product", "About", "Contact"];

  const path = (link) => {
    if (link === 'Home') return '/'; 
    return link.toLowerCase(); 
  };

  return (
    <>
      <ul className="flex shadow-lg drop-shadow-lg select-none justify-between items-center  px-14 py-2 border-b  bg-orange-400">
        <li className="flex justify-center items-center gap-3">
          <img  src={globle} className="h-12 w-12 rounded-full border border-black drop-shadow-lg shadow-lg" alt="User Logo image"/>
          <h1 className="text-2xl font-bold ">UserName</h1>
        </li>
        <li>
          <ul className="flex  justify-center items-center text-sm gap-3">
            {Links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={path(link)} 
                  className={({ isActive }) => (isActive ? "underline  text-white" : "text-black hover:underline")}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li className="flex justify-center items-center gap-20">
          <ul className="flex justify-center items-center text-sm cursor-pointer gap-4">
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "underline text-white" : "text-black hover:underline")}
            >
              <li>Cart</li>
            </NavLink>
            <NavLink
              to="/history"
              className={({ isActive }) => (isActive ? "underline text-white" : "text-black hover:underline")}
            >
              <li>History</li>
            </NavLink>
          </ul>
          <ul className="flex justify-center items-center gap-2">
            <li>
              <Button name={"Login"} />
            </li>
            <li>
              <Button name={"Register"} />
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default UserNavigation;
