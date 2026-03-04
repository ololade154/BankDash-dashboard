import { HomePage } from "./homePage";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <SideBar />

      <div className="flex flex-col bg-amber-700 md:bg-[#f4f4f4] md:absolute md:right-0 md:h-screen md:w-[calc(100vw-260px)]">
        <NavBar />
        <div className="mt-35 md:mt-20 bg-red-500">
        {children}

        </div>
      </div>
    </div>
  );
};

export default Layout;
