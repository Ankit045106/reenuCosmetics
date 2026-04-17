import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      text: "The texture is unlike anything I've ever used. It literally melts into your skin. After 2 weeks, my glow is undeniable.",
      author: "Elena Gilbert",
      role: "Skincare Enthusiast",
      img: `${import.meta.env.BASE_URL}/assets/user1.jpg`,
      rating: 5
    },
    {
      id: 2,
      text: "As someone with sensitive skin, finding a serum that works without irritation is rare. This is my holy grail now.",
      author: "Sarah J. Parker",
      role: "Beauty Editor",
      img: `${import.meta.env.BASE_URL}/assets/user2.jpg`,
      rating: 5
    },
     {
      id: 3,
      text: "The texture is unlike anything I've ever used. It literally melts into your skin. After 2 weeks, my glow is undeniable.",
      author: "Elena Gilbert",
      role: "Skincare Enthusiast",
      img: `${import.meta.env.BASE_URL}/assets/user3.jpg`,
      rating: 5
    },
     {
      id: 4,
      text: "The texture is unlike anything I've ever used. It literally melts into your skin. After 2 weeks, my glow is undeniable.",
      author: "Elena Gilbert",
      role: "Skincare Enthusiast",
      img: `${import.meta.env.BASE_URL}/assets/user4.jpg`,
      rating: 5
    }
  ];

  return (
    <section className="custom-testimonial-wrapper ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect={'fade'}
        speed={1000}
        autoplay={{ delay: 5000 }}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="custom-testimonial-swiper"
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="custom-testimonial-slide-content">
              
              {/* Left Side: Visual Story */}
              <div className="custom-testimonial-visual">
                <img src={item.img} alt={item.author} className="custom-testimonial-main-img" />
                <div className="custom-testimonial-visual-overlay"></div>
              </div>

              {/* Right Side: Glass Content Card */}
              <div className="custom-testimonial-info-side">
                <div className="custom-testimonial-glass-box">
                  <Quote className="custom-testimonial-quote-icon" size={50} />
                  
                  <div className="custom-testimonial-rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="var(--accent-coral)" stroke="none" />
                    ))}
                  </div>

                  <h2 className="custom-testimonial-main-text">"{item.text}"</h2>
                  
                  <div className="custom-testimonial-profile">
                    <div className="custom-testimonial-line"></div>
                    <div className="custom-testimonial-details">
                      <h4 className="custom-testimonial-author-name">{item.author}</h4>
                      <p className="custom-testimonial-author-role">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;