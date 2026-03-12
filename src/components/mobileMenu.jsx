import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { House } from '../Icons/House.jsx';
import { TransactionIcon } from '../Icons/transactioIcon.jsx';
import { UserIcon } from '../Icons/userIcon.jsx';
import { InvestmentIcon } from '../Icons/investmentIcon.jsx';
import { CreditIcon } from '../Icons/creditIcon.jsx';
import { LoanIcon } from '../Icons/loanIcon.jsx';
import { ServiceIcon } from '../Icons/serviceIcon.jsx';
import { SettingsIcon } from '../Icons/settingsIcon.jsx';
import { PriviledgeIcon } from '../Icons/priviledgeIcon.jsx';
import { X } from 'lucide-react';

export const MobileMenu = ({ toggle, setToggle }) => {
  const [active, setActive] = useState('Dashboard');
  const features = [
    { name: 'Dashboard', icon: <House />, path: '/' },
    { name: 'Transaction', icon: <TransactionIcon />, path: '/transactions' },
    { name: 'Accounts', icon: <UserIcon />, path: '/accounts' },
    { name: 'Investments', icon: <InvestmentIcon />, path: '/investments' },
    { name: 'Credit Card', icon: <CreditIcon />, path: '/credit-card' },
    { name: 'Loans', icon: <LoanIcon />, path: '/loans' },
    { name: 'Services', icon: <ServiceIcon />, path: '/services' },
    { name: 'My Priviledges', icon: <PriviledgeIcon />, path: '/priviledges' },
    { name: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  return (
    <div
      className={`md:hidden flex flex-col gap-y-6 bg-white w-52 h-screen p-4 fixed top-0 left-0 z-20 transition-transform duration-300
      ${toggle ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {/* Close Icon */}
      <div className="flex justify-end ">
        <button onClick={() => setToggle(false)}>
          <X size={36} color="#b1b1b1" />
        </button>
      </div>

      {/* Logo */}
      <div className="mb-2">
        <img src="/Logo.svg" alt="logo" className="w-40 mx-auto" />
      </div>

      {/* Features */}
      <div className="flex flex-col gap-y-4">
        {features.map((feature) => (
          <NavLink
            key={feature.name}
            to={feature.path}
            onClick={() => {
              setActive(feature.name);
              setToggle(false);
            }}
            className="relative flex items-center gap-x-4 px-3 py-2 rounded-md hover:bg-gray-100"
          >
            {/* Active line indicator */}
            <div
              className={`absolute -left-0.5 top-0 bottom-0 w-1 rounded-r
                ${active === feature.name ? 'active-bg-color' : 'bg-transparent'}`}
            ></div>

            <div
              className={`flex items-center gap-x-4 ${active === feature.name ? 'active-color' : 'icon-color'}`}
            >
              {feature.icon}
              <span className="text-[16px] font-medium">{feature.name}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
