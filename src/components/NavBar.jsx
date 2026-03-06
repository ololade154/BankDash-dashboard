import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavImage } from './NavImage';
import { useLocation } from 'react-router';
import { SearchBar } from './searchBar';

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const toggleIcon = () => setOpen(!open);

  const location = useLocation();

  // Map routes to titles
  const routeTitles = {
    '/': 'OverView',
    '/details': 'Details',
    '/login': 'Login',
  };

  const title = routeTitles[location.pathname] || 'OverView';

  return (
    <>
      {/* Mobile nav */}
      <div className="bg-white h-35 fixed w-full z-10 flex flex-col py-4 px-6 gap-y-4 right-0 left-0 md:hidden">
        <div className="flex justify-between items-center border-2 border-amber-500">
          <div onClick={toggleIcon}>
            {open ? (
              <X color="#343C6A" height={36} width={36} strokeWidth={1.5} />
            ) : (
              <Menu color="#343C6A" height={36} width={36} strokeWidth={1.5} />
            )}
          </div>
          <div>{title}</div>
          <div>
            <NavImage src="/nav-image.svg" className="w-10 h-10" />
          </div>
        </div>
        <div className="border-2 border-blue-500">search bar</div>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex bg-white w-[calc(100vw-240px)] h-20 fixed z-10 top-0 justify-between items-center py-6 px-12">
        <h1 className="font-semibold text-[25px] inter-font nav-font-color">
          {title}
        </h1>
        <div className="flex items-center gap-x-10">
          <SearchBar />
          <div className="flex items-center gap-6">
            <NavImage src="/nav-image.svg" className="w-18 h-18" />
            <NavImage src="/nav-image.svg" className="w-18 h-18" />
            <NavImage src="/nav-image.svg" className="w-25 h-25" />
          </div>
        </div>
      </div>
    </>
  );
};
