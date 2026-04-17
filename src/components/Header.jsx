import React, { useEffect, useState } from "react";
import { Search, User, ShoppingBag, Menu, X, Heart } from "lucide-react";
import CartContent from "./CartContent";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen]);

  return (
    <header className="custom-header-wrapper">
      {/* Announcement Bar */}
      <div className="custom-header-topbar d-none d-md-block">
        <p className="m-0">Luxe Collection: Use Code ELEGANCE20 for 20% Off</p>
      </div>

      <nav className="custom-header-main">
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
            {/* Mobile Menu Toggle (Left on Mobile) */}
            <div className="col-2 d-lg-none">
              <button
                className="custom-header-icon-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Navigation Links (Desktop Left) */}
            <div className="col-lg-4 d-none d-lg-block">
              <ul className="custom-header-nav-list">
                <li >
                  <Link to="/shop" className="custom-header-link"  >
                    New In
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="custom-header-link">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="custom-header-link">
                    Best Sellers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Center Logo */}
            <div className="col-8 col-lg-4 text-center">
              <Link to="/" className="custom-header-logo">
                ELÉGANCE<span className="custom-header-dot">.</span>
              </Link>
            </div>

            {/* Right Icons */}
            <div className="col-2 col-lg-4 d-flex justify-content-end align-items-center gap-2 gap-md-3">
              <div
                className={`custom-header-search-bar d-none d-md-flex ${
                  isSearchActive ? "active" : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  onFocus={() => setIsSearchActive(true)}
                  onBlur={() => setIsSearchActive(false)}
                />
                <Search size={20} />
              </div>

              <button className="custom-header-icon-btn">
                <Link to="/login" className="custom-header-icon-btn">
                  <User size={20} />
                </Link>
              </button>

              <button
                className="custom-header-icon-btn custom-header-cart"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag size={20} />
                <span className="custom-header-badge">3</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`custom-header-mobile-menu ${
          isMobileMenuOpen ? "open" : ""
        }`}
      >
        <ul className="list-unstyled p-4">
          <li>
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>
              New In
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>
              Collections
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>
              Bestsellers
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
              My Account
            </Link>
          </li>
        </ul>
      </div>

      {/* cart offcanvas */}
      <div
        className={`custom-cart-overlay ${isCartOpen ? "active" : ""}`}
        onClick={() => setIsCartOpen(false)}
      ></div>
      <div className={`custom-cart-drawer ${isCartOpen ? "open" : ""}`}>
        <CartContent onClose={() => setIsCartOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
