export const StockTable = () => {
  const data = [
    {
      col1: "01.",
      col2: "Trivago",
      col3: "$520",
      col4: "+5%",
    },
    {
      col1: "02.",
      col2: "Canon",
      col3: "$480",
      col4: "+10%",
    },
    {
      col1: "03.",
      col2: "Uber Food",
      col3: "$350",
      col4: "-3%",
    },
    {
      col1: "04.",
      col2: "Nokia",
      col3: "$940",
      col4: "+2%",
    },
    {
      col1: "05.",
      col2: "Tiktok",
      col3: "$670",
      col4: "-12%",
    },
  ];

  return (
    <div className="">
      <table className=" w-full bg-white rounded-xl h-56 md:h-80 ">
        <thead className="">
          <tr>
            <th className="text-left md:px-2 md:py-2 font-semibold text-gray-700">
              SL No
            </th>
            <th className="text-left md:px-2 md:py-2 font-semibold text-gray-700">
              Name
            </th>
            <th className="text-left md:px-2 md:py-2 font-semibold text-gray-700">
              Price
            </th>
            <th className="text-left md:px-2 md:py-2 font-semibold text-gray-700">
              Return
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
