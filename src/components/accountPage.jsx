import { BalanceIcon } from "../Icons/balanceIcon";
import { IncomeIconTwo } from "../Icons/incomeIconTwo";
import { ExpenseTwoIcon } from "../Icons/expenseTwoIcon";
import { TotalIcon } from "../Icons/totalIcon";
import { CardSlider } from "./cardSlider";
import { cards } from "./cardData";
import { NavLink } from "react-router";
import { LastTransaction } from "./lastTransaction";

export const AccountPage = () => {
  const accountIcon = [
    {
      id: 1,
      icon: <BalanceIcon />,
      bgColor: "#FFF5D9",
      header: "My Balance",
      price: "$12,750",
    },
    {
      id: 2,
      icon: <IncomeIconTwo />,
      bgColor: " #E7EDFF",
      header: "Income",
      price: "$5,600",
    },
    {
      id: 3,
      icon: <ExpenseTwoIcon />,
      bgColor: " #FFE0EB",
      header: "Expense",
      price: "$3,640",
    },
    {
      id: 4,
      icon: <TotalIcon />,
      bgColor: "#DCFAF8",
      header: "Total Saving",
      price: "$7,920",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6  ">
        {accountIcon.map((item) => (
          <div
            key={item.id}
            className="bg-white md:py-6 py-4 md:rounded-3xl rounded-2xl flex items-center justify-center md:gap-x-4 gap-x-2"
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full "
              style={{ backgroundColor: item.bgColor }}
            >
              {item.icon}
            </div>
            <div>
              <div className="text-[#718EBF] text-[16px] font-normal">
                {" "}
                {item.header}
              </div>
              <div className="text-[#232323] md:text-[19px] text-[18px] font-semibold">
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-6 mt-4 justify-between md:flex-row md:gap-x-8 md:items-center md:mt-6">
        <div className="min-w-0 md:flex-2">
          <div className="flex justify-between mb-4 md:mb-5 main-color font-semibold inter-font">
            <h1 className="text-[18px] ">Last Transactions</h1>
          </div>
          <LastTransaction />
        </div>
        <div className="min-w-0 md:flex-1 md:shrink-0">
          <div className="flex justify-between md:mb-5 mb-3 main-color font-semibold inter-font">
            <div>
              <h1 className="text-[18px] ">My Cards</h1>
            </div>
            <div>
              <NavLink to="/credit-card" className="text-[15px]">
                See All
              </NavLink>
            </div>
          </div>
          <CardSlider desktopSlides={1} cardsToShow={[cards[2]]} />
        </div>
      </div>
    </div>
  );
};
