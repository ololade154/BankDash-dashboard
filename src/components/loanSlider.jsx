import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BriefCaseIcon } from "../Icons/briefCaseIcon";
import { UserIconFive } from "../Icons/userIconTwo";
import { GraphIcon } from "../Icons/graphIcon";
import { SettingsIconThree } from "../Icons/settingsIconTwo";

export const LoanSlider = ({
  desktopSlides = 4,
  mobileSlides = 1,
  loanItems = [
    {
      id: 1,
      icon: <UserIconFive />,
      bgColor: "#E7EDFF",
      header: "Personal Loan",
      price: "$50,000",
    },
    {
      id: 2,
      icon: <BriefCaseIcon />,
      bgColor: "#FFF5D9",
      header: "Corporate Loans",
      price: "$100,000",
    },
    {
      id: 3,
      icon: <GraphIcon />,
      bgColor: "#FFE0EB",
      header: "Business Laon",
      price: "$500,000",
    },
    {
      id: 4,
      icon: <SettingsIconThree />,
      bgColor: "#DCFAF8",
      header: "Custom Loans",
      price: "Choose money",
    },
  ],
  initialSlide = 0,
}) => {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        spaceBetween={20}
        grabCursor={true}
        simulateTouch={true}
        initialSlide={initialSlide}
        touchEventsTarget="container"
        breakpoints={{
          0: { slidesPerView: mobileSlides },
          768: { slidesPerView: desktopSlides },
        }}
      >
        {loanItems.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center">
            <div className="bg-white md:py-6 py-4 md:rounded-3xl rounded-2xl flex items-center justify-center md:gap-x-4 gap-x-2 w-full ">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full"
                style={{ backgroundColor: item.bgColor }}
              >
                {item.icon}
              </div>
              <div>
                <div className="text-[#718EBF] text-[16px] font-normal">
                  {item.header}
                </div>
                <div className="text-[#232323] md:text-[19px] text-[18px] font-semibold">
                  {item.price}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
