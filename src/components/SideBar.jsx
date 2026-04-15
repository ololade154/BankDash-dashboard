import { NavLink } from "react-router";
import { House } from "../Icons/House";
import { TransactionIcon } from "../Icons/transactioIcon";
import { UserIcon } from "../Icons/userIcon";
import { InvestmentIcon } from "../Icons/investmentIcon";
import { CreditIcon } from "../Icons/creditIcon";
import { LoanIcon } from "../Icons/loanIcon";
import { ServiceIcon } from "../Icons/serviceIcon";
import { SettingsIcon } from "../Icons/settingsIcon";

export const SideBar = () => {
  const features = [
    { name: "Dashboard", icon: <House />, path: "/dashboard" },
    { name: "Transaction", icon: <TransactionIcon />, path: "/transactions" },
    { name: "Accounts", icon: <UserIcon />, path: "/accounts" },
    { name: "Investments", icon: <InvestmentIcon />, path: "/investments" },
    { name: "Credit Card", icon: <CreditIcon />, path: "/credit-card" },
    { name: "Loans", icon: <LoanIcon />, path: "/loans" },
    { name: "Services", icon: <ServiceIcon />, path: "/services" },
    { name: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];
  return (
    <div className="hidden md:flex flex-col gap-y-10 bg-white md:fixed md:w-67.5 md:left-0 md:h-screen md:py-6 border-r border-[#E6EFF5]">
      {/* Logo */}
      <div className="px-8">
        <img src="/Logo.svg" alt="logo" className="md:max-w-full" />
      </div>

      {/* Features */}
      <div className="flex flex-col gap-y-8">
        {features.map((feature) => (
          <NavLink
            key={feature.name}
            to={feature.path}
            end={feature.path === "/dashboard"} // ← fixes Dashboard always-active bug too
            className={({ isActive }) =>
              `relative flex items-center px-8 inter-font cursor-pointer ${
                isActive ? "active-color" : "icon-color"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {/* active line */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-r ${
                    isActive ? "active-bg-color" : "bg-transparent"
                  }`}
                ></div>

                <div className="flex gap-x-6 items-center">
                  {feature.icon}
                  <span className="text-[15px] font-medium">
                    {feature.name}
                  </span>
                </div>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
