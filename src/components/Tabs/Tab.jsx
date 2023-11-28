import { useState } from "react";
import TabMenu from "./TabMenu";
// Tab Component
const Tab = ({ label, isActive, onClick }) => (
  <div
    className={`hover:bg-gray-200 cursor-pointer px-2 py-2 md:px-10 ${
      isActive ? "border-b-2 border-darkBlue" : ""
    }`}
    onClick={onClick}
  >
    {label}
  </div>
);

// TabContent Component
const TabContent = ({ content }) => <div className="p-4">{content}</div>;

// Tabs Component
const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="mx-auto my-3 max-w-full rounded-md bg-brightGray ">
        <div className="flex justify-around border-b border-gray pt-2">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              isActive={index === activeTab}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
        <TabMenu tab={activeTab} />
      </div>
      <TabContent content={tabs[activeTab].content} />
    </>
  );
};

export default Tabs;
