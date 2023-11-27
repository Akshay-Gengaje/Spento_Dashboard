import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./layout/Dashboard/DashboardLayout";
import Attendence from "./pages/Admin/Attendence";
import Profile from "./pages/admin/profile/Profile.jsx";
import Dashboard from "./pages/Dashboard/Dashboard";

// import DashboardContainer from "./layout/Container/DashboardContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },

  {
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/profile",
        element: <Profile />,
      },
      {
        path: "/admin/attendence",
        element: <Attendence />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
