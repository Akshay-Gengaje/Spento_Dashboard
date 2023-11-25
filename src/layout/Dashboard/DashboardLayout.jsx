import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <NavBar />
    </div>
  );
};

export default DashboardLayout;
