import { Menu } from 'lucide-react';
import { useState } from 'react';
import { NavImage } from './NavImage';
import { useLocation } from 'react-router';
import { SearchBar } from './searchBar';
import { SettingIcon } from '../Icons/settingIcon';
import { NotificationIcon } from '../Icons/notificationIcon';
import { MobileMenu } from './mobileMenu';

export const NavBar = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

  const routeTitles = {
    '/': 'Overview',
    '/transactions': 'Transactions',
    '/accounts': 'Accounts',
    '/investments': 'Investments',
    '/credit-card': 'Credit Cards',
    '/login': 'Login',
  };

  const title = routeTitles[location.pathname] || 'OverView';

  return (
    <>
      {/* Mobile Navbar */}
      <div className="bg-white h-36 fixed w-full z-10 flex flex-col py-4 px-6 gap-y-4 right-0 left-0 md:hidden">
        <div className="flex justify-between items-center ">
          <button onClick={() => setToggle(!toggle)}>
            <Menu color="#343C6A" height={36} width={36} strokeWidth={1.5} />
          </button>
          <div>{title}</div>
          <NavImage src="/nav-image.svg" className="w-12 h-12" />
        </div>
        <SearchBar />
        <MobileMenu toggle={toggle} setToggle={setToggle} />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex bg-white w-[calc(100vw-240px)] h-20 fixed z-10 top-0 justify-between items-center py-6 px-12 border-b border-[#E6EFF5]">
        <h1 className="font-semibold text-[25px] inter-font nav-font-color">
          {title}
        </h1>
        <div className="flex items-center gap-x-4">
          <SearchBar />
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 setting-bg rounded-full flex items-center justify-center shrink-0">
              <SettingIcon />
            </div>
            <div className="w-10 h-10 setting-bg rounded-full flex items-center justify-center shrink-0">
              <NotificationIcon />
            </div>

            <NavImage
              src="/nav-image.svg"
              className="w-38 h-38 flex items-center justify-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};
