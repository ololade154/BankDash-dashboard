import { CardSlider } from './cardSlider';
import { ExpenseChart } from './expenseChart';
import { Table } from './table';

export const TransactionPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-8 md:items-start">
        <div className="min-w-0 md:flex-2 ">
          <div className="flex justify-between md:mb-5 mb-3 main-color font-semibold inter-font">
            <div>
              <h1 className="text-[18px] ">My Cards</h1>
            </div>
            <div>
              <h2 className="text-[18px] ">+ Add Card </h2>
            </div>
          </div>
          <CardSlider />
        </div>
        <div className="min-w-0 md:flex-1">
          <div className="md:mb-5 mb-4 main-color font-semibold inter-font text-[18px]">
            My Expense
          </div>
          <ExpenseChart />
        </div>
      </div>
      <div className="mt-8 ">
        <Table />
      </div>
    </div>
  );
};
