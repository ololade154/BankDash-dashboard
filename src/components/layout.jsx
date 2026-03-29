import { Outlet } from "react-router";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";

export const Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col layout-color min-h-screen w-full md:ml-67.5 md:w-[calc(100%-270px)]">
        <NavBar />
        <div className="mt-36 md:mt-20 md:py-7 md:px-8 px-6 py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
