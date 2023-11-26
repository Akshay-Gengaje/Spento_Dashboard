import Header from "./Header";
import Options from "./Options";

const DashboardContainer = ({ title, section, children }) => {
  return (
    // <div className="border-darkGray h-[83%] max-w-full rounded-md border-[1px] px-5 md:mx-5 md:mt-6 md:flex-row md:rounded-[10px] md:px-[50px] ">
    //   <p>Dashboard Container</p>
    // </div>
    <div className="mx-5 mt-5 h-[calc(100vh_-_135px)] max-w-full rounded-md border border-gray-400 text-black">
      {/* <Header title={title} section={section} /> */}
      <Header title="Manage Profile" section="Administrator" />
      <Options />
      <div>{children}</div>
    </div>
  );
};

export default DashboardContainer;
