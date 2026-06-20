import { useEffect, useState } from "react";
import "./Home.css";

// Мухаммад
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../../../bd.json")
      .then((Respons) => Respons.json())
      .then((data) => setData(data.products));
  }, []);

  return <div className="home">
      return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">Rest, Relax, Unwind</h1>

          <p className="hero-subtitle">
            Embrace your choices - we do
          </p>

          <button className="hero-btn">
            SHOP NOW
          </button>
        </div>
      </section>

      <section className="featured">
        <h2 className="featured-title">
          <span className="featured-slash">/</span>
          Featured
        </h2>

        <div className="products-grid">
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400"
              alt="High Back Bench"
              className="product-img"
            />
            <p className="product-name">High Back Bench</p>
            <p className="product-price">$9.99</p>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400"
              alt="Utopia Sofa"
              className="product-img"
            />
            <p className="product-name">Utopia Sofa</p>
            <p className="product-price">$39.95</p>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400"
              alt="Entertainment Center"
              className="product-img"
            />
            <p className="product-name">Entertainment Center</p>
            <p className="product-price">$29.98</p>
          </div>
        </div>

        <div className="all-products-wrap">
          <button className="all-products-btn">
            ALL PRODUCTS
          </button>
        </div>
      </section>
    </div>
  );
  </div>;
};

export default Home;