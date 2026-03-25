import { transactionValue } from './transactionValue';
import { ExpenseIcon } from '../Icons/expenseIcon';
import { IncomeIcon } from '../Icons/incomeIcon';

export const Table = () => {
  return (
    <>
      {/* desktop table */}
      <div className=" ">
        <div className="hidden md:block  bg-white px-6 py-4 pt-0 rounded-2xl">
          <table className="w-full ">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-4 text-md text-left first:pl-0 last:pr-0">
                  Description
                </th>
                <th className="py-4 px-4 text-md text-left first:pl-0 last:pr-0">
                  Transaction ID
                </th>
                <th className="py-4 px-4 text-md text-left first:pl-0 last:pr-0">
                  Type
                </th>
                <th className="py-4 px-4 text-md text-left first:pl-0 last:pr-0">
                  Card
                </th>
                <th className="py-4 px-4 text-md text-left first:pl-0 last:pr-0">
                  Date
                </th>
                <th className="py-4 px-4 text-md text-left first:pl-0 last:pr-0">
                  Amount
                </th>
                <th className="py-4 px-4 text-md text-left first:pl-0 last:pr-0">
                  Receipt
                </th>
              </tr>
            </thead>

            <tbody>
              {transactionValue.map((value) => (
                <tr key={value.id} className="border-b last:border-b-0">
                  <td className="py-4 px-4 text-md first:pl-0 last:pr-0">
                    <div className="flex items-start gap-4">
                      {value.transactionType === 'income' ? (
                        <IncomeIcon />
                      ) : (
                        <ExpenseIcon />
                      )}
                      <span>{value.description}</span>
                    </div>
                  </td>

                  <td className="py-4 px-4 text-md text-left first:pl-0 last:pr-0">
                    {value.transactionID}
                  </td>
                  <td className="py-4 px-4 text-md text-left first:pl-0 last:pr-0">
                    {value.type}
                  </td>
                  <td className="py-4 px-4 text-md text-left first:pl-0 last:pr-0">
                    {value.card}
                  </td>
                  <td className="py-4 px-4 text-md text-left first:pl-0 last:pr-0">
                    {value.Date}
                  </td>
                  <td
                    className={`py-4 px-4 text-md text-left first:pl-0 last:pr-0 ${
                      value.amount.startsWith('+')
                        ? 'text-green-500'
                        : 'text-red-500'
                    }
                  `}
                  >
                    {value.amount}
                  </td>
                  <td className="py-4 px-4 text-md text-left first:pl-0 last:pr-0">
                    {value.download}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
