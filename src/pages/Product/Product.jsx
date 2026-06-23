import { useParams, Link } from "react-router-dom";
import "./Product.css";
import db from "../../../bd.json";
const images = import.meta.glob("../../assets/images/*.png", { eager: true });

const getImage = (path) => {
  if (!path) return "";
  const fileName = path.split("/").pop();
  const found = Object.keys(images).find((key) => key.endsWith(fileName));
  return found ? images[found].default : "";
};

// Манучер
const Product = () => {
  const { id } = useParams();

  const product = db.products.find((item) => String(item.id) === String(id));

  if (!product) {
    return (
      <div className="product__not-found">
        <h2>Товар не найден</h2>
        <Link to="/products">Вернуться к товарам</Link>
      </div>
    );
  }

  const { img, title, price, company, colors, description } = product;

  return (
    <div className="product">
      <div className="product__breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>{title}</span>
      </div>

      <div className="product__content">
        <div className="product__image">
          <img src={getImage(img)} alt={title} />
        </div>

        <div className="product__info">
          <h1 className="product__title">{title}</h1>
          <p className="product__company">BY {company?.toUpperCase()}</p>

          <p className="product__price">${price}</p>

          <div className="product__colors">
            {colors?.map((color, index) => (
              <span
                key={index}
                className="product__color"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>

          <p className="product__description">{description}</p>

          <button className="product__add-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
