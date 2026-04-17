import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";

// Swiper Styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: `${import.meta.env.BASE_URL}/assets/hero1.jpg`,
      title: "Radiant Skin",
      subtitle: "Nature's Secret",
    },
    {
      id: 2,
      image: `${import.meta.env.BASE_URL}/assets/hero2.jpg`,
      title: "Pure Glow",
      subtitle: "Botanical Magic",
    },
    {
      id: 3,
      image: `${import.meta.env.BASE_URL}/assets/hero4.png`,
      title: "Velvet Touch",
      subtitle: "Ethical Luxury",
    },
  ];

  return (
    <section className="custom-hero-slider">
      <div className="custom-hero-slider-wrapper">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="custom-hero-slide-content">
                {/* Background Image with Overlay */}
                <div className="custom-hero-bg-overlay">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="custom-hero-img"
                  />
                </div>

                {/* Text Content Overlay */}
                <div className="container custom-hero-container">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="custom-hero-info">
                        <span className="custom-hero-pre">
                          {slide.subtitle}
                        </span>
                        <h1 className="custom-hero-main-h">
                          {slide.title.split(" ")[0]} <br />
                          <span className="custom-hero-serif">
                            {slide.title.split(" ")[1]}
                          </span>
                        </h1>
                        <p className="custom-hero-desc">
                          Discover the science of botanical beauty with our new
                          winter collection. Hand-crafted for your unique skin.
                        </p>
                        <div className="custom-hero-btn-wrap">
                          <button className="custom-hero-btn-primary">
                            Shop Now <ArrowRight size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
