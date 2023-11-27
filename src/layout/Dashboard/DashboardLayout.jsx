import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex max-h-screen w-full lg:gap-2">
      <Sidebar />
      <NavBar>
        <Outlet />
      </NavBar>
    </div>
  );
};

export default DashboardLayout;
