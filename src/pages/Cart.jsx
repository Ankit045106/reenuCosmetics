import React, { useState } from 'react';
import { Trash2, Minus, Plus, ArrowLeft, Ticket, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Silk Foundation Serum Essence", shade: "Sand 02", price: 1499, qty: 1, img: `${import.meta.env.BASE_URL}/assets/p1-a.jpg` },
    { id: 2, name: "Velvet Lip Tint Liquid", shade: "Rosewood", price: 899, qty: 1, img: `${import.meta.env.BASE_URL}/assets/p2-a.jpg` }
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
    <div className="custom-cart-page-wrapper py-5">
      <div className="container">
        <div className="mb-4">
          <button onClick={() => window.history.back()} className="btn btn-link text-decoration-none text-dark fw-bold d-flex align-items-center gap-2 p-0">
            <ArrowLeft size={18} /> Continue Shopping
          </button>
        </div>

        <h2 className="cart-page-title mb-5">Your Bag <span>({items.length})</span></h2>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="cart-items-container">
              {items.length > 0 ? (
                items.map((item) => (
                  <div key={item.id} className="cart-item-row">
                    <div className="cart-item-img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    
                    <div className="cart-item-info">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h3 className="cart-item-name">{item.name}</h3>
                          <p className="cart-item-variant mb-0">Shade: {item.shade}</p>
                        </div>
                        <button className="cart-item-delete" onClick={() => removeItem(item.id)}>
                          <Trash2 size={18} />
                        </button>
                      </div>
                      
                      <div className="cart-item-footer">
                        <div className="cart-qty-pill">
                          <button onClick={() => updateQty(item.id, -1)}><Minus size={14} /></button>
                          <span>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)}><Plus size={14} /></button>
                        </div>
                        <p className="cart-item-total-price m-0">₹{(item.price * item.qty).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-5 bg-white rounded-4 border">
                  <h4 className="text-muted">Your cart is empty</h4>
                  <a href="/shop" className="btn btn-dark mt-3 px-4 rounded-pill">Shop Now</a>
                </div>
              )}
            </div>

            {/* Perks */}
            <div className="row g-3 mt-4">
              <div className="col-md-4">
                <div className="perk-card d-flex align-items-center gap-3">
                  <Truck size={20} className="text-muted" />
                  <div className="text-start perk-card-info">
                    <h6 className="mb-0 text-dark">Free Delivery</h6>
                    <p className="mb-0">On all orders</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="perk-card d-flex align-items-center gap-3">
                  <ShieldCheck size={20} className="text-muted" />
                  <div className="text-start perk-card-info">
                    <h6 className="mb-0 text-dark">Secure</h6>
                    <p className="mb-0">Payment protected</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="perk-card d-flex align-items-center gap-3">
                  <Ticket size={20} className="text-muted" />
                  <div className="text-start perk-card-info">
                    <h6 className="mb-0 text-dark">Easy Return</h6>
                    <p className="mb-0">30-day policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="col-lg-4">
            <div className="cart-summary-card shadow-sm">
              <h4 className="summary-title mb-4">Summary</h4>
              <div className="summary-details">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Subtotal</span>
                  <span className="fw-bold">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Shipping</span>
                  <span className="text-success fw-bold">Free</span>
                </div>
                <hr className="my-3" />
                <div className="d-flex justify-content-between total-row">
                  <span>Grand Total</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
              </div>
              <Link to='/checkout' className="btn btn-dark w-100 mt-4 py-2 fw-bold rounded-1 shadow">
                Checkout Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;