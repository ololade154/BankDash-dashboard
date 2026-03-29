import { AppleIcon } from "../Icons/appleIcon";
import { PlayStationIcon } from "../Icons/playStationIcon";
import { UserIconFour, UserIconThree } from "../Icons/userIconTwo";

export const InvoiceValue = () => {
  const invoiceIcon = [
    {
      id: 1,
      icon: <AppleIcon />,
      bgColor: " #DCFAF8",
      transHeader: "Apple Store",
      day: "5h ago",
      price: "$450",
      color: "#718EBF",
    },
    {
      id: 2,
      icon: <UserIconThree />,
      bgColor: "#FFF5D9",
      transHeader: "Michael",
      day: "2 days ago",
      price: "$160",
      color: "#718EBF",
    },
    {
      id: 3,
      icon: <PlayStationIcon />,
      bgColor: "#E7EDFF",
      transHeader: "Playstation",
      day: "5 days ago",
      price: "$1085",
      color: "#718EBF",
    },
    {
      id: 4,
      icon: <UserIconFour />,
      bgColor: "#FFE0EB",
      transHeader: "William",
      day: "10 days ago",
      price: "$90",
      color: "#718EBF",
    },
  ];
  return (
    <div className="bg-white p-6 h-56 md:h-72 rounded-2xl w-full flex flex-col md:gap-y-6 gap-y-1.5 inter-font">
      {invoiceIcon.map((value) => {
        return (
          <div key={value.id} className="flex items-center justify-between">
            <div className="flex items-center gap-x-3 min-w-0 flex-1">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-xl "
                style={{ backgroundColor: value.bgColor }}
              >
                {value.icon}
              </div>

              <div className="">
                <h1
                  className="font-medium text-[13px] "
                  style={{ color: "#B1B1B1" }}
                >
                  {value.transHeader}
                </h1>
                <p
                  className="font-normal text-[12px] "
                  style={{ color: "#718EBF" }}
                >
                  {value.day}
                </p>
              </div>
            </div>

            <div>
              <p
                style={{ color: value.color }}
                className="text-[11px] font-medium"
              >
                {value.price}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
