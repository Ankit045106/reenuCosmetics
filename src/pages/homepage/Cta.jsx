import React from 'react';
import { ArrowRight } from 'lucide-react';

const Cta = () => {
  const steps = [
    {
      num: "01",
      title: "The Cleanse",
      desc: "Remove impurities while maintaining your skin's natural pH balance.",
      img: `${import.meta.env.BASE_URL}/assets/cta1.jpg`,
      cta: "Shop Cleansers"
    },
    {
      num: "02",
      title: "The Treatment",
      desc: "High-potency botanical serums designed to target deep skin concerns.",
      img: `${import.meta.env.BASE_URL}/assets/cta2.jpg`,
      cta: "Shop Serums"
    },
    {
      num: "03",
      title: "The Hydration",
      desc: "Lock in moisture with our signature velvet-finish creams.",
      img: `${import.meta.env.BASE_URL}/assets/cta3.jpg`,
      cta: "Shop Moisturisers"
    }
  ];

  return (
    <section className="custom-routine-section py-5">
      <div className="container">
        

         <div className="custom-title-header">
                  <div className="custom-heading-title-group">
                    <span className="custom-heading-subtitle">Expert Curation</span>
                    <h2 className="custom-heading-main-title">Build Your Ritual</h2>
                  </div>
                  <a href="/shop" className="custom-heading-view-all">
                    View All Collections <ArrowRight size={18} />
                  </a>
                </div>
        
        <div className="row g-3">
          {steps.map((step) => (
            <div className="col-md-4" key={step.num}>
              <div className="custom-routine-cta-card">
                <div className="custom-routine-visual-box">
                  <img src={step.img} alt={step.title} className="custom-routine-img" />
                  <div className="custom-routine-number-overlay">{step.num}</div>
                </div>
                
                <div className="custom-routine-info-box">
                  <h3 className="custom-routine-step-name">{step.title}</h3>
                  <p className="custom-routine-step-text">{step.desc}</p>
                  
                  {/* The Main CTA Button */}
                  <button className="custom-routine-action-btn">
                    {step.cta} <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cta;