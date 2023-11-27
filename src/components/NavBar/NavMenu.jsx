import { useState } from "react";

const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="relative flex h-full items-center">
      {/* User Menu  */}
      <div
        className={`boxShadow shadow-userMenu-shadow my-[15px]  flex items-center  bg-white ${
          showMenu ? "rounded-t-[10px]" : "rounded-[10px]"
        } `}
        onClick={() => setShowMenu(!showMenu)}
      >
        <img
          src="/images/user.svg"
          alt=""
          className="my-[5px] ml-2 md:ml-[24px]"
        />
        <span className="mx-2 md:mx-5">Ben Cooper</span>
        <span>
          <img
            src="/icons/down.svg"
            alt="user"
            className={`mr-2 md:mr-6 ${showMenu ? "rotate-180" : "rotate-360"}`}
          />
        </span>
      </div>
      {/* Logout Button  */}
      <div
        className={`my-[15px] flex  w-full items-center justify-center rounded-b-[10px] border-gray-200  bg-white py-2 shadow-xl ${
          showMenu ? "absolute left-0 top-[43px]" : "hidden"
        }`}
      >
        <span className="mx-2 md:mx-5">Log Out</span>
        <img src="/icons/logout.svg" alt="" className="my-[5px] " />
      </div>
    </div>
  );
};

export default NavMenu;
