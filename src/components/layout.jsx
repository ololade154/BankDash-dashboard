import { Outlet } from 'react-router';
import { SideBar } from './SideBar';
import { NavBar } from './NavBar';

export const Layout = () => {
  return (
    <div className="relative">
      <SideBar />
      <div className="flex flex-col layout-color md:absolute md:right-0 h-screen md:w-[calc(100vw-240px)]">
        <NavBar />
        <div className="mt-35 md:mt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
