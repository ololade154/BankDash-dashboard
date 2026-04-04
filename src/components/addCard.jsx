export const AddCard = () => {
  return (
    <div className="bg-white p-6 md:h-96 rounded-2xl w-full flex flex-col md:gap-y-6 gap-y-3 ">
      <div className="text-[#718EBF] font-normal md:text-[17px] text-[14px]">
        Credit Card generally means a plastic card issued by Scheduled
        Commercial Banks assigned to a Cardholder, with a credit limit, that can
        be used to purchase goods and services on credit or obtain cash
        advances.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card Type */}
        <div className="flex flex-col">
          <label className="text-[#232323] font-normal text-[14px] mb-1">
            Card Type
          </label>
          <input
            type="text"
            placeholder="Classic"
            className="w-full px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px]"
          />
        </div>

        {/* Card Name */}
        <div className="flex flex-col">
          <label className="text-[#232323] font-normal text-[14px] mb-1">
            {" "}
            Name on Card
          </label>
          <input
            type="text"
            placeholder="My Cards"
            className="w-full px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px]"
          />
        </div>

        {/* Card Number */}
        <div className="flex flex-col">
          <label className="text-[#232323]  font-normal text-[14px] mb-1">
            Card Number
          </label>
          <input
            type="text"
            placeholder="****  ****  ****  ****"
            className="w-full px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px] "
          />
        </div>

        {/* Expiry Date */}
        <div className="flex flex-col">
          <label className="text-[#232323] font-normal text-[14px] mb-1">
            Expiration Date
          </label>
          <input
            type="text"
            placeholder="MM/YY "
            className="w-full px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px]"
          />
        </div>
      </div>

      <div className="mt-2">
        <button className="w-full md:w-40 bg-[#1814F3] text-white py-3 rounded-xl font-light">
          Add Card
        </button>
      </div>
    </div>
  );
};
