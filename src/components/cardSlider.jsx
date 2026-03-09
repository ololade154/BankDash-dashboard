import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card } from './card';

const cards = [
  { id: 1, title: 'Balance', amount: '$2000', bgColor: 'bg-blue-500' },
  { id: 2, title: 'Savings', amount: '$1500', bgColor: 'bg-green-500' },
  { id: 3, title: 'Investment', amount: '$5000', bgColor: 'bg-purple-500' },
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
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
