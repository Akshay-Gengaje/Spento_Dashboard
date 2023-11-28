import Header from "./Header";
import Options from "./Options";

const DashboardContainer = ({ title, section, children }) => {
  return (
    <div className="overflow-auto border-gray-400 mx-5 mt-5 h-[calc(100vh_-_135px)] max-w-full rounded-md border text-black">
      <Header title={title} section={section} />
      <Options />
      <div className="mx-10 max-w-full">{children}</div>
    </div>
  );
};

export default DashboardContainer;
