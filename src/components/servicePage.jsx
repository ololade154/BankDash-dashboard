import { useState, useEffect } from "react";
import { BankServiceList } from "./bankServiceList";
import { ServiceSlider } from "./serviceSlider";
import { Loader } from "./loader";
export const ServicePage = () => {
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
      <ServiceSlider />
      <h1 className="md:mt-5 mt-3 text-[#333B69] font-semibold md:text-[22px] text-[18px]">
        Bank Services List
      </h1>
      <BankServiceList />
    </div>
  );
};
