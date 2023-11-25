import Devider from "./../../ui/Devider";
const Sidebar = () => {
  return (
    <div
      className=" my-6 ml-10 hidden h-[calc(100vh_-_48px)] w-72 rounded-[10px]  
    border border-[#3d3d3d66] md:block"
    >
      <div className="my-8 flex justify-around">
        <img src="images/logo.png" alt="logo" className="w-36" />
        <img
          src="icons/menu.svg"
          alt="menu"
          className="bg-darkBlue rounded-[10px] p-3"
        />
      </div>
      <Devider className="bg-darkBlue h-[1px] w-full" />
    </div>
  );
};

export default Sidebar;
