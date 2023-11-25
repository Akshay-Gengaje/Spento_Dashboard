const NavBar = () => {
  return (
    <div className="bg-darkBlue flex h-16 max-w-full flex-1 flex-row-reverse items-center justify-between px-5 md:mx-5 md:mt-6 md:flex-row md:rounded-[10px] md:px-[50px] ">
      <img src="/icons/bell.svg" alt="" className="rounded-full bg-white p-1" />
      <div className="boxShadow shadow-userMenu-shadow my-[15px]  flex items-center rounded-[10px] bg-white">
        <img
          src="/images/user.svg"
          alt=""
          className="my-[5px] ml-2 md:ml-[24px]"
        />
        <span className="mx-2 md:mx-5">Ben Cooper</span>
        <span>
          <img src="/icons/down.svg" alt="user" className="mr-2md:mr-6" />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
