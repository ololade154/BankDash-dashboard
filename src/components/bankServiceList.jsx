import { useState } from "react";
import Modal from "react-modal";
import { LoanIconTwo } from "../Icons/loanIcon";
import { BriefCaseIcon } from "../Icons/briefCaseIcon";
import { GraphIcon } from "../Icons/graphIcon";
import { ShieldIcon } from "../Icons/shieldIcon";
import { UserIconFive } from "../Icons/userIconTwo";

export const BankServiceList = () => {
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

  const serviceIcon = [
    {
      id: 1,
      icon: <LoanIconTwo />,
      bgColor: "#FFE0EB",
      serviceType: "Business loans",
      serviceText: "It is a long established",
      loremHeader: "Lorem lpsum",
      loremText: "Many publishing",
      buttonText: "View Details",
    },
    {
      id: 2,
      icon: <BriefCaseIcon />,
      bgColor: "#FFF5D9",
      serviceType: "Checking accounts",
      serviceText: "It is a long established",
      loremHeader: "Lorem lpsum",
      loremText: "Many publishing",
      buttonText: "View Details",
    },
    {
      id: 3,
      icon: <GraphIcon />,
      bgColor: "#FFE0EB",
      serviceType: "Savings accounts",
      serviceText: "It is a long established",
      loremHeader: "Lorem lpsum",
      loremText: "Many publishing",
      buttonText: "View Details",
    },
    {
      id: 4,
      icon: <UserIconFive />,
      bgColor: "#E7EDFF",
      serviceType: "Debit and credits cards",
      serviceText: "It is a long established",
      loremHeader: "Lorem lpsum",
      loremText: "Many publishing",
      buttonText: "View Details",
    },
    {
      id: 5,
      icon: <ShieldIcon />,
      bgColor: "#DCFAF8",
      serviceType: "Life insurance",
      serviceText: "It is a long established",
      loremHeader: "Lorem lpsum",
      loremText: "Many publishing",
      buttonText: "View Details",
    },
    {
      id: 6,
      icon: <LoanIconTwo />,
      bgColor: "#FFE0EB",
      serviceType: "Business loans",
      serviceText: "It is a long established",
      loremHeader: "Lorem lpsum",
      loremText: "Many publishing",
      buttonText: "View Details",
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
      maxWidth: "400px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
      margin: "16px",
    },
  };

  return (
    <>
      {/* mobile */}
      <div className="grid grid-cols-1 gap-3 mt-3 md:hidden">
        {serviceIcon.map((item) => (
          <div
            key={item.id}
            className="bg-white py-3 px-3 md:rounded-3xl rounded-2xl flex items-center w-full "
          >
            <div className="flex items-center flex-2  min-w-0 gap-3">
              <div
                className="w-10 h-10  flex items-center justify-center rounded-2xl shrink-0"
                style={{ backgroundColor: item.bgColor }}
              >
                {item.icon}
              </div>

              <div className="flex flex-col min-w-0">
                <div className="text-[#232323] text-[12px] font-semibold">
                  {item.serviceType}
                </div>
                <div className="text-[#718EBF] text-[11px] font-normal">
                  {item.serviceText}
                </div>
              </div>
            </div>
            <button
              onClick={() => openModal(item)}
              className="flex justify-end items-center min-w-0 text-[11px] font-medium text-[#1814F3] bg-transparent border-none cursor-pointer"
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
      {/* desktop */}
      <div className="hidden md:grid grid-cols-1 gap-4 md:mt-4">
        {serviceIcon.map((item) => (
          <div
            key={item.id}
            className="bg-white md:py-4  md:px-4 md:rounded-3xl rounded-2xl flex items-center w-full "
          >
            <div className="flex items-center gap-4 min-w-0 flex-2 ">
              <div
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-2xl shrink-0"
                style={{ backgroundColor: item.bgColor }}
              >
                {item.icon}
              </div>

              <div className="flex flex-col min-w-0">
                <div className="text-[#232323]  md:text-[15px] font-semibold">
                  {item.serviceType}
                </div>
                <div className="text-[#718EBF] md:text-[13px] font-normal">
                  {item.serviceText}
                </div>
              </div>
            </div>

            <div className="flex flex-col min-w-0 flex-1">
              <div className="text-[16px] md:text-[15px] font-medium">
                {item.loremHeader}
              </div>
              <div className="text-[#718EBF] text-[13px] font-normal">
                {item.loremText}
              </div>
            </div>

            <div className="flex flex-col min-w-0 flex-1">
              <div className="text-[15px] font-medium">{item.loremHeader}</div>
              <div className="text-[#718EBF] text-[13px] font-normal">
                {item.loremText}
              </div>
            </div>

            <div className="flex flex-col min-w-0 flex-1">
              <div className="text-[15px] font-medium">{item.loremHeader}</div>
              <div className="text-[#718EBF] text-[13px] font-normal">
                {item.loremText}
              </div>
            </div>

            <button
              onClick={() => openModal(item)}
              className="flex justify-end items-center min-w-0 text-[16px] md:text-[14px] font-medium text-[#1814F3] bg-transparent border-none cursor-pointer"
            >
              <span className="py-2 px-6 border border-[#1814F3] rounded-full text-[#1814F3]">
                {item.buttonText}
              </span>
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
          <div className="space-y-5">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 flex items-center justify-center rounded-2xl"
                style={{ backgroundColor: selectedCard.bgColor }}
              >
                {selectedCard.icon}
              </div>

              <div>
                <div className="text-[#232323] text-[16px] font-semibold">
                  {selectedCard.serviceType}
                </div>

                <div className="text-[#718EBF] text-[13px]">
                  {selectedCard.serviceText}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200" />

            {/* Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4">
              <div>
                <div className="text-[#232323] text-[14px] font-semibold mb-1">
                  {selectedCard.loremHeader}
                </div>
                <div className="text-[#718EBF] text-[13px]">
                  {selectedCard.loremText}
                </div>
              </div>

              <div>
                <div className="text-[#232323] text-[14px] font-semibold mb-1">
                  {selectedCard.loremHeader}
                </div>
                <div className="text-[#718EBF] text-[13px]">
                  {selectedCard.loremText}
                </div>
              </div>

              <div>
                <div className="text-[#232323] text-[14px] font-semibold mb-1">
                  {selectedCard.loremHeader}
                </div>
                <div className="text-[#718EBF] text-[13px]">
                  {selectedCard.loremText}
                </div>
              </div>

              <div>
                <div className="text-[#232323] text-[14px] font-semibold mb-1">
                  {selectedCard.loremHeader}
                </div>
                <div className="text-[#718EBF] text-[13px]">
                  {selectedCard.loremText}
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="mt-4 w-full py-3 rounded-2xl bg-[#1814F3] text-white text-[15px] font-medium cursor-pointer border-none "
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </>
  );
};
