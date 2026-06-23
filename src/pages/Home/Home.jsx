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

  return (
    <div className="home">
      return (
      <div className="home">
        <section className="hero">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <h1 className="hero-title">Rest, Relax, Unwind</h1>

            <p className="hero-subtitle">Embrace your choices - we do</p>

            <button className="hero-btn">SHOP NOW</button>
          </div>
        </section>

        <section className="featured">
          <h2 className="featured-title">
            <span className="featured-slash">/</span>
            Featured
          </h2>

          <div className="products-grid">
            {data?.map((el) => (
              <div className="product-card">
                <img
                  src={el.img}
                  alt="High Back Bench"
                  className="product-img"
                />
                <p className="product-name">{el.title}</p>
                <p className="product-price">${el.price}</p>
              </div>
            ))}
          </div>

          <div className="all-products-wrap">
            <button className="all-products-btn">ALL PRODUCTS</button>
          </div>
        </section>
      </div>
      );
    </div>
  );
};

export default Home;
