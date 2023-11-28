import Tab from "../../../components/Tabs/Tab";
import DashboardContainer from "../../../layout/Container/DashboardContainer";
import Employee from "./Employee";
import Reporting from "./Reporting";
import Role from "./Role";

const ManageProfile = () => {
  const tabsData = [
    { label: "Role", content: <Role /> },
    { label: "Reporting To", content: <Reporting /> },
    { label: "Employee", content: <Employee /> },
  ];
  return (
    <DashboardContainer title={"Manage Profile"} section={"Administrator"}>
      <Tab tabs={tabsData} />
    </DashboardContainer>
  );
};

export default ManageProfile;
