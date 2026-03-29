import { RenewIcon } from "../Icons/renewIcon";
import { SettingsIconTwo } from "../Icons/settingsIconTwo";
import { UserIconTwo } from "../Icons/userIconTwo";

export const LastTransaction = () => {
  const transValue = [
    {
      id: 1,
      icon: <RenewIcon />,
      bgColor: " #DCFAF8",
      transHeader: "Spotify Subscription",
      date: "25 Jan 2021",
      price: "-$150",
      color: "#FF4B4A",
      transStatus: "pending",
      card: "1234 ****",
      type: "Shopping",
    },
    {
      id: 2,
      icon: <SettingsIconTwo />,
      bgColor: " #E7EDFF",
      transHeader: "Mobile Service",
      date: "25 Jan 2021",
      price: "-340",
      color: "#FF4B4A",
      transStatus: "completed",
      card: "1234 ****",
      type: "Service",
    },
    {
      id: 3,
      icon: <UserIconTwo />,
      bgColor: "#FFE0EB",
      transHeader: "Jemi Wilson",
      date: "25 Jan 2021",
      price: "+$780",
      color: "#41D4A8",
      transStatus: "completed",
      card: "1234 ****",
      type: "Transfer",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl w-full h-50 flex flex-col  gap-y-3 inter-font">
      {transValue.map((value) => (
        <div key={value.id} className="flex items-center">
          {/* Icon + Transaction Info */}
          <div className="flex items-center gap-x-3 flex-1">
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full"
              style={{ backgroundColor: value.bgColor }}
            >
              {value.icon}
            </div>

            <div>
              <h1 className="font-medium text-[13px] text-[#232323]">
                {value.transHeader}
              </h1>

              <p className="font-normal text-[12px] text-[#718EBF]">
                {value.date}
              </p>
            </div>
          </div>

          {/* Type */}
          <div className="w-24 hidden md:block">
            <p className="text-[13px]  text-[#718EBF]">{value.type}</p>
          </div>

          {/* Card */}
          <div className="w-24 hidden md:block  ">
            <p className="text-[13px] text-[#718EBF]">{value.card}</p>
          </div>

          {/* Status */}
          <div className="w-24 hidden md:block  ">
            <p className="text-[13px] text-[#718EBF]">{value.transStatus}</p>
          </div>

          {/* Price */}
          <div className="w-20 text-right">
            <p
              style={{ color: value.color }}
              className="text-[13px]  font-medium"
            >
              {value.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
