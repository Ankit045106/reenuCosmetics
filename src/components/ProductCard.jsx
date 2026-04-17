import React from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, index }) => {
  return (
    <Link to='/detail-page' className="custom-product-card-container text-decoration-none">
      <div className="custom-product-card-visual-wrapper">
        {/* Subtle Background Number */}
        <span className="custom-product-card-index">0{index + 1}</span>
        
        <div className="custom-product-card-image-hold">
          {/* Main Product Image */}
          <img 
            src={product.img} 
            alt={product.name} 
            className="custom-product-card-img-base" 
          />
          
          {/* Texture/Hover Image */}
          <img 
            src={product.hoverImg || "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=600"} 
            alt="Texture Reveal" 
            className="custom-product-card-img-reveal" 
          />

          {/* Floating Action */}
          <div className="custom-product-card-actions">
            <button className="custom-product-card-btn-quick">
              <Plus size={14} strokeWidth={3} /> Quick Add
            </button>
          </div>
        </div>
      </div>

      <div className="custom-product-card-info-box">
        <div className="custom-product-card-header">
          <h3 className="custom-product-card-title">{product.name}</h3>
          <span className="custom-product-card-price">{product.price}</span>
        </div>
        
        <div className="custom-product-card-footer">
          <span className="custom-product-card-tag">{product.tag || 'Bestseller'}</span>
          <div className="custom-product-card-progress-bar">
            <div className="custom-product-card-progress-fill"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;