import { BankServiceList } from "./bankServiceList";
import { ServiceSlider } from "./serviceSlider";
export const ServicePage = () => {
  return (
    <div>
      <ServiceSlider />
      <h1 className="md:mt-5 mt-3 text-[#333B69] font-semibold md:text-[22px] text-[18px]">
        Active Loans Overview
      </h1>
      <BankServiceList />
    </div>
  );
};
