import { AppleIconTwo } from "../Icons/appleIcon";
import { GoogleIcon } from "../Icons/googleIcon";
import { TeslaIcon } from "../Icons/teslaIocn";

export const InvestmentList = () => {
  const investmentIcon = [
    {
      id: 1,
      icon: <AppleIconTwo />,
      bgColor: "#FFE0EB",
      name: "Apple Store",
      header: "E-commerce, Marketplace",
      value: "$54,000",
      return: "+16%",
      textColor: "#16DBAA",
      returnText: "Return Value",
      investmentText: "Investment Value",
    },
    {
      id: 2,
      icon: <GoogleIcon />,
      bgColor: "#E7EDFF",
      name: "Samsung Mobile",
      header: "E-commerce, Marketplace",
      value: "$25,300",
      return: "-4%",
      textColor: "#FE5C73",
      returnText: "Return Value",
      investmentText: "Investment Value",
    },
    {
      id: 3,
      icon: <TeslaIcon />,
      bgColor: "#FFF5D9",
      name: "Tesla Motors",
      header: "Eletric Vehicles",
      value: "$8,200",
      return: "+25%",
      textColor: "#16DBAA",
      returnText: "Return Value",
      investmentText: "Investment Value",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {investmentIcon.map((item) => (
        <div
          key={item.id}
          className="bg-white md:py-6 py-4 px-4 md:px-6 md:rounded-3xl rounded-2xl flex items-center w-full md:gap-x-4  "
        >
          {/* Div 1 — Icon + Text */}
          <div className="flex items-center gap-2 min-w-0 flex-auto md:flex-1">
            <div
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-2xl shrink-0"
              style={{ backgroundColor: item.bgColor }}
            >
              {item.icon}
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <div className="text-[#232323] text-[14px] md:text-[14px] font-semibold">
                {item.name}
              </div>
              <div className="text-[#718EBF] text-[10px] md:text-[11px] font-normal">
                {item.header}
              </div>
            </div>
          </div>

          {/* Div 2 — Hidden on mobile */}
          <div className="hidden md:flex md:flex-col flex-1 min-w-0 items-center ">
            <div className="text-[#232323] text-[14px] md:text-[14px] font-semibold">
              {item.value}
            </div>
            <div className="text-[#718EBF] text-[10px] md:text-[11px] font-normal">
              {item.investmentText}
            </div>
          </div>

          {/* Div 3 */}
          <div className="flex md:flex-col justify-end items-center flex-1 min-w-0">
            <div
              className="text-[14px] md:text-[14px] font-medium "
              style={{ color: item.textColor }}
            >
              {item.return}
            </div>
            <div className="hidden md:block text-[#718EBF] text-[10px] md:text-[11px] font-normal">
              {item.returnText}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
