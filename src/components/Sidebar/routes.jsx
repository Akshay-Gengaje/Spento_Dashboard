import { RiAdminLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
export const routes = [
  {
    category: {
      name: "Dashboard",
      icon: <LuLayoutDashboard />,
    },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
      },
    ],
  },
  {
    category: {
      name: "Admin",
      icon: <RiAdminLine />,
    },
    children: [
      {
        path: "admin/profile",
        name: "Manage Profile",
      },
      {
        path: "admin/attendence",
        name: "Manage Attendence",
      },
      {
        path: "admin/territory",
        name: "Manage Admin Territory",
        children: [
          {
            path: "admin/territory/attribute",
            name: "Manage attribute",
          },
          {
            path: "admin/territory",
            name: "Manage Territory",
          },
        ],
      },
      {
        path: "admin/blood",
        name: "Manage Blood Group",
      },
      {
        path: "admin/driver",
        name: "Manage Driver",
      },
      {
        path: "admin/dealer",
        name: "Manage Dealer",
      },
      {
        path: "admin/gender",
        name: "Manage Gender",
      },
      {
        path: "admin/vehicle",
        name: "Manage Vehicle",
      },
    ],
  },
];

// import { RiAdminLine } from "react-icons/ri";
// import { LuLayoutDashboard } from "react-icons/lu";

// export const routes = [
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     icon: <LuLayoutDashboard />,
//   },
//   {
//     path: "/dashboard/admin/profile",
//     name: "Admin",
//     icon: <RiAdminLine />,
//     children: [
//       {
//         path: "profile",
//         name: "Manage Profile",
//       },
//       {
//         path: "attendence",
//         name: "Manage Attendance",
//       },
//       {
//         path: "territory",
//         name: "Manage Admin Territory",
//         children: [
//           {
//             path: "attribute",
//             name: "Manage Attribute",
//           },
//           {
//             path: "",
//             name: "Manage Territory",
//           },
//         ],
//       },
//       {
//         path: "blood",
//         name: "Manage Blood Group",
//       },
//       {
//         path: "driver",
//         name: "Manage Driver",
//       },
//       {
//         path: "dealer",
//         name: "Manage Dealer",
//       },
//       {
//         path: "gender",
//         name: "Manage Gender",
//       },
//       {
//         path: "vehicle",
//         name: "Manage Vehicle",
//       },
//     ],
//   },
// ];
