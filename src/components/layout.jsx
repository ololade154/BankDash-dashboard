// import { SideBar } from './SideBar';
// import { NavBar } from './NavBar';
//
// const Layout = ({ children }) => {
//   return (
//     <div className="relative">
//       <SideBar />
//       <div className="flex flex-col bg-red-500 md:absolute md:right-0 h-screen md:w-[calc(100vw-260px)]">
//         <NavBar />
//         <div className="mt-35 md:mt-20 bg-yellow-200">{children}</div>
//       </div>
//     </div>
//   );
// };
//
// export default Layout;
import { Outlet } from 'react-router';
import { SideBar } from './SideBar';
import { NavBar } from './NavBar';

export const Layout = () => {
  return (
    <div className="relative">
      <SideBar />
      <div className="flex flex-col bg-red-500 md:absolute md:right-0 h-screen md:w-[calc(100vw-260px)]">
        <NavBar />
        <div className="mt-35 md:mt-20 bg-yellow-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
