import { Container } from './styles';
import { CardBanner } from './CardBanner';
import { HeaderBook } from '../HeaderBook';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Banner = () => {
  return (
    <Container>
      <HeaderBook title="Discover new book" nameLink="More" url="/" />

      <Swiper
        className="swiper"
        spaceBetween={-50}
        slidesPerView={1}
        navigation={false}
        autoplay={{ delay: 8000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="swiper-slider">
          <CardBanner />
        </SwiperSlide>

        <SwiperSlide className="swiper-slider">
          <CardBanner />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
