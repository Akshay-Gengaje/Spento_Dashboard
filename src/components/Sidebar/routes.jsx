import { RiAdminLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
export const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <LuLayoutDashboard />,
  },
  {
    path: "/admin",
    name: "Admin",
    icon: <RiAdminLine />,
    subRoutes: [
      {
        path: "/profile",
        name: "Manage Profile",
      },
      {
        path: "/attendence",
        name: "Manage Attendence",
      },
      {
        path: "/territory",
        name: "Manage Admin Territory",
      },
      {
        path: "/blood",
        name: "Manage Blood Group",
      },
      {
        path: "/driver",
        name: "Manage Driver",
      },
      {
        path: "/dealer",
        name: "Manage Dealer",
      },
      {
        path: "/gender",
        name: "Manage Gender",
      },
      {
        path: "/vehicle",
        name: "Manage Vehicle",
      },
    ],
  },
];
