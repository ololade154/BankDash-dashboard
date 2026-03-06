import { useState } from 'react';
import { NavLink } from 'react-router';
import { House } from '../Icons/House';
import { TransactionIcon } from '../Icons/transactioIcon';
import { UserIcon } from '../Icons/userIcon';
import { InvestmentIcon } from '../Icons/investmentIcon';
import { CreditIcon } from '../Icons/creditIcon';
import { LoanIcon } from '../Icons/loanIcon';
import { ServiceIcon } from '../Icons/serviceIcon';
import { SettingsIcon } from '../Icons/settingsIcon';
import { PriviledgeIcon } from '../Icons/priviledgeIcon';

export const SideBar = () => {
  const [active, setActive] = useState('Dashboard');

  const features = [
    { name: 'Dashboard', icon: <House />, path: '/' },
    { name: 'Transaction', icon: <TransactionIcon />, path: '/details' },
    { name: 'Accounts', icon: <UserIcon />, path: '/accounts' },
    { name: 'Investments', icon: <InvestmentIcon />, path: '/investments' },
    { name: 'Credit Card', icon: <CreditIcon />, path: '/credit-card' },
    { name: 'Loans', icon: <LoanIcon />, path: '/loans' },
    { name: 'Services', icon: <ServiceIcon />, path: '/services' },
    { name: 'My Priviledges', icon: <PriviledgeIcon />, path: '/priviledges' },
    { name: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  return (
    <div className="hidden md:flex flex-col gap-y-10  bg-white md:fixed md:w-60 md:left-0 md:h-screen md:py-6 md:px-8">
      {/* Logo */}
      <div>
        <img src="src/Images/Logo.svg" alt="logo" className="w-50" />
      </div>

      {/* Features */}
      <div className="flex flex-col gap-y-6 ">
        {features.map((feature) => (
          <NavLink
            key={feature.name}
            to={feature.path}
            onClick={() => setActive(feature.name)}
            className="relative flex items-center inter-font cursor-pointer"
          >
            {/* feature line */}
            <div
              className={`absolute -left-8 top-0 bottom-0 w-1 rounded-r
                ${active === feature.name ? 'active-bg-color' : 'bg-transparent'}`}
            ></div>

            <div
              className={`flex gap-x-6 items-center 
                ${active === feature.name ? 'active-color' : 'icon-color'}
                `}
            >
              {feature.icon}
              <span className="text-[18px] font-medium">{feature.name}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
