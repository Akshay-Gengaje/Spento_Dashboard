import SearchBar from "../SearchBar";
import Devider from "./../../ui/Devider";
import Menu from "./Menu";
import { routes } from "./routes";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className=" my-6 ml-10 hidden h-[calc(100vh_-_48px)] w-96 rounded-[10px]  
    border border-[#3d3d3d66] md:block"
    >
      <Menu />
      <Devider className="h-[1px] w-full bg-darkBlue" />
      <SearchBar
        placeholder="Search"
        backgroundColor="bright_gray"
        color="#000"
      />
      <div className="w-full ">
        {routes.map((route) => (
          <NavLink
            to={route.path}
            key={route.name}
            className="text-darkGray flex w-full items-center  py-2 active:bg-darkBlue active:text-white"
          >
            <span className=" ml-5 mr-3 text-[30px] ">{route.icon}</span>
            <span className="text-lg  uppercase"> {route.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
