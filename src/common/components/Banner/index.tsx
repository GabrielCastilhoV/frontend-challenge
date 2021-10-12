import { Container } from './styles';
import { CardBanner } from './CardBanner';
import { HeaderBook } from '../HeaderBook';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

import theme from '@/styles/theme';

export const Banner = () => {
  return (
    <Container>
      <HeaderBook title="Discover new book" nameLink="More" url="/" />

      <Swiper
        className="swiper"
        navigation={false}
        autoplay={{ delay: 8000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: -50,
          },

          500: {
            slidesPerView: 2,
            spaceBetween: 100,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: -50,
          },
        }}
      >
        <SwiperSlide className="swiper-slider">
          <CardBanner
            bg={theme.blue700}
            title="Hooked"
            author="Nir Eyal"
            number={120}
          />
        </SwiperSlide>

        <SwiperSlide className="swiper-slider">
          <CardBanner
            bg={theme.purple700}
            title="The One Thing"
            author="Garry Keller"
            number={90}
            titleIsBig={true}
          />
        </SwiperSlide>

        <SwiperSlide className="swiper-slider">
          <CardBanner
            bg={theme.blue700}
            title="Hooked"
            author="Nir Eyal"
            number={120}
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
