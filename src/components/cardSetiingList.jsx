import { AppleIcon } from "../Icons/appleIcon";
import { BlockIcon } from "../Icons/blockIcon";
import { GoogleIconTwo } from "../Icons/googleIcon";
import { PadlockIcon } from "../Icons/padlockIcon";

export const CardSettingList = () => {
  const settingList = [
    {
      id: 1,
      icon: <BlockIcon />,
      bgColor: "#FFF5D9",
      header: "Block Card",
      content: "Instantly block your card",
    },
    {
      id: 2,
      icon: <PadlockIcon />,
      bgColor: "#E7EDFF",
      header: "Change Pin Code",
      content: "Choose another pin code",
    },
    {
      id: 3,
      icon: <GoogleIconTwo />,
      bgColor: "#FFE0EB",
      header: "Add to Google Play",
      content: "Withdraw without any card",
    },
    {
      id: 4,
      icon: <AppleIcon />,
      bgColor: " #DCFAF8",
      header: "Add to Apple",
      content: "Withdraw without any card",
    },
    {
      id: 5,
      icon: <AppleIcon />,
      bgColor: " #DCFAF8",
      header: "Add to Apple",
      content: "Withdraw without any card",
    },
  ];
  return (
    <div className="bg-white p-6  rounded-2xl w-full flex flex-col md:gap-y-6 gap-y-3 inter-font">
      {settingList.map((value) => {
        return (
          <div key={value.id} className=" ">
            <div className="flex items-center gap-x-3 min-w-0 flex-1">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl "
                style={{ backgroundColor: value.bgColor }}
              >
                {value.icon}
              </div>

              <div className="">
                <h1 className="font-medium md:text-[16px] text-[19px] text-[#232323] ">
                  {value.header}
                </h1>
                <p className="font-normal md:text-[14px] text-[15px]  text-[#718EBF]">
                  {value.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
