const SearchBar = ({ placeholder, className }) => {
  return (
    <div className={`${className} `}>
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
