import "./App.css";
import mapGrocery from "./assets/svg/mapGrocery.svg";
import mapGroceryBL from "./assets/svg/mapGroceryBL.svg";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";

function App() {
  const location = useLocation().pathname;
  console.log(location);
  
  return (
    <div className="">
      <nav className={`navbar ${location === "/" ? "navbar__home" : ""}`}>
        <div className="navbar__content">
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
          <h1>comfy</h1>
        </Link>

        <button>
          {location === "/" ? (
            <img src={mapGrocery} alt="Card" />
          ) : (
            <img src={mapGroceryBL} alt="Card" />
          )}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
