import "./Cart.css";
import close from "../../assets/svg/close.svg";
import close2 from "../../assets/svg/close2.svg";
import img from "../../assets/images/img1.png";

const Cart = ({ setCart }) => {
  return (
    <div className="cart__black">
      <div className="cart__content">
        <button onClick={() => setCart(false)} className="cart__closeSvg">
          <img src={close} alt="CloseSvg" />
        </button>

        <div>
          <h2 className="cart__title">Your Bag</h2>

          <div className="cart__cards">
            <div className="cart__card">
              <div className="card-info">
                <div className="card__img">
                  <img src={img} alt="CardImg" />
                </div>

                <div className="card__info">
                  <h3>Albany Table</h3>
                  <p>$79,99</p>

                  <div className="card__buttons">
                    <button className="flc">+</button>
                    <span>1</span>
                    <button className="flc">-</button>
                  </div>
                </div>
              </div>

              <button className="card__delete">
                <img src={close2} alt="ClothSvg" />
              </button>
            </div>
          </div>
        </div>

        <div className="cart__check">
          <div className="cart__sum">
            <span>Total:</span>
            <span>$79,99</span>
          </div>

          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
