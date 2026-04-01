import { CardSlider } from "./cardSlider";

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

  return (
    <div className="w-full">
      <CardSlider
        cardsToShow={cardData}
        desktopSlides={3}
        mobileSlides={1}
        initialSlide={cardData.length - 1}
      />
    </div>
  );
};
