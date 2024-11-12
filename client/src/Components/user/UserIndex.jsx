import { Outlet } from "react-router-dom";
import UserNavigation from "./UserNavigation";

const UserIndex = () => {
  return (
    <>
      <UserNavigation />
      <Outlet />
    </>
  );
};

export default UserIndex;
