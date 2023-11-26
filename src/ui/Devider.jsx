const Devider = ({ className, backgroundColor, width, height }) => {
  const bgClassName = {
    dark_gray: "bg-[#3d3d3d4d]",
    bright_gray: "bg-[#E9F2F7]",
    dark_blue: "bg-[#01A0E4] ",
  }[backgroundColor];
  return (
    <div
      className={`rounded-[0.75rem] ${bgClassName} ${className} w-[${width}] h-[${height}]`}
    ></div>
  );
};

export default Devider;
