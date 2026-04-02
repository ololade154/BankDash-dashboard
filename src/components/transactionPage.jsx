import { CardSlider } from "./cardSlider";
import { ExpenseChart } from "./expenseChart";
import { Table } from "./table";
import { NavLink } from "react-router-dom";

export const TransactionPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-8 md:items-start justify-between">
        <div className="min-w-0 md:basis-185 md:grow-0 ">
          <div className="flex justify-between md:mb-5 mb-3 main-color font-semibold inter-font">
            <div>
              <h1 className="text-[18px] ">My Cards</h1>
            </div>
            <div>
              <NavLink to="/credit-card" className="text-[18px]">
                + Add Card
              </NavLink>
            </div>
          </div>
          <CardSlider />
        </div>
        <div className="min-w-0 md:basis-92.5 md:grow-0 md:shrink-0">
          <div className="md:mb-5 mb-4 main-color font-semibold inter-font text-[18px]">
            My Expense
          </div>
          <ExpenseChart />
        </div>
      </div>
      <div className="md:mt-8 mt-4 ">
        <Table />
      </div>
    </div>
  );
};
