import React, { useState } from "react";
import {
  Settings,
  Package,
  Heart,
  MapPin,
  LogOut,
  ShieldCheck,
  Ticket,
  Clock,
  CreditCard,
  Edit2,
} from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="profile-page-wrapper">
      <div className="container py-5">
        <div className="row g-4">
          {/* Left Column: Navigation Sidebar */}
          <div className="col-lg-3">
            <div className="profile-sidebar-card">
              <div className="profile-user-info text-center">
                <div className="avatar-wrapper">
                  <img src={`${import.meta.env.BASE_URL}/assets/user1.jpg`} alt="Profile" />
                </div>
                <h4 className="mt-3 mb-1">Jiya Sharma</h4>
                <p className="membership-badge">
                  <ShieldCheck size={14} /> Platinum Member
                </p>
              </div>

              <nav className="profile-nav-links mt-4">
                <button
                  className={`nav-link-item ${
                    activeTab === "dashboard" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  <Package size={18} /> Dashboard
                </button>
                <button
                  className={`nav-link-item ${
                    activeTab === "orders" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("orders")}
                >
                  <Clock size={18} /> My Orders
                </button>
                <button
                  className={`nav-link-item ${
                    activeTab === "address" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("address")}
                >
                  <MapPin size={18} /> Saved Addresses
                </button>
                <button
                  className={`nav-link-item ${
                    activeTab === "settings" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings size={18} /> Settings
                </button>
                <div className="logout-divider"></div>
                <button className="nav-link-item logout-btn text-danger">
                  <LogOut size={18} /> Sign Out
                </button>
              </nav>
            </div>
          </div>

          {/* Right Column: Tab Content */}
          <div className="col-lg-9">
            {/* Top Stats - Inhe hamesha dikhate hain ya sirf dashboard pe, choice aapki hai */}
            <div className="row g-3 mb-4">
              <div
                className="col-md-4"
                onClick={() => setActiveTab("orders")}
                style={{ cursor: "pointer" }}
              >
                <div
                  className={`stat-box-mini rose-gradient ${
                    activeTab === "orders" ? "selected" : ""
                  }`}
                >
                  <div className="d-flex justify-content-between">
                    <span>Orders</span> <Package size={20} opacity={0.9} />
                  </div>
                  <h3>12</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="stat-box-mini mint-gradient">
                  <div className="d-flex justify-content-between">
                    <span>Wishlist</span> <Heart size={20} opacity={0.9} />
                  </div>
                  <h3>24</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="stat-box-mini lavender-gradient">
                  <div className="d-flex justify-content-between">
                    <span>Coupons</span> <Ticket size={20} opacity={0.9} />
                  </div>
                  <h3>04</h3>
                </div>
              </div>
            </div>

            {/* Render Content Based on Active Tab */}
            <div className="tab-content-area animate-fade-in">
              {activeTab === "dashboard" && (
                <div className="dashboard-view">
                  <h3 className="tab-title">Welcome back, Jiya!</h3>
                  <p className="text-muted">
                    Here's what's happening with your account today.
                  </p>
                  <div className="feature-box p-4 mt-4 bg-white border rounded-4">
                    <h5>Premium Benefits</h5>
                    <p className="small text-muted">
                      You have 1500 points. Redeem them for a 20% discount on
                      your next luxury purchase.
                    </p>
                    <button className="btn btn-dark btn-sm rounded-pill px-4">
                      Redeem Now
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "orders" && (
                <div className="orders-view">
                  <h3 className="tab-title">Your Orders</h3>
                  <div className="order-list mt-4">
                    {[1, 2, 3].map((item) => (
                      <div
                        className="order-item-card mb-3 p-3 border rounded-4 d-flex align-items-center gap-3"
                        key={item}
                      >
                        <img
                          src={`${import.meta.env.BASE_URL}/assets/p${item}-a.jpg`}
                          width="60"
                          className="rounded-3"
                          alt=""
                        />
                        <div className="flex-grow-1">
                          <h6 className="mb-0">Luxe Silk Foundation</h6>
                          <small className="text-muted">
                            Status:{" "}
                            <span className="text-success">Delivered</span>
                          </small>
                        </div>
                        <button className="btn btn-outline-dark btn-sm rounded-pill">
                          View Details
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "address" && (
                <div className="address-view">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="tab-title m-0">Saved Addresses</h3>
                    <button className="btn btn-dark btn-sm rounded-pill">
                      + Add New
                    </button>
                  </div>
                  <div className="address-card p-4 border rounded-4 bg-light">
                    <div className="d-flex justify-content-between">
                      <span className="badge bg-dark mb-2">Home</span>
                      <Edit2 size={16} className="text-muted cursor-pointer" />
                    </div>
                    <p className="mb-1 fw-bold">Jiya Sharma</p>
                    <p className="text-muted small m-0">
                      KD3 Kohat Enclave, Pitampura, New Delhi
                    </p>
                    <p className="text-muted small">Phone: +91 98765 43210</p>
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="settings-view">
                  <h3 className="tab-title">Account Settings</h3>
                  <div className="mt-4">
                    <div className="mb-3">
                      <label className="form-label small fw-bold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-3"
                        defaultValue="Jiya Sharma"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label small fw-bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control rounded-3"
                        defaultValue="axepertexhibits@gmail.com"
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label small fw-bold">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control rounded-3"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label small fw-bold">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control rounded-3"
                        />
                      </div>
                    </div>
                    <button className="btn btn-dark rounded-3 px-4">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
