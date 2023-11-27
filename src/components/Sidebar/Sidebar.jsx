import SearchBar from "../SearchBar";
import Devider from "./../../ui/Devider";
import Menu from "./Menu";
import { routes } from "./routes";
import { NavLink } from "react-router-dom";
import SubMenu from "./SubMenu";
import React from "react";
// max-h-[calc(100vh_-_48px)]
const Sidebar = () => {
  return (
    <div className="my-5 ml-10 hidden min-w-fit rounded-[10px] border border-[#3d3d3d66] lg:flex lg:flex-col ">
      <div>
        <Menu />
        <Devider className="h-[1px] w-full bg-darkBlue" />
        <SearchBar
          placeholder="Search"
          backgroundColor="bright_gray"
          color="#000"
        />
      </div>
      <div className=" w-full overflow-scroll">
        {routes.map((route) => (
          <div key={route.name}>
            <NavLink
              activeClassName="active"
              to={route.path}
              className="flex w-full items-center py-2 text-darkGray"
              id="sidebar-menu"
            >
              <span className=" ml-5 mr-3 text-[30px]">{route.icon}</span>
              <span className="text-lg uppercase">{route.name}</span>
            </NavLink>
            {route.children &&
              route.children.map((subRoute) => {
                if (subRoute.children) {
                  return (
                    <React.Fragment key={subRoute.name}>
                      <SubMenu subRoute={subRoute} key={subRoute.name} />
                      {subRoute.children &&
                        subRoute.children.map((child) => {
                          return (
                            <div className="pl-6" key={child.name}>
                              <SubMenu subRoute={child} key={child.name} />
                            </div>
                          );
                        })}
                    </React.Fragment>
                  );
                }
                return <SubMenu subRoute={subRoute} key={subRoute.name} />;
              })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
