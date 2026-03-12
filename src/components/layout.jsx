import { Outlet } from 'react-router';
import { SideBar } from './SideBar';
import { NavBar } from './NavBar';

export const Layout = () => {
  return (
    <div className="relative">
      <SideBar />
      <div className="flex flex-col layout-color md:absolute md:right-0 m-h-screen w-full md:w-[calc(100vw-270px)]">
        <NavBar />
        <div className="mt-36 md:mt-20 md:py-7 md:px-8 px-6 py-6 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
