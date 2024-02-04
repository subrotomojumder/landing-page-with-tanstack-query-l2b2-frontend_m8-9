import App from "@/App";
import AddService from "@/components/admin/AddService";
import Dashboard from "@/components/admin/Dashboard";
import ServiceList from "@/components/admin/ServiceList";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About";
import Home from "@/pages/home";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/admin/dashboard"} />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "service-list",
        element: <ServiceList />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
    ],
  },
]);

export default router;
