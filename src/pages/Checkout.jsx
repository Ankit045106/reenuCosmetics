import React, { useState } from "react";
import { ArrowLeft, ShieldCheck, Lock, CreditCard, Home, ArrowRight, CheckCircle2 } from "lucide-react";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", address: "", city: "", pincode: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="custom-checkout-wrapper py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="checkout-main-content">
              <button onClick={() => window.history.back()} className="back-btn mb-4">
                <ArrowLeft size={18} /> Back to Cart
              </button>

              <h2 className="checkout-title mb-4">Checkout</h2>

              {/* Step 1: Shipping Address */}
              <div className={`checkout-section ${step === 1 ? "active" : "completed shadow-sm p-4 border rounded-4 mb-3 bg-white"}`}>
                <div className="section-header d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="step-num">{step > 1 ? <CheckCircle2 size={20} /> : "1"}</div>
                    <h4 className="m-0">Shipping Address</h4>
                  </div>
                  {step > 1 && <button className="btn btn-sm btn-link text-dark fw-bold text-decoration-none" onClick={() => setStep(1)}>Change</button>}
                </div>

                {step === 1 ? (
                  <div className="row g-3 animate-fade-in">
                    <div className="col-md-6">
                      <label className="form-label">First Name</label>
                      <input type="text" name="firstName" className="form-control custom-input" placeholder="Jiya" onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Last Name</label>
                      <input type="text" name="lastName" className="form-control custom-input" placeholder="Sharma" onChange={handleInputChange} />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Email Address</label>
                      <input type="email" name="email" className="form-control custom-input" placeholder="axepertexhibits@gmail.com" onChange={handleInputChange} />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Full Address</label>
                      <input type="text" name="address" className="form-control custom-input" placeholder="KD3 Pitampura, New Delhi." onChange={handleInputChange} />
                    </div>
                    <div className="col-12 mt-4">
                      <button className="btn btn-dark w-100 py-3 rounded-pill fw-bold" onClick={() => setStep(2)}>
                        Proceed to Payment
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-muted small ms-5 animate-fade-in">
                    {/* Default values if fields are empty */}
                    <strong>{formData.firstName || "Guest"} {formData.lastName || "User"}</strong> <br />
                    {formData.email || "axepertexhibits@gmail.com"} <br />
                    {formData.address || "Default Shipping Address, India"}
                  </div>
                )}
              </div>

              {/* Step 2: Payment Method - Only shows when step is 2 */}
              {step === 2 && (
                <div className="checkout-section mt-4 active animate-fade-in">
                  <div className="section-header d-flex align-items-center gap-3 mb-4">
                    <div className="step-num">2</div>
                    <h4 className="m-0">Payment Method</h4>
                  </div>

                  <div className="payment-container">
                    <div className="payment-method-grid mb-4">
                      <div className={`payment-method-card ${paymentMethod === 'card' ? 'active' : ''}`} onClick={() => setPaymentMethod('card')}>
                        <CreditCard size={20} />
                        <span>Card</span>
                      </div>
                      <div className={`payment-method-card ${paymentMethod === 'upi' ? 'active' : ''}`} onClick={() => setPaymentMethod('upi')}>
                        <div className="upi-icon-placeholder">UPI</div>
                        <span>UPI</span>
                      </div>
                      <div className={`payment-method-card ${paymentMethod === 'netbanking' ? 'active' : ''}`} onClick={() => setPaymentMethod('netbanking')}>
                        <Home size={20} />
                        <span>Banking</span>
                      </div>
                    </div>

                    {paymentMethod === 'card' && (
                      <div className="card-details-box p-4 border rounded-4 bg-white shadow-sm animate-fade-in">
                        <div className="row g-3">
                          <div className="col-12">
                            <input type="text" className="form-control custom-input" placeholder="Cardholder Name" />
                          </div>
                          <div className="col-12">
                            <div className="position-relative">
                              <input type="text" className="form-control custom-input" placeholder="Card Number" />
                              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="position-absolute top-50 end-0 translate-middle-y me-3" width="30" />
                            </div>
                          </div>
                          <div className="col-6"><input type="text" className="form-control custom-input" placeholder="MM / YY" /></div>
                          <div className="col-6"><input type="password" className="form-control custom-input" placeholder="CVV" /></div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'upi' && (
                      <div className="p-4 border rounded-4 bg-light text-center animate-fade-in">
                        <input type="text" className="form-control custom-input text-center mb-2" placeholder="yourname@upi" />
                        <p className="extra-small text-muted m-0">Pay using any UPI app</p>
                      </div>
                    )}

                    <div className="mt-4">
                      <button className="btn btn-dark w-100 py-3 fw-bold rounded-pill d-flex align-items-center justify-content-center gap-2">
                        Pay ₹1,499 <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="col-lg-5">
            <div className="checkout-summary-card p-4 shadow-sm border-0">
                <h5 className="mb-4 fw-bold">Order Summary</h5>
                <div className="mini-product-list mb-4">
                    <div className="d-flex gap-3 align-items-center">
                        <div className="mini-img border"><img className="object-fit-cover" src={`${import.meta.env.BASE_URL}/assets/p1-a.jpg`} alt="p" /></div>
                        <div className="flex-grow-1">
                            <p className="m-0 fw-bold small">Silk Foundation Essence</p>
                            <p className="m-0 text-muted extra-small">Quantity: 1</p>
                        </div>
                        <span className="fw-bold small">₹1,499</span>
                    </div>
                </div>
                <div className="summary-billing pt-3 border-top">
                    <div className="d-flex justify-content-between mb-2 small text-muted"><span>Subtotal</span><span>₹1,499.00</span></div>
                    <div className="d-flex justify-content-between mb-3 small text-muted"><span>Shipping</span><span className="text-success fw-bold">FREE</span></div>
                    <div className="d-flex justify-content-between align-items-center border-top pt-3">
                        <span className="fw-bold">Total Amount</span>
                        <span className="fw-bold h4 mb-0">₹1,499.00</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;