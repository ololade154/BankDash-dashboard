import { useState, useEffect } from "react";
import { AddCard } from "./addCard";
import { CardList } from "./cardList";
import { CardSettingList } from "./cardSetiingList";
import { CardSlider } from "./cardSlider";
import { BankDonutChart } from "./pieChart";
import { Loader } from "./loader";

export const CreditPage = () => {
  const cardData = [
    {
      id: 1,
      title: "Expenses",
      amount: "$700",
      bgColor: "bg-[linear-gradient(107.38deg,#2D60FF_2.61%,#539BFF_101.2%)]",

      gradientBottom: true,
      borderTop: false,
      border: true,
      cardColor: "colored",
      cardTag: "hash",
      textColor: true,
    },
    {
      id: 2,
      title: "Savings",
      amount: "$1,200",
      bgColor: "bg-white",
      gradientBottom: false,
      borderTop: true,
      border: true,
      cardColor: "white",
      cardTag: "deephash",
      textColor: false,
    },
    {
      id: 3,
      title: "Balance",
      amount: "$5,000",
      bgColor: "bg-[linear-gradient(107.38deg,#4C49ED_2.61%,#0A06F4_101.2%)]",
      gradientBottom: true,
      borderTop: false,
      border: false,
      cardColor: "colored",
      cardTag: "hash",
      textColor: true,
    },
  ];
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
    <div className="w-full">
      <CardSlider
        cardsToShow={cardData}
        desktopSlides={3}
        mobileSlides={1}
        initialSlide={cardData.length - 1}
      />

      <div className="flex flex-col gap-y-6 mt-4 justify-between md:flex-row md:gap-x-8 md:items-center md:mt-6">
        <div className="min-w-0 md:flex-1">
          <div className="flex justify-between mb-4 md:mb-5 main-color font-semibold inter-font">
            <h1 className="text-[18px] ">Card Expense Statistics</h1>
          </div>
          <BankDonutChart />
        </div>
        <div className="min-w-0 md:flex-2 md:shrink-0">
          <div className="flex justify-between md:mb-5 mb-3 main-color font-semibold inter-font">
            <div>
              <h1 className="text-[18px] ">Card List</h1>
            </div>
          </div>
          <CardList />
        </div>
      </div>
      <div className="flex flex-col gap-y-6 mt-4 justify-between md:flex-row md:gap-x-8 md:items-center md:mt-6">
        <div className="min-w-0 md:flex-2">
          <div className="flex justify-between mb-4 md:mb-5 main-color font-semibold inter-font">
            <h1 className="text-[18px] ">Add New Card</h1>
          </div>
          <AddCard />
        </div>
        <div className="min-w-0 md:flex-1 md:shrink-0">
          <div className="flex justify-between md:mb-5 mb-3 main-color font-semibold inter-font">
            <div>
              <h1 className="text-[18px] ">Card Setting </h1>
            </div>
          </div>
          <CardSettingList />
        </div>
      </div>
    </div>
  );
};
