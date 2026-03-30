import { IncomeIconThree } from "../Icons/incomeIconTwo";
import { PieIcon } from "../Icons/pieIcon";
import { RepeatIcon } from "../Icons/repeatIcon";

export const InvestmentPage = () => {
  const investmentIcon = [
    {
      id: 1,
      icon: <IncomeIconThree />,
      bgColor: "#DCFAF8",
      header: "Total Invested Amount",
      value: "$150,000",
    },
    {
      id: 2,
      icon: <PieIcon />,
      bgColor: "#FFE0EB",
      header: "Number Of Investments",
      value: "120",
    },
    {
      id: 3,
      icon: <RepeatIcon />,
      bgColor: "#E7EDFF",
      header: "Rate Of Return",
      value: "+5.80%",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  ">
        {investmentIcon.map((item) => (
          <div
            key={item.id}
            className="bg-white md:py-6 py-6 px-5 md:rounded-3xl rounded-2xl flex item-start md:justify-center md:px-0 md:gap-x-4 gap-3 w-full max-w-full"
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full shrink-0 "
              style={{ backgroundColor: item.bgColor }}
            >
              {item.icon}
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <div className="text-[#718EBF] text-[16px] font-normal">
                {item.header}
              </div>
              <div className="text-[#232323] md:text-[19px] text-[18px] font-semibold">
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
