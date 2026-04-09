import { useState, useEffect } from "react";
import { LoanSlider } from "./loanSlider";
import { LoanTable } from "./loanTable";
import { Loader } from "./loader";

export const LoanPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading (like fetching API)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loader />;
  }
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
