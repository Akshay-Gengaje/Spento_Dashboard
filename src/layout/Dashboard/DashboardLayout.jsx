import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardContainer from "../Container/DashboardContainer";

const DashboardLayout = () => {
  return (
    <div className="flex max-h-screen w-full lg:gap-2">
      <Sidebar />
      <NavBar>
        <DashboardContainer />
      </NavBar>
    </div>
  );
};

export default DashboardLayout;
