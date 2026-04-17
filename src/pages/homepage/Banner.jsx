import React from 'react';

const Banner = () => {
  return (
    <section className="custom-banner-wrapper">
      {/* Background with Parallax Effect */}
      <div className="custom-banner-parallax-bg">
        <div className="custom-banner-overlay"></div>
        
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              {/* The "Floating Glass" Card */}
              <div className="custom-banner-glass-card">
                <span className="custom-banner-tag">The Science of Glow</span>
                <h2 className="custom-banner-title">
                  Pure <br /> 
                  <span className="custom-banner-title-serif">Botanical</span> <br />
                  Radiance
                </h2>
                <p className="custom-banner-description">
                  Humne nature ke sabse powerful ingredients ko modern science ke saath mix kiya hai. 
                  Sirf ek product nahi, ye aapki skin ke liye ek luxury ritual hai.
                </p>
                <div className="custom-banner-actions">
                  <button className="custom-banner-btn-main">Discover Now</button>
                  <button className="custom-banner-btn-ghost">Watch the Story</button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 d-none d-lg-block">
               {/* Decorative Rotating Element */}
               <div className="custom-banner-rotating-text">
                  <svg viewBox="0 0 100 100" width="160" height="160">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent"/>
                    <text font-family="var(--font-secondary)" font-size="7.5" letter-spacing="2.5">
                      <textPath xlinkHref="#circlePath">
                        100% ORGANIC • DERMATOLOGICALLY TESTED • 100% ORGANIC • 
                      </textPath>
                    </text>
                  </svg>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;