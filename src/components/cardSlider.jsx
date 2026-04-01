import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card } from "./card";
import { cards } from "./cardData";

export const CardSlider = ({
  desktopSlides = 2,
  mobileSlides = 1,
  cardsToShow = cards,
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
        {cardsToShow.map((card) => (
          <SwiperSlide key={card.id} className="flex justify-center">
            <Card
              title={card.title}
              amount={card.amount}
              bgColor={card.bgColor}
              gradientBottom={card.gradientBottom}
              borderTop={card.borderTop}
              border={card.border}
              cardColor={card.cardColor}
              cardTag={card.cardTag}
              textColor={card.textColor}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
