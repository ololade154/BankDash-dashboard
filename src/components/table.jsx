import { useState } from 'react';
import { transactionValue } from './transactionValue';
import { ExpenseIcon } from '../Icons/expenseIcon';
import { IncomeIcon } from '../Icons/incomeIcon';
import { Pagination } from './pagination';

export const Table = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredTransactions =
    activeTab === 'all'
      ? transactionValue
      : transactionValue.filter((item) => item.transactionType === activeTab);

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const currentData = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <>
      <div>
        {/* Title */}
        <h1 className="mb-2 md:mb-6 text-[#343C6A] text-[16px] md:text-[18px] font-semibold">
          Recent Transaction
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap items-center mb-5 gap-x-12 md:gap-x-20 border-b border-[#EBEEF2] md:mb-6 text-[#718EBF] text-[14px] md:text-[15px] font-medium">
          <p
            onClick={() => {
              setActiveTab('all');
              setCurrentPage(1);
            }}
            className={`cursor-pointer py-3 rounded-tl-[10px] rounded-tr-[10px] ${
              activeTab === 'all'
                ? 'text-[#1814F3] border-b-[3px] border-[#1814F3]'
                : ''
            }`}
          >
            All Transactions
          </p>

          <p
            onClick={() => {
              setActiveTab('income');
              setCurrentPage(1);
            }}
            className={`cursor-pointer py-3 rounded-tl-[10px] rounded-tr-[10px] ${
              activeTab === 'income'
                ? 'text-[#1814F3] border-b-[3px] border-[#1814F3]'
                : ''
            }`}
          >
            Income
          </p>

          <p
            onClick={() => {
              setActiveTab('expense');
              setCurrentPage(1);
            }}
            className={`cursor-pointer py-3 rounded-tl-[10px] rounded-tr-[10px] ${
              activeTab === 'expense'
                ? 'text-[#1814F3] border-b-[3px] border-[#1814F3]'
                : ''
            }`}
          >
            Expenses
          </p>
        </div>

        {/* mobile Table */}

        <div className="block md:hidden bg-white px-3 py-2 pt-0 rounded-2xl">
          {currentData.map((value) => (
            <div
              key={value.id}
              className="flex items-center justify-between border-b border-[#e6eff5] last:border-b-0 py-2  "
            >
              <div className="flex items-center gap-2.5">
                <span className="shrink-0">
                  {value.transactionType === 'income' ? (
                    <IncomeIcon width={32} height={32} />
                  ) : (
                    <ExpenseIcon width={32} height={32} />
                  )}
                </span>
                <div className="flex flex-col gap-y-0.5 text-[#232323] text-[14px]">
                  <span className="font-medium">{value.description}</span>
                  <span className="text-[#718EBF] font-normal">
                    {value.Date}
                  </span>
                </div>
              </div>

              <span
                className={`text-[14px] font-normal shrink-0 ${
                  value.amount.startsWith('+')
                    ? 'text-[#16DBAA]'
                    : 'text-[#FE5C73]'
                }`}
              >
                {value.amount}
              </span>
            </div>
          ))}
        </div>
        {/* desktop table */}
        <div className="hidden md:block bg-white px-6 py-4 pt-0 rounded-2xl">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e6eff5] text-[#718EBF] text-[15px]">
                <th className="py-4 px-4 text-left first:pl-0 last:pr-0 font-medium">
                  Description
                </th>
                <th className="py-4 px-4 text-left font-medium">
                  Transaction ID
                </th>
                <th className="py-4 px-4 text-left font-medium">Type</th>
                <th className="py-4 px-4 text-left font-medium">Card</th>
                <th className="py-4 px-4 text-left font-medium">Date</th>
                <th className="py-4 px-4 text-left font-medium">Amount</th>
                <th className="py-4 px-4 text-left font-medium">Receipt</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((value) => (
                <tr
                  key={value.id}
                  className="border-b border-[#e6eff5] last:border-b-0 text-[#232323] text-[14px]"
                >
                  <td className="py-4 px-4 first:pl-0 font-normal">
                    <div className="flex items-start gap-4">
                      {value.transactionType === 'income' ? (
                        <IncomeIcon />
                      ) : (
                        <ExpenseIcon />
                      )}
                      <span>{value.description}</span>
                    </div>
                  </td>

                  <td className="py-4 px-4 font-normal">
                    {value.transactionID}
                  </td>

                  <td className="py-4 px-4 font-normal">{value.type}</td>

                  <td className="py-4 px-4 font-normal">{value.card}</td>

                  <td className="py-4 px-4 font-normal">{value.Date}</td>

                  <td
                    className={`py-4 px-4 font-normal ${
                      value.amount.startsWith('+')
                        ? 'text-[#16DBAA]'
                        : 'text-[#FE5C73]'
                    }`}
                  >
                    {value.amount}
                  </td>

                  <td className="py-4 px-4 text-[#123288] font-normal">
                    <span className="py-2 px-4 button-border rounded-full">
                      {value.download}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination  */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          pageOnChange={setCurrentPage}
        />
      </div>
    </>
  );
};
