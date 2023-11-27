const SearchBar = ({ placeholder, backgroundColor, color }) => {
  const bgClassName = {
    bright_gray: "bg-[#E9F2F7]",
  }[backgroundColor];
  return (
    <div
      className={`shadow-search mx-5  my-4 flex max-h-fit max-w-full rounded-md ${bgClassName} pr-[10px] focus:ring-1 `}
    >
      <input
        type="text"
        className={`input-text h-fit w-full bg-transparent p-[10px] focus:outline-none`}
        placeholder={placeholder}
      />
      <img src="/icons/search.svg" alt="" className=" w-[24px] py-[12px] " />
    </div>
  );
};

export default SearchBar;
