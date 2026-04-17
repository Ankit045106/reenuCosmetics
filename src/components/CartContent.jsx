import React, { useState } from 'react';
import { X, Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartContent = ({ onClose }) => {
  const [items, setItems] = useState([
    { id: 1, name: "Silk Foundation Serum", shade: "Sand 02", price: 1499, qty: 1, img: `${import.meta.env.BASE_URL}/assets/p1-a.jpg` },
    { id: 2, name: "Velvet Lip Tint", shade: "Rosewood", price: 899, qty: 1, img: `${import.meta.env.BASE_URL}/assets/p2-a.jpg` }
  ]);

  const updateQty = (id, delta) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className="custom-offcanvas-cart-wrapper">
      {/* Header Section */}
      <div className="custom-offcanvas-cart-header">
        <div className="custom-offcanvas-cart-header-title">
          <h5>Shopping Bag</h5>
          <span>{items.length} Items Selected</span>
        </div>
        <button className="custom-offcanvas-cart-close-btn" onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      {/* Body Section */}
      <div className="custom-offcanvas-cart-body">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="custom-offcanvas-cart-item">
              <div className="custom-offcanvas-cart-item-img">
                <img src={item.img} alt={item.name} />
              </div>
              
              <div className="custom-offcanvas-cart-item-details">
                <div className="d-flex justify-content-between align-items-start">
                  <h6 className="custom-offcanvas-cart-item-name">{item.name}</h6>
                  <button className="custom-offcanvas-cart-item-remove" onClick={() => removeItem(item.id)}>
                    <Trash2 size={15} />
                  </button>
                </div>
                <p className="custom-offcanvas-cart-item-meta">Variant: {item.shade}</p>
                
                <div className="custom-offcanvas-cart-item-actions">
                  <div className="custom-offcanvas-cart-qty-pill">
                    <button onClick={() => updateQty(item.id, -1)}><Minus size={12} /></button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)}><Plus size={12} /></button>
                  </div>
                  <span className="custom-offcanvas-cart-item-price">₹{(item.price * item.qty).toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="custom-offcanvas-cart-empty">
            <div className="custom-offcanvas-cart-empty-icon">
              <ShoppingBag size={32} />
            </div>
            <h4>Your bag is empty</h4>
            <p>Seems like you haven't added anything yet.</p>
            <button className="custom-offcanvas-cart-shop-btn" onClick={onClose}>Start Shopping</button>
          </div>
        )}
      </div>

      {/* Footer Section */}
      {items.length > 0 && (
        <div className="custom-offcanvas-cart-footer">
          <div className="custom-offcanvas-cart-summary">
            <div className="custom-offcanvas-cart-summary-line">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="custom-offcanvas-cart-summary-line highlight">
              <span>Shipping</span>
              <span>Complimentary</span>
            </div>
            <div className="custom-offcanvas-cart-summary-line total">
              <span>Total</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
          </div>
          
          <Link to='/cart' className="custom-offcanvas-cart-checkout-btn text-decoration-none" onClick={onClose}>
            Go to Cart <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartContent;