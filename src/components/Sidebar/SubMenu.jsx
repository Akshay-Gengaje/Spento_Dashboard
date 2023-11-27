import { NavLink } from "react-router-dom";

const SubMenu = ({ subRoute }) => {
  return (
    <div>
      <NavLink
        activeClassName="active"
        to={subRoute.path}
        className="ml-9 flex w-fit items-center space-x-2 py-2 text-darkGray"
      >
        <span className="block rounded-sm border border-darkBlue p-[0.2rem]">
          <span className="block p-[0.4rem]" id="checkbox"></span>
        </span>
        <span className=" text-lg uppercase" id='nav'>{subRoute.name}</span>
      </NavLink>
    </div>
  );
};

export default SubMenu;
