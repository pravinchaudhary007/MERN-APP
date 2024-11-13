/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const Button = ({ name }) => {
  return (
    <NavLink
      to={`/${name.toLowerCase()}`}
      className={({ isActive }) =>
        isActive ? "bg-white  px-3 py-1 rounded-sm" : "bg-black text-white px-3 py-1 rounded-sm"
      }
    >
      {name}
    </NavLink>
  );
}

export default Button;


