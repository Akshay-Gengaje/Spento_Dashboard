import { useState } from "react";
import SearchBar from "../SearchBar";
import Devider from "./../../ui/Devider";
import Menu from "./Menu";
import { routes } from "./routes";
import SubMenu from "./SubMenu";

const Sidebar = () => {
  const [expandedRoutes, setExpandedRoutes] = useState([]);

  const toggleSubRoutes = (routePath) => {
    setExpandedRoutes((prevExpandedRoutes) =>
      prevExpandedRoutes.includes(routePath)
        ? prevExpandedRoutes.filter((path) => path !== routePath)
        : [...prevExpandedRoutes, routePath],
    );
  };

  return (
    <div className="my-5 ml-10 hidden min-w-fit rounded-[10px] border border-[#3d3d3d66] lg:flex lg:flex-col">
      <div>
        <Menu />
        <Devider className="h-[1px] w-full bg-darkBlue" />
        <SearchBar
          placeholder="Search"
          backgroundColor="bright_gray"
          color="#000"
        />
      </div>
      <div className="w-full overflow-scroll">
        {routes.map((route) => (
          <div key={route.category.name}>
            <div
              onClick={() => toggleSubRoutes(route.category.name)}
              className={`flex w-full cursor-pointer items-center py-2 text-darkGray ${
                expandedRoutes.includes(route.category.name)
                  ? "bg-[#0672A3] text-white"
                  : ""
              }`}
              id="sidebar-menu"
            >
              <span className="ml-5 mr-3 text-[30px]">
                {route.category.icon}
              </span>
              <span className="text-lg uppercase">{route.category.name}</span>
            </div>
            {expandedRoutes.includes(route.category.name) && route.children && (
              <div className="pl-6">
                {route.children.map((subRoute) => (
                  <SubMenu key={subRoute.path} subRoute={subRoute} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
