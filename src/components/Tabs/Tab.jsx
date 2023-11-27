import { useState } from "react";

// Tab Component
const Tab = ({ label, isActive, onClick }) => (
  <div
    className={`cursor-pointer px-10 py-2 hover:bg-gray-200 ${
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
    <div className="bg-brightGray mx-auto my-8 max-w-full rounded-md ">
      <div className="border-gray flex justify-around border-b pt-2">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            isActive={index === activeTab}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <TabContent content={tabs[activeTab].content} />
    </div>
  );
};

export default Tabs;
