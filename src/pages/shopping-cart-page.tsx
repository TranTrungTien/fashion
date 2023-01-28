import { DeleteOutlined } from "@ant-design/icons";
import { Input, InputNumber, message } from "antd";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { useState } from "react";

type IProps = {};

const ShoppingCart = () => {
  const carts = JSON.parse(localStorage.getItem("carts") || "[]");
  const [render, setRender] = useState(false);
  const [quantities, setQuantities] = useState(Array(carts.length).fill(0));

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
    console.log({ totalPrice });

    return format(totalPrice);
  };
  const getTotalPriceRow = (index: number) => {
    let totalPrice = 0;
    const cart = carts[index];
    const price = parseInt(
      cart?.price?.split("đ")?.[0]?.split(".")?.join("") || "0"
    );
    totalPrice += price * parseInt(cart?.quantity || "0");

    return format(totalPrice);
  };
  return (
    <div>
      <Header />
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li>
                <a href="index.html">Trang chủ</a>
              </li>
              <li className="active">Giỏ hàng</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Shopping-cart-area pt-60 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="li-product-remove">Xóa</th>
                        <th className="li-product-thumbnail">Ảnh</th>
                        <th className="cart-product-name">Tên Sản Phẩm</th>
                        <th className="li-product-price">Giá Sản Phẩm</th>
                        <th className="li-product-quantity">Số Lượng</th>
                        <th className="li-product-subtotal">Tổng Số Tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {carts?.map((item: any, index: number) => (
                        <tr key={index}>
                          <td className="li-product-remove">
                            <span
                              onClick={() => {
                                carts.splice(index, 1);
                                localStorage.setItem(
                                  "carts",
                                  JSON.stringify(carts)
                                );
                                setRender(!render);
                              }}
                            >
                              <DeleteOutlined />
                            </span>
                          </td>
                          <td className="li-product-thumbnail max-w-[80px] max-h-[80px]">
                            <a href="#">
                              <img
                                src={item.imageLink}
                                alt="Li's Product Image"
                                className="w-full h-full object-cover object-center"
                              />
                            </a>
                          </td>
                          <td className="li-product-name">
                            <span>{item.title}</span>
                          </td>
                          <td className="li-product-price">
                            <span className="amount">{item.price}</span>
                          </td>
                          <td className="quantity">
                            <label>Số Lượng</label>
                            <div className="cart-plus-minus">
                              <InputNumber
                                value={
                                  quantities[index]
                                    ? quantities[index]
                                    : item.quantity
                                }
                                onChange={(value) => {
                                  const newCart = {
                                    ...item,
                                    quantity: value,
                                  };
                                  const index = carts.findIndex(
                                    (cart: any) => cart.id === newCart.id
                                  );
                                  if (index === -1) return;
                                  else {
                                    carts[index] = newCart;
                                    localStorage.setItem(
                                      "carts",
                                      JSON.stringify(carts)
                                    );
                                  }
                                  const newQuantities = [...quantities];
                                  newQuantities[index] = value;

                                  setQuantities(newQuantities);
                                }}
                              />
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">
                              {getTotalPriceRow(index)}đ
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="coupon-all">
                      <div className="coupon">
                        <Input
                          className="input-text"
                          name="coupon_code"
                          value=""
                          placeholder="mã giảm giá"
                          type="text"
                        />
                        <Input value="Thêm mã giảm giá" type="submit" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 ml-auto">
                    <div className="cart-page-total">
                      <h2>Tổng tiền</h2>
                      <strong className="text-2xl font-semibold text-red-500 block">
                        {getTotalPrice()}đ
                      </strong>
                      <Link to={"/checkout"}>Thanh toán</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
