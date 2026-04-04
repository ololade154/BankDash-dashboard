export const LoanTable = () => {
  const loanValue = [
    {
      id: 1,
      sn: "01.",
      loan: "$100,000",
      leftToRepay: "$40,500",
      duration: "8 Months",
      interestRate: "12%",
      installment: "$2,000 / month",
      repay: "Repay",
    },
    {
      id: 2,
      sn: "02.",
      loan: "$500,000",
      leftToRepay: "$250,000",
      duration: "36 Months",
      interestRate: "10%",
      installment: "$8,000 / month",
      repay: "Repay",
    },
    {
      id: 3,
      sn: "03.",
      loan: "$900,000",
      leftToRepay: "$40,500",
      duration: "12 Months",
      interestRate: "12%",
      installment: "$5,000 / month",
      repay: "Repay",
    },
    {
      id: 4,
      sn: "04.",
      loan: "$50,000",
      leftToRepay: "$40,500",
      duration: "25 Months",
      interestRate: "5%",
      installment: "$2,000 / month",
      repay: "Repay",
    },
    {
      id: 5,
      sn: "05.",
      loan: "$50,000",
      leftToRepay: "$40,500",
      duration: "5 Months",
      interestRate: "16%",
      installment: "$10,000 / month",
      repay: "Repay",
    },
    {
      id: 6,
      sn: "06.",
      loan: "$80,000",
      leftToRepay: "$25,500",
      duration: "14 Months",
      interestRate: "8%",
      installment: "$2,000 / month",
      repay: "Repay",
    },
    {
      id: 7,
      sn: "07.",
      loan: "$12,000",
      leftToRepay: "$5,500",
      duration: "9 Months",
      interestRate: "13%",
      installment: "$500 / month",
      repay: "Repay",
    },
    {
      id: 8,
      sn: "08.",
      loan: "$160,000",
      leftToRepay: "$100,800",
      duration: "3 Months",
      interestRate: "12%",
      installment: "$900 / month",
      repay: "Repay",
    },
  ];
  const totals = loanValue.reduce(
    (sum, item) => {
      const loan = Number(item.loan.replace(/[$,]/g, ""));
      const leftToRepay = Number(item.leftToRepay.replace(/[$,]/g, ""));
      const installment = Number(
        item.installment.replace(/[$,]/g, "").split(" ")[0],
      );

      sum.loan += loan;
      sum.leftToRepay += leftToRepay;
      sum.installment += installment;

      return sum;
    },
    { loan: 0, leftToRepay: 0, installment: 0 },
  );

  return (
    <div>
      {/* mobile Table */}
      <div className="block md:hidden bg-white px-2 py-2 pt-0 rounded-2xl mt-4">
        {/* Header */}
        <div className="flex items-center border-b border-[#e6eff5] text-[#718EBF] text-[14px]">
          <div className="flex-1 py-3 px-2 font-normal">Loan Money</div>
          <div className="flex-1 py-3 px-2 font-normal">Left to repay</div>
          <div className="flex-1 py-3 px-2 font-normal">Repay</div>
        </div>

        {/* Body */}
        {loanValue.map((value) => (
          <div
            key={value.id}
            className="flex items-center border-b border-[#e6eff5] last:border-b-0 py-2 text-[#232323] text-[14px]"
          >
            <div className="flex-1 py-3 px-3 font-normal">{value.loan}</div>
            <div className="flex-1 py-3 px-3 font-normal">
              {value.leftToRepay}
            </div>
            <div className="flex-1 py-3 px-3 font-normal">
              <span className="py-1.5 px-3  border border-[#1814F3] rounded-full text-[#1814F3]">
                {value.repay}
              </span>
            </div>
          </div>
        ))}
        {/* Total Row */}
        <div className="flex items-center border-t border-[#e6eff5] font-semibold text-[14px] text-[#FE5C73]">
          <div className="flex-1 py-3 px-3 flex flex-col">
            <div>Total</div>
            <div>${totals.loan.toLocaleString()}</div>
          </div>
          <div className="flex-1 py-3 px-3 flex flex-col">
            <div>&nbsp;</div>
            <div>${totals.leftToRepay.toLocaleString()}</div>
          </div>
          <div className="flex-1 py-3 px-3"></div>
        </div>
      </div>

      {/* desktop table */}
      <div className="hidden md:block bg-white px-6 py-4 pt-0 rounded-2xl md:mt-4">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#e6eff5] text-[#718EBF] text-[15px]">
              <th className="py-4 px-4 text-left first:pl-0 last:pr-0 font-medium">
                SL No
              </th>
              <th className="py-4 px-4 text-left font-medium">Loan Money</th>
              <th className="py-4 px-4 text-left font-medium">Left to repay</th>
              <th className="py-4 px-4 text-left font-medium">Duration</th>
              <th className="py-4 px-4 text-left font-medium">Interest rate</th>
              <th className="py-4 px-4 text-left font-medium">Installment</th>
              <th className="py-4 px-4 text-left font-medium">Repay</th>
            </tr>
          </thead>
          <tbody>
            {loanValue.map((value) => (
              <tr
                key={value.id}
                className="border-b border-[#e6eff5] last:border-b-0 text-[#232323] text-[14px]"
              >
                <td className="py-4 px-4 font-normal">{value.sn}</td>
                <td className="py-4 px-4 font-normal">{value.loan}</td>
                <td className="py-4 px-4 font-normal">{value.leftToRepay}</td>
                <td className="py-4 px-4 font-normal">{value.duration}</td>
                <td className="py-4 px-4 font-normal">{value.interestRate}</td>
                <td className="py-4 px-4 font-normal">{value.installment}</td>
                <td className="py-4 px-4 font-normal">
                  <span className="py-2 px-6 border border-[#1814F3] rounded-full text-[#1814F3]">
                    {value.repay}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-[#e6eff5] font-medium text-[15px] text-[#FE5C73]">
              <td className="py-4 px-4">Total</td>

              <td className="py-4 px-4">${totals.loan.toLocaleString()}</td>

              <td className="py-4 px-4">
                ${totals.leftToRepay.toLocaleString()}
              </td>

              <td className="py-4 px-4"></td>

              <td className="py-4 px-4"></td>

              <td className="py-4 px-4">
                ${totals.installment.toLocaleString()} / month
              </td>

              <td className="py-4 px-4"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
