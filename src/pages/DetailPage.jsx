import React, { useState } from 'react';
import { Minus, Plus, ShoppingBag, Heart, Star, ShieldCheck, Truck, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';

const DetailPage = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [qty, setQty] = useState(1);
  
  // State for Accordion
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const images = [
    `${import.meta.env.BASE_URL}/assets/detail1.webp`,
    `${import.meta.env.BASE_URL}/assets/detail2.webp`,
    `${import.meta.env.BASE_URL}/assets/detail3.webp`,
    `${import.meta.env.BASE_URL}/assets/detail4.webp`

  ];

  const products = [
    {
      id: 1,
      name: "Silk Foundation",
      price: "₹1,499",
      tag: "Best Seller",
      rating: 5,
      img: `${import.meta.env.BASE_URL}/assets/p1-a.jpg`,
      hoverImg: `${import.meta.env.BASE_URL}/assets/p1-b.jpg`,
    },
    {
      id: 2,
      name: "Matte Lipstick",
      price: "₹799",
      tag: "New",
      rating: 4,
      img: `${import.meta.env.BASE_URL}/assets/p2-a.jpg`,
      hoverImg: `${import.meta.env.BASE_URL}/assets/p2-b.jpg`,
    },
    {
      id: 3,
      name: "Rose Glow Oil",
      price: "₹1,199",
      tag: "Organic",
      rating: 5,
      img: `${import.meta.env.BASE_URL}/assets/p3-a.jpg`,
      hoverImg: `${import.meta.env.BASE_URL}/assets/p3-b.jpg`,
    },
    {
      id: 4,
      name: "Luxe Mascara",
      price: "₹999",
      tag: "Trending",
      rating: 4,
      img: `${import.meta.env.BASE_URL}/assets/p4-a.jpg`,
      hoverImg: `${import.meta.env.BASE_URL}/assets/p4-b.jpg`,
    },    
  ];

  return (
    <>
   
    <div className="custom-detailpage-section py-md-5 py-2 border-bottom">
      <div className="container">
        <div className="custom-detailpage-card">
          <div className="row g-md-4 g-2">
            
            {/* Left Column: Visuals */}
            <div className="col-lg-6">
              <div className="custom-detailpage-gallery">
                <div className="custom-detailpage-main-frame">
                  <img src={images[selectedImg]} alt="Product" />
                </div>
                <div className="custom-detailpage-thumbs">
                  {images.map((img, i) => (
                    <div 
                      key={i} 
                      className={`custom-detailpage-thumb-item ${selectedImg === i ? 'active' : ''}`}
                      onClick={() => setSelectedImg(i)}
                    >
                      <img src={img} alt="thumb" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Info */}
            <div className="col-lg-6">
              <div className="custom-detailpage-info">
                <div className="custom-detailpage-top-bar">
                  <span className="custom-detailpage-tag">In Stock</span>
                  <div className="custom-detailpage-stars">
                    <Star size={14} fill="#FFD700" color="#FFD700" />
                    <Star size={14} fill="#FFD700" color="#FFD700" />
                    <Star size={14} fill="#FFD700" color="#FFD700" />
                    <Star size={14} fill="#FFD700" color="#FFD700" />
                    <Star size={14} color="#D1D1D1" />
                    <span>(1.2k)</span>
                  </div>
                </div>

                <h1 className="custom-detailpage-title">Silk Foundation <br/> <span>Serum Essence</span></h1>
                <p className="custom-detailpage-price">₹1,499.00</p>
                
                <div className="custom-detailpage-divider"></div>

                <p className="custom-detailpage-desc">
                  A high-performance serum foundation that combines the power of botanical oils for a flawless, second-skin finish.
                </p>

                {/* Actions */}
                <div className="custom-detailpage-options">
                  <div className="custom-detailpage-qty">
                    <button onClick={() => setQty(Math.max(1, qty - 1))}><Minus size={16}/></button>
                    <input type="text" value={qty} readOnly />
                    <button onClick={() => setQty(qty + 1)}><Plus size={16}/></button>
                  </div>
                  
                  <button className="custom-detailpage-add-btn">
                    <ShoppingBag size={18} /> Add to Cart
                  </button>
                </div>

                {/* Functional Accordion Section */}
                <div className="custom-detailpage-accordion-container">
                  
                  {/* Ingredient Accordion */}
                  <div className={`custom-detailpage-acc-item ${openAccordion === 'ing' ? 'open' : ''}`}>
                    <button className="custom-detailpage-acc-btn" onClick={() => toggleAccordion('ing')}>
                      Product Ingredients 
                      <ChevronDown size={18} className="acc-chevron" />
                    </button>
                    <div className="custom-detailpage-acc-content">
                      <p>Aqua, Glycerin, Rosa Damascena Flower Water, Squalane, Vitamin E, Botanical Extracts, and Silk Proteins. 100% Vegan and Paraben-free.</p>
                    </div>
                  </div>

                  {/* Usage Guide Accordion */}
                  <div className={`custom-detailpage-acc-item ${openAccordion === 'usage' ? 'open' : ''}`}>
                    <button className="custom-detailpage-acc-btn" onClick={() => toggleAccordion('usage')}>
                      Usage Guide 
                      <ChevronDown size={18} className="acc-chevron" />
                    </button>
                    <div className="custom-detailpage-acc-content">
                      <p>Apply 2-3 drops to your face using your fingertips or a beauty blender. Blend outwards for a natural, dewy finish.</p>
                    </div>
                  </div>

                </div>

                <div className="custom-detailpage-perks mt-4">
                  <div className="perk-item"><Truck size={18} /> <span>Free Express Delivery</span></div>
                  <div className="perk-item"><ShieldCheck size={18} /> <span>Authenticity Guaranteed</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
{/* related products */}
 <section className="custom-related products py-3">
      <div className="container">
        {/* Header Section: Left Title, Right View All */}
        <div className="custom-title-header">
          <div className="custom-heading-title-group">
            <span className="custom-heading-subtitle">Just Landed</span>
            <h2 className="custom-heading-main-title">Related Products</h2>
          </div>
          <a href="/shop" className="custom-heading-view-all">
            View All Collections <ArrowRight size={18} />
          </a>
        </div>

        <div className="row g-2">
          {products.map((product) => (
            <div className="col-md-6 col-lg-3 col-6" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>

     </>
  );
};

export default DetailPage;