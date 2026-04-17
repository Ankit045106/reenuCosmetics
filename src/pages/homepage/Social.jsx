import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Instagram } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

const Social = () => {
  const images = [
    `${import.meta.env.BASE_URL}/assets/insta1.jpg`,
    `${import.meta.env.BASE_URL}/assets/insta2.jpg`,
    `${import.meta.env.BASE_URL}/assets/insta3.jpg`,
    `${import.meta.env.BASE_URL}/assets/insta4.jpg`,
    `${import.meta.env.BASE_URL}/assets/insta5.jpg`,
    `${import.meta.env.BASE_URL}/assets/insta6.jpg`,
    `${import.meta.env.BASE_URL}/assets/insta7.jpg`
  ];

  return (
    <section className="custom-insta-swiper-section pt-5">
      <div className="container">
        <div className="custom-insta-swiper-header text-center">
          <span className="custom-insta-tag">@glow_botanics</span>
          <h2 className="custom-insta-title">Follow Us on Instagram</h2>
        </div>
      </div>

      <div className="custom-insta-swiper-container">
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          loop={true}
          freeMode={true}
          speed={4000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1440: { slidesPerView: 6 },
          }}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="custom-insta-mini-card">
                <img src={img} alt={`Glow Insta ${index}`} />
                <div className="custom-insta-mini-overlay">
                  <Instagram size={38} color="white" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Social;