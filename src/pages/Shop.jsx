import React, { useState, useMemo, useRef, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { ChevronDown, Check } from 'lucide-react';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('latest');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const dropdownRef = useRef(null);

  const initialProducts = [
    {
      id: 1,
      name: "Silk Foundation",
      price: 1499, 
      tag: "Best Seller",
      category: "Tools",
      rating: 5,
      img: `${import.meta.env.BASE_URL}/assets/p1-a.jpg`,
      hoverImg: `${import.meta.env.BASE_URL}/assets/p1-b.jpg`,
    },
    {
      id: 2,
      name: "Matte Lipstick",
      price: 799,
      tag: "New",
      category: "Tools",
      rating: 4,
      img: `${import.meta.env.BASE_URL}/assets/p2-a.jpg`,
      hoverImg: `${import.meta.env.BASE_URL}/assets/p2-b.jpg`,
    },
    {
      id: 3,
      name: "Rose Glow Oil",
      price: 1199,
      tag: "Organic",
      category: "Oils",
      rating: 5,
      img: `${import.meta.env.BASE_URL}/assets/p3-a.jpg`,
      hoverImg: `${import.meta.env.BASE_URL}/assets/p3-b.jpg`,
    },
    {
      id: 4,
      name: "Luxe Mascara",
      price: 999,
      tag: "Trending",
      category: "Tools",
      rating: 4,
      img: `${import.meta.env.BASE_URL}/assets/p4-a.jpg`,
      hoverImg: `${import.meta.env.BASE_URL}/assets/p4-b.jpg`,
    },
    {
      id: 5,
      name: "Concealer Pro",
      price: 1499,
      tag: "Best Seller",
      category: "Moisturizers",
      rating: 5,
      img: `${import.meta.env.BASE_URL}/assets/p5-a.jpg`,
      hoverImg: `${import.meta.env.BASE_URL}/assets/p5-b.jpg`,
    },
    {
      id: 6,
      name: "Compact Powder",
      price: 799,
      tag: "New",
      category: "Cleansers",
      rating: 4,
      img: `${import.meta.env.BASE_URL}/assets/p6-a.jpg`,
      hoverImg: `${import.meta.env.BASE_URL}/assets/p6-b.jpg`,
    },
    {
      id: 7,
      name: "Blush On",
      price: 1499,
      tag: "Best Seller",
      category: "Tools",
      rating: 5,
      img: `${import.meta.env.BASE_URL}/assets/p7-a.jpg`,
      hoverImg: `${import.meta.env.BASE_URL}/assets/p7-b.jpg`,
    },
    {
      id: 8,
      name: "Highlighter Stick",
      price: 799,
      tag: "New",
      category: "Serums",
      rating: 4,
      img: `${import.meta.env.BASE_URL}/assets/p8-a.jpg`,
      hoverImg: `${import.meta.env.BASE_URL}/assets/p8-b.jpg`,
    },
  ];

  const categories = ["All", "Serums", "Moisturizers", "Oils", "Tools", "Cleansers"];

  const sortLabels = {
    latest: "Latest Arrivals",
    lowToHigh: "Price: Low to High",
    highToLow: "Price: High to Low",
    name: "Alphabetical"
  };

  // Close dropdown logic... (same as your code)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 2. Filter & Sort Logic (Optimized)
  const processedProducts = useMemo(() => {
    // Pehle filter karo category ke basis par
    let filtered = initialProducts.filter(p => 
      activeCategory === 'All' ? true : p.category === activeCategory
    );

    // Phir sort karo price ya name ke basis par
    if (sortOption === 'lowToHigh') filtered.sort((a, b) => a.price - b.price);
    if (sortOption === 'highToLow') filtered.sort((a, b) => b.price - a.price);
    if (sortOption === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
    
    return filtered;
  }, [activeCategory, sortOption]);

  return (
    <main className="custom-shop-page">
      <header className="custom-shop-hero">
        <div className="container">
          <span className="custom-shop-subtitle">Curated Skincare</span>
          <h1 className="custom-shop-main-title">The Boutique</h1>
        </div>
      </header>

      <div className="container py-5">
        <div className="row g-4">
          
          <aside className="col-lg-3 custom-shop-sidebar">
            <div className="custom-shop-filter-group">
              <h5 className="custom-shop-filter-title">Categories</h5>
              <ul className="custom-shop-cat-list">
                {categories.map(cat => (
                  <li 
                    key={cat} 
                    className={activeCategory === cat ? 'active' : ''}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="custom-shop-filter-group mt-5">
              <h5 className="custom-shop-filter-title">Price Range</h5>
              <div className="custom-shop-price-range">
                <span>₹0</span>
                <span>₹5,000+</span>
              </div>
              <input type="range" className="custom-shop-range-input" min="0" max="5000" />
            </div>
          </aside>

          <div className="col-lg-9 mt-0">
            <div className="custom-shop-toolbar">
              <p className="custom-shop-count">Showing {processedProducts.length} Products</p>
              
              {/* Premium Custom Dropdown */}
              <div className="custom-sort-wrapper" ref={dropdownRef}>
                <div 
                  className={`custom-sort-trigger ${isSortOpen ? 'active' : ''}`}
                  onClick={() => setIsSortOpen(!isSortOpen)}
                >
                  <span>Sort by: <strong>{sortLabels[sortOption]}</strong></span>
                  <ChevronDown size={16} className={`chevron ${isSortOpen ? 'rotate' : ''}`} />
                </div>

                {isSortOpen && (
                  <div className="custom-sort-dropdown">
                    {Object.entries(sortLabels).map(([key, label]) => (
                      <div 
                        key={key} 
                        className={`sort-option ${sortOption === key ? 'selected' : ''}`}
                        onClick={() => {
                          setSortOption(key);
                          setIsSortOpen(false);
                        }}
                      >
                        {label}
                        {sortOption === key && <Check size={14} strokeWidth={3} />}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="row g-2">
              {processedProducts.map((product, index) => (
                <div className="col-6 col-md-4" key={product.id}>
                  <ProductCard product={product} index={index} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="custom-shop-pagination mt-5 text-center">
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};
export default Shop;