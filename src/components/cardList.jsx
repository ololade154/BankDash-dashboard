import { useState } from "react";
import Modal from "react-modal";
import {
  CreditIconFour,
  CreditIconThree,
  CreditIconTwo,
} from "../Icons/creditIcon";

export const CardList = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);

    // wait for animation before removing content
    setTimeout(() => {
      setSelectedCard(null);
    }, 100);
  };

  const cardIcon = [
    {
      id: 1,
      icon: <CreditIconTwo />,
      bgColor: "#E7EDFF",
      cardType: "Secondary",
      header: "Card Type",
      bankType: "DBL Bank",
      bankHeader: "Bank",
      cardHeader: "Card Number",
      cardNumber: "**** **** 5600",
      viewDetails: "View Details",
      name: "William",
      nameHeader: "Name on Card",
    },
    {
      id: 2,
      icon: <CreditIconThree />,
      bgColor: "#FFE0EB",
      cardType: "Secondary",
      header: "Card Type",
      bankType: "BRC Bank",
      bankHeader: "Bank",
      cardHeader: "Card Number",
      cardNumber: "**** **** 4300",
      viewDetails: "View Details",
      name: "Michael",
      nameHeader: "Name on Card",
    },
    {
      id: 3,
      icon: <CreditIconFour />,
      bgColor: "#FFF5D9",
      cardType: "Secondary",
      header: "Card Type",
      bankType: "ABM Bank",
      bankHeader: "Bank",
      cardHeader: "Card Number",
      cardNumber: "**** **** 7560",
      viewDetails: "View Details",
      name: "Edward",
      nameHeader: "Name on Card",
    },
  ];

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.45)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      position: "relative",
      inset: "auto",
      border: "none",
      borderRadius: "24px",
      padding: "24px",
      width: "100%",
      maxWidth: "420px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
    },
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {cardIcon.map((item) => (
          <div
            key={item.id}
            className="bg-white md:py-6 py-4 px-4 md:px-4 md:rounded-3xl rounded-2xl flex items-center w-full md:gap-x-2 justify-between"
          >
            <div className="flex items-center gap-2 min-w-0">
              <div
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-2xl shrink-0"
                style={{ backgroundColor: item.bgColor }}
              >
                {item.icon}
              </div>

              <div className="flex flex-col min-w-0">
                <div className="text-[#232323] text-[16px] md:text-[15px] font-semibold">
                  {item.header}
                </div>
                <div className="text-[#718EBF] text-[13px] font-normal">
                  {item.cardType}
                </div>
              </div>
            </div>

            <div className="flex flex-col min-w-0">
              <div className="text-[16px] md:text-[15px] font-medium">
                {item.bankHeader}
              </div>
              <div className="text-[#718EBF] text-[13px] font-normal">
                {item.bankType}
              </div>
            </div>

            <div className="hidden md:flex flex-col min-w-0">
              <div className="text-[15px] font-medium">{item.cardHeader}</div>
              <div className="text-[#718EBF] text-[13px] font-normal">
                {item.cardNumber}
              </div>
            </div>

            <div className="hidden md:flex flex-col min-w-0">
              <div className="text-[15px] font-medium">{item.nameHeader}</div>
              <div className="text-[#718EBF] text-[13px] font-normal">
                {item.name}
              </div>
            </div>

            <button
              onClick={() => openModal(item)}
              className="flex justify-end items-center min-w-0 text-[16px] md:text-[15px] font-medium text-[#1814F3] bg-transparent border-none cursor-pointer"
            >
              {item.viewDetails}
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        closeTimeoutMS={100}
      >
        {selectedCard && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-2xl"
                  style={{ backgroundColor: selectedCard.bgColor }}
                >
                  {selectedCard.icon}
                </div>

                <div>
                  <div className="text-[#232323] text-[15px] font-semibold">
                    Card Details
                  </div>
                  <div className="text-[#718EBF] text-[12px] font-normal">
                    {selectedCard.cardType}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 mb-3" />

            <div className="grid grid-cols-2 gap-y-5 gap-x-4">
              <div>
                <div className="text-[#232323] text-[15px] font-semibold mb-1">
                  {selectedCard.bankHeader}
                </div>
                <div className="text-[#718EBF] text-[12px] font-normal">
                  {selectedCard.bankType}
                </div>
              </div>

              <div>
                <div className="text-[#232323] text-[15px] font-semibold mb-1">
                  {selectedCard.nameHeader}
                </div>
                <div className="text-[#718EBF] text-[12px] font-normal">
                  {selectedCard.name}
                </div>
              </div>

              <div>
                <div className="text-[#718EBF] text-[12px] font-normal mb-1">
                  {selectedCard.cardHeader}
                </div>
                <div className="text-[#232323] text-[15px] font-semibold">
                  {selectedCard.cardNumber}
                </div>
              </div>

              <div>
                <div className="text-[#718EBF] text-[12px] font-normal mb-1">
                  Card Type
                </div>
                <div className="text-[#232323] text-[15px] font-semibold">
                  {selectedCard.cardType}
                </div>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="mt-6 w-full py-3 rounded-2xl bg-[#1814F3] text-white text-[15px] font-medium cursor-pointer border-none hover:bg-[#1210d0] transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </>
  );
};
