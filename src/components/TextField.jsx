//eslint-disable-next-line
const TextField = ({ placeholder, icon, iconStyle, marginTop, type }) => {
  return (
    <div
      className={`flex h-10 w-fit overflow-clip rounded-md border border-[#3d3d3d4d] md:w-full ${marginTop}`}
    >
      <input
        placeholder={placeholder}
        type={type}
        className="font-Mitr flex-1 overflow-hidden px-5 py-4 outline-none "
      />

      <img
        src={icon}
        alt="icon"
        className={`${iconStyle} bg-white text-center`}
        onClick={() => {}}
      />
    </div>
  );
};

export default TextField;
