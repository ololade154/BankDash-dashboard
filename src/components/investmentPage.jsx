import { IncomeIconThree } from "../Icons/incomeIconTwo";
import { PieIcon } from "../Icons/pieIcon";
import { RepeatIcon } from "../Icons/repeatIcon";
import { InvestmentChartOne, InvestmentChartTwo } from "./investmentChart";
import { InvestmentList } from "./investmentList";
import { StockTable } from "./stockTable";

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
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-8  ">
        {investmentIcon.map((item) => (
          <div
            key={item.id}
            className="bg-white md:py-6 py-6 px-5 md:rounded-3xl rounded-2xl flex item-start md:justify-center md:px-0 md:gap-x-4 gap-3 w-full "
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
      <div className="flex flex-col gap-y-6 mt-4 justify-between md:flex-row md:gap-x-8 md:items-center md:mt-6">
        <div className="min-w-0 md:flex-1">
          <div className="flex justify-between mb-4 md:mb-5 main-color font-semibold inter-font">
            <h1 className="text-[18px] ">Yearly Total Investment</h1>
          </div>
          <InvestmentChartOne />
        </div>
        <div className="min-w-0 md:flex-1 md:shrink-0">
          <div className="flex justify-between md:mb-5 mb-3 main-color font-semibold inter-font">
            <div>
              <h1 className="text-[18px] ">Monthly Revenue</h1>
            </div>
          </div>
          <InvestmentChartTwo />
        </div>
      </div>
      <div className="flex flex-col gap-y-6 mt-4 justify-between md:flex-row md:gap-x-8 md:items-center md:mt-6">
        <div className="min-w-0 md:flex-2">
          <div className="flex justify-between mb-4 md:mb-5 main-color font-semibold inter-font">
            <h1 className="text-[18px] ">My Investment</h1>
          </div>
          <InvestmentList />
        </div>
        <div className="min-w-0 md:flex-1 md:shrink-0">
          <div className="flex justify-between md:mb-5 mb-3 main-color font-semibold inter-font">
            <div>
              <h1 className="text-[18px] ">Trending Stock</h1>
            </div>
          </div>
          <StockTable />
        </div>
      </div>
    </div>
  );
};
