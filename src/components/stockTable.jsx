export const StockTable = () => {
  const data = [
    { col1: "01.", col2: "Trivago", col3: "$520", col4: "+5%" },
    { col1: "02.", col2: "Canon", col3: "$480", col4: "+10%" },
    { col1: "03.", col2: "Uber", col3: "$350", col4: "-3%" },
    { col1: "04.", col2: "Nokia", col3: "$940", col4: "+2%" },
    { col1: "05.", col2: "Tiktok", col3: "$670", col4: "-12%" },
  ];

  return (
    <div className="w-full bg-white rounded-2xl md:h-80 ">
      {/* Desktop Table Header */}
      <div className="hidden md:grid grid-cols-4 border-b border-[#F4F5F7] font-regular text-[#718EBF]">
        <div className="px-4 py-3">SL No</div>
        <div className="px-4 py-3">Name</div>
        <div className="px-4 py-3">Price</div>
        <div className="px-4 py-3">Return</div>
      </div>

      {/* Desktop Table Rows */}
      <div className="hidden md:grid">
        {data.map((item, index) => (
          <div key={index} className="grid grid-cols-4 font-regular">
            <div className="px-4 py-3 text-[#232323]  ">{item.col1}</div>
            <div className="px-4 py-3 text-[#232323] ">{item.col2}</div>
            <div className="px-4 py-3 text-[#232323]">{item.col3}</div>
            <div
              className={`px-4 py-3 font-medium  ${
                item.col4.startsWith("+") ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.col4}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className="block border-b border-gray-200 p-4 hover:bg-gray-50"
          >
            <div className="flex justify-between mb-1">
              <span className="font-medium text-[#718EBF] ">SL No:</span>
              <span className="text-[#232323]">{item.col1}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-[#718EBF]">Name:</span>
              <span className=" text-[#232323]">{item.col2}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-[#718EBF]">Price:</span>
              <span className="text-[#232323]">{item.col3}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-[#718EBF] ">Return:</span>
              <span
                className={`font-medium ${
                  item.col4.startsWith("+") ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.col4}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
