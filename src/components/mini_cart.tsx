import React from "react";
import { Link } from "react-router-dom";

const MiniCart = () => {
  let carts = JSON.parse(localStorage.getItem("carts") || "[]");
  function format(n: number) {
    return n
      .toFixed(2)
      .replace(".", ",")
      .replace(/\d{3}(?=(\d{3})*,)/g, function (s) {
        return "." + s;
      });
  }
  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const cart of carts) {
      const price = parseInt(
        cart?.price?.split("đ")?.[0]?.split(".")?.join("") || "0"
      );
      totalPrice += price * parseInt(cart?.quantity);
    }
    return format(totalPrice);
  };
  return (
    <div className="minicart">
      <ul className="minicart-product-list">
        {carts.map((item: any, index: number) => (
          <li key={index}>
            <a href="single-product.html" className="minicart-product-image">
              <img src={item.imageLink} alt="cart products" />
            </a>
            <div className="minicart-product-details">
              <h6>
                <a href="single-product.html">{item.title}</a>
              </h6>
              <span>
                {item.price} x {item.quantity}
              </span>
            </div>
            <button className="close" title="Remove">
              <i className="fa fa-close"></i>
            </button>
          </li>
        ))}
      </ul>
      <p className="minicart-total">
        Tổng tiền: <span>{getTotalPrice()}đ</span>
      </p>
      <div className="minicart-button">
        <Link
          to={"/carts"}
          className="li-button li-button-fullwidth li-button-dark"
        >
          <span>Xem giỏ hàng</span>
        </Link>
        <Link to={"/checkout"} className="li-button li-button-fullwidth">
          <span>Thanh toán</span>
        </Link>
      </div>
    </div>
  );
};

export default MiniCart;
