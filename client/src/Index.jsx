import { NavLink, Outlet, useLocation } from "react-router-dom";

const MainRouter = () => {
  const location = useLocation();

  const handleSetActivePath = (path) => {
    localStorage.setItem("activePath", path); 
  };

  const storedActivePath = localStorage.getItem("activePath") || location.pathname || 0;

  const isActive = (path) => {
    return storedActivePath === path;
  };

  return (
    <ul className="flex justify-around border-b border-black bg-black items-center">
      <li>
        <NavLink
          to="/admin"
          onClick={() => handleSetActivePath('/admin')} 
          className={`${
            isActive("/admin") ? "active text-yellow-500" : "bg-black text-white"
          }`}
        >
          Admin
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          onClick={() => handleSetActivePath('/')} 
          className={`${
            isActive("/") ? "active text-yellow-500" : "bg-black text-white"
          }`}
        >
          User
        </NavLink>
      </li>
    </ul>
  );
};

const Index = () => {
  return (
    <>
      <MainRouter />
      <Outlet />
    </>
  );
};

export default Index;
