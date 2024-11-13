import { NavLink } from "react-router-dom";
import globle from '../../assets/globle.jpg'
import AdminButton from "./AdminButton";

const DashBoard = () => {
  const links = ["Home", "Overview", "Update", "TableForm"];


  const path = (link) => {
    switch (link) {
      case "Home":
        return "/admin"; 
      case "Overview":
        return "/admin/overview";
      case "Update":
        return "/admin/update";
      case "TableForm":
        return "/admin/form";
      default:
        return link.toLowerCase();
    }
  };

  return (
    <ul className="flex shadow-lg drop-shadow-lg select-none justify-between items-center text-sm px-14 py-2 border-b bg-orange-400">
      <li className="flex justify-center items-center gap-3">
        <img
          src={globle}
          className="h-12 w-12 rounded-full border border-black drop-shadow-lg shadow-lg"
          alt="User Logo image"
        />
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </li>
      <li>
        <ul className="flex justify-center items-center gap-3">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={path(link)}
                end={link === "Home"}
                className={({ isActive }) =>
                  isActive
                    ? "underline text-white"
                    : "text-black hover:underline"
                }
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
            to="/admin/panel"
            className={({ isActive }) =>
              isActive ? "underline text-white" : "text-black hover:underline"
            }
          >
            <li>Admin</li>
          </NavLink>
          <NavLink
            to="/admin/history"
            className={({ isActive }) =>
              isActive ? "underline text-white" : "text-black hover:underline"
            }
          >
            <li>History</li>
          </NavLink>
        </ul>

        <ul className="flex justify-center items-center gap-2">
          <li>
            <AdminButton name="Profile" />
          </li>
          <li>
            <AdminButton name="Watchlist" />
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default DashBoard;
