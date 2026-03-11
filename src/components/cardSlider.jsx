import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card } from './card';

const cards = [
  {
    id: 1,
    title: 'Balance',
    amount: '$5,756',
    bgColor: 'bg-[linear-gradient(107.38deg,#4C49ED_2.61%,#0A06F4_101.2%)]',
    gradientBottom: true,
    borderTop: false,
    border: false,
    cardColor: 'colored',
    cardTag: 'hash',
    textColor: true,
  },
  {
    id: 2,
    title: 'Balance',
    amount: '$5,756',
    bgColor: 'bg-white',
    gradientBottom: false,
    borderTop: true,
    border: true,
    chipColor: 'text-gray-400',
    cardColor: 'white',
    cardTag: 'deephash',
    textColor: false,
  },
  {
    id: 3,
    title: 'Balance',
    amount: '$5,756',
    bgColor: 'bg-[linear-gradient(107.38deg,#2D60FF_2.61%,#539BFF_101.2%)]',
    gradientBottom: true,
    borderTop: false,
    border: false,
    chipColor: 'text-yellow-400',
    cardColor: 'colored',
    cardTag: 'hash',
    textColor: true,
  },
];

export const CardSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        style={{ width: '100%' }}
      >
        {cards.map((card) => (
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
