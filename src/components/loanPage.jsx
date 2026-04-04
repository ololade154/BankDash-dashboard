import { LoanSlider } from "./loanSlider";
import { LoanTable } from "./loanTable";

export const LoanPage = () => {
  return (
    <div>
      <LoanSlider />
      <h1 className="md:mt-5 mt-3 text-[#333B69] font-semibold md:text-[22px] text-[18px]">
        Active Loans Overview
      </h1>
      <LoanTable />
    </div>
  );
};
