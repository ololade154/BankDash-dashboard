import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavContent } from './NavContent';
import { NavImage } from './NavImage';

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const toggleIcon = () => {
    setOpen(!open);
  };
  return (
    <>
      {/* mobile nav */}
      <div className="bg-white h-35 fixed w-full z-10 flex flex-col py-4 px-6 gap-y-4 right-0 left-0 md:hidden">
        <div className="flex justify-between items-center border-2 border-amber-500">
          <div onClick={toggleIcon}>
            {open ? (
              <X color="#343C6A" height={36} width={36} strokeWidth={1.5} />
            ) : (
              <Menu color="#343C6A" height={36} width={36} strokeWidth={1.5} />
            )}
          </div>
          <div>
            <NavContent title="overView" />
          </div>
          <div>
            <NavImage src="/nav-image.svg" className="w-10 h-10" />
          </div>
        </div>
        <div className="border-2 border-blue-500">search bar</div>
      </div>
      {/* Desktop nav */}
      <div className=" hidden md:flex bg-green-200 w-[calc(100vw-260px)] h-20 fixed z-10 top-0 justify-between items-center py-6 px-12">
        <div className="bg-red-500">search bar</div>
        <div className="flex items-center gap-4">
          <NavContent title="OverView" />
          <NavImage src="/nav-image.svg" className="w-15 h-15" />
        </div>
      </div>
    </>
  );
};
