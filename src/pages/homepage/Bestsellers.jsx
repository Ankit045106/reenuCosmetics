import React from "react";
import ProductCard from "../../components/ProductCard";
import { ArrowRight } from "lucide-react";

const BestSellers = () => {
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
    {
      id: 5,
      name: "Concealer Pro",
      price: "₹1,499",
      tag: "Best Seller",
      rating: 5,
      img: `${import.meta.env.BASE_URL}/assets/p5-a.jpg`,
      hoverImg: `${import.meta.env.BASE_URL}/assets/p5-b.jpg`,
    },
    {
      id: 6,
      name: "Compact Powder",
      price: "₹799",
      tag: "New",
      rating: 4,
      img: `${import.meta.env.BASE_URL}/assets/p6-a.jpg`,
      hoverImg: `${import.meta.env.BASE_URL}/assets/p6-b.jpg`,
    },
    {
      id: 7,
      name: "Blush On",
      price: "₹1,499",
      tag: "Best Seller",
      rating: 5,
      img: `${import.meta.env.BASE_URL}/assets/p7-a.jpg`,
      hoverImg: `${import.meta.env.BASE_URL}/assets/p7-b.jpg`,
    },
    {
      id: 8,
      name: "Highlighter Stick",
      price: "₹799",
      tag: "New",
      rating: 4,
      img: `${import.meta.env.BASE_URL}/assets/p8-a.jpg`,
      hoverImg: `${import.meta.env.BASE_URL}/assets/p8-b.jpg`,
    },
  ];

  return (
    <section className="custom-best-sellers py-5">
      <div className="container">
        {/* Header Section: Left Title, Right View All */}
        <div className="custom-title-header">
          <div className="custom-heading-title-group">
            <span className="custom-heading-subtitle">Just Landed</span>
            <h2 className="custom-heading-main-title">Bestselling Products</h2>
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
  );
};

export default BestSellers;
