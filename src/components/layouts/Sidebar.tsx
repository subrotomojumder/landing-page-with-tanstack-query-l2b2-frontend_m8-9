import { NavLink } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  return (
    <aside className="col-span-2 bg-light-gray h-screen sticky top-0 left-0 overflow-auto p-5">
      <nav className="flex flex-col gap-y-2">
        <NavLink
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all flex items-center gap-x-2",
              {
                " bg-dark-gray text-white ": isActive,
              }
            )
          }
          to={"/admin/dashboard"}
        >
          <LayoutDashboard className="shrink-0" />
          <span className=" whitespace-nowrap truncate">Dashboard</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all flex items-center gap-x-2",
              {
                " bg-dark-gray text-white ": isActive,
              }
            )
          }
          to={"/admin/add-service"}
        >
          <LayoutDashboard className="shrink-0" />
          <span className=" whitespace-nowrap truncate">Add Service</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all flex items-center gap-x-2",
              {
                " bg-dark-gray text-white ": isActive,
              }
            )
          }
          to={"/admin/service-list"}
        >
          <LayoutDashboard className="shrink-0" />
          <span className=" whitespace-nowrap truncate">Service List</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
