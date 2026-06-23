import "./App.css";
import mapGrocery from "./assets/svg/mapGrocery.svg";
import mapGroceryBL from "./assets/svg/mapGroceryBL.svg";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const cart = JSON.parse(localStorage.getItem("cart"))
  const location = useLocation().pathname;
  const [isCart, setIsCart] = useState(false);

  return (
    <div className="">
      <nav className={`navbar ${location === "/" ? "navbar__home" : ""}`}>
        <div className="navbar__content">
          <div className="navbar__pages">
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/products">
              <button>Products</button>
            </Link>
            <Link to="/about">
              <button>About</button>
            </Link>
          </div>

          <Link to="/">
            <h1 className="navbar__logo flc">comfy</h1>
          </Link>
        </div>

        <button onClick={() => setIsCart(true)} className="flc">
          {location === "/" ? (
            <img src={mapGrocery} alt="Card" />
          ) : (
            <img src={mapGroceryBL} alt="Card" />
          )}
          <div className="">{cart?.length}</div>
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {isCart && (
        <Cart setCart={setIsCart} />
      )}
    </div>
  );
}

export default App;
