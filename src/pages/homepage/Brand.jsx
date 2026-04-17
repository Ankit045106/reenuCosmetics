import React from 'react';

const Brand = () => {
  const brands = [
    "CHANEL", "DIOR", "MAYBELLINE", "NYKAA", "SWISS BEAUTY", "INSIGHT", "LOREAL", "MAC", "FOREO", "CLINIQUE"
  ];

  return (
    <section className="custom-marquee-wrapper py-4">
      <div className="custom-marquee-container">
        <div className="custom-marquee-content">
          {brands.map((brand, index) => (
            <span key={index} className="custom-marquee-item">{brand}</span>
          ))}
          {brands.map((brand, index) => (
            <span key={`rev-${index}`} className="custom-marquee-item">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;