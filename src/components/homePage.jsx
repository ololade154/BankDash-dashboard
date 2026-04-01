import { CardSlider } from "./cardSlider";
import { Transaction } from "./transaction";
import { MyBarChart } from "./barChart";
import MyPieChart from "./pieChart";
import { BalanceChart } from "./balanceChart";
import { NavLink } from "react-router-dom";
export const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-6 md:flex-row justify-between md:gap-x-8 md:items-start">
        <div className="min-w-0 md:grow-0 md:basis-185">
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
          <CardSlider />
        </div>
        <div className=" min-w-0 md:basis-92.5 md:grow-0 md:shrink-0">
          <div className="md:mb-5 mb-4 main-color font-semibold inter-font text-[18px]">
            Recent Transaction
          </div>
          <Transaction />
        </div>
      </div>
      <div className="flex flex-col mt-4 justify-between md:flex-row md:gap-x-8 md:items-center md:mt-6">
        <div className="min-w-0 md:grow-0 md:basis-185">
          <div className="flex justify-between mb-4 md:mb-5 main-color font-semibold inter-font">
            <h1 className="text-[18px] ">Weekly Activity</h1>
          </div>
          <MyBarChart />
        </div>
        <div className="min-w-0 md:basis-92.5 md:grow-0 md:shrink-0">
          <div className="md:mb-5 mb-4 main-color font-semibold inter-font text-[18px]">
            Expense Statistics
          </div>
          <MyPieChart />
        </div>
      </div>
      <div className="flex flex-col mt-4  gap-y-4 md:flex-row md:gap-x-8 md:items-center md:mt-6">
        <div className="min-w-0 md:flex-1  ">
          <div className="flex justify-between mb-4 md:mb-5 main-color font-semibold inter-font h-250px ">
            <h1 className="text-[18px] ">Weekly Activity</h1>
          </div>
          <MyPieChart />
        </div>
        <div className="min-w-0 md:flex-2">
          <div className="md:mb-5 mb-4 main-color font-semibold inter-font text-[18px]">
            Expense Statistics
          </div>
          <BalanceChart />
        </div>
      </div>
    </div>
  );
};
