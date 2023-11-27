import Tab from "../../../components/Tabs/Tab";
import DashboardContainer from "../../../layout/Container/DashboardContainer";

const ManageProfile = () => {
  const tabsData = [
    { label: "Role", content: "Content for Tab 1" },
    { label: "Reporting To", content: "Content for Tab 2" },
    { label: "Employee", content: "Content for Tab 3" },
  ];
  return (
    <DashboardContainer title={"Manage Profile"} section={"Administrator"}>
      <Tab tabs={tabsData} />
    </DashboardContainer>
  );
};

export default ManageProfile;
