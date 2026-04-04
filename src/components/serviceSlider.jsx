import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { LifeInsuranceIcon } from "../Icons/lifeInsuraceIcon";
import { ShoppingIcon } from "../Icons/shoppingIcon";
import { ShieldIcon } from "../Icons/shieldIcon";

export const ServiceSlider = ({
  desktopSlides = 3,
  mobileSlides = 1,
  serviceItems = [
    {
      id: 1,
      icon: <LifeInsuranceIcon />,
      bgColor: "#E7EDFF",
      header: "Life Insurance",
      text: "Unlimited protection",
    },
    {
      id: 2,
      icon: <ShoppingIcon />,
      bgColor: "#FFF5D9",
      header: "Shopping",
      text: "Buy, Think, Grow",
    },
    {
      id: 3,
      icon: <ShieldIcon />,
      bgColor: "#DCFAF8",
      header: "Safety",
      text: "We are your allies",
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
        {serviceItems.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center">
            <div className="bg-white md:py-6 py-6 md:rounded-3xl rounded-2xl flex items-center justify-center md:gap-x-4 gap-x-3 w-full ">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full"
                style={{ backgroundColor: item.bgColor }}
              >
                {item.icon}
              </div>
              <div>
                <div className="text-[#232323] md:text-[19px] text-[18px] font-semibold">
                  {item.header}
                </div>
                <div className="text-[#718EBF] text-[16px] font-normal">
                  {item.text}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
