import { Outlet } from "react-router-dom";
import DashBoard from "./DashBoard";
const AdminIndex = () => {
  return (
    <>
      <DashBoard />
      <Outlet />
    </>
  );
};

export default AdminIndex;
