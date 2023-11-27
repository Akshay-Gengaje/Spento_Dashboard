import NavMenu from "./NavMenu";

const NavBar = ({ children }) => {
  return (
    <div className="h-[100vh] w-full ">
      <div className="flex h-16 max-w-full flex-1 flex-row-reverse items-center justify-between bg-darkBlue px-5 md:mx-5 md:mt-5 md:flex-row md:rounded-[10px] md:px-[50px] ">
        <img
          src="/icons/bell.svg"
          alt=""
          className="rounded-full bg-white p-1"
        />
        <NavMenu />
      </div>
      {children}
    </div>
  );
};

export default NavBar;
