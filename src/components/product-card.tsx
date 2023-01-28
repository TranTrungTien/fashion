import { Link } from "react-router-dom";
import { IProductCard } from "../intefaces";
import { EyeOutlined, HeartOutlined, MoreOutlined } from "@ant-design/icons";
import { Rate, message } from "antd";
import { useContext } from "react";
import { AppDataContext } from "../context";
import { uuid } from "../utils";

type IProps = IProductCard;

const ProductCard = ({
  id,
  previewImageLink,
  originalPrice,
  priceSaleOff,
  title,
  type,
  detail,
}: IProps) => {
  const { user } = useContext(AppDataContext);
  const handleAddMoreProduct = () => {
    if (!user) {
      message.error("Vui lòng đăng nhập");
      return;
    } else {
      const carts = JSON.parse(localStorage.getItem("carts") || "[]");
      for (const cart of carts) {
        if (cart?.productId === id) {
          message.error("Đã có sản phẩm trong giỏ hàng");
          return;
        }
      }
      const cart = {
        id: uuid(),
        quantity: 1,
        title,
        color: "Hồng",
        price: priceSaleOff,
        detail,
        imageLink: previewImageLink,
        productId: id,
        userId: user.id,
        status: "",
      };
      carts.push(cart);
      localStorage.setItem("carts", JSON.stringify(carts));
      message.success("Đã thêm vào giỏ hàng");
    }
  };
  return (
    <div className="col-lg-12 max-w-[300px]">
      <div className="single-product-wrap">
        <div className="product-image">
          <Link to={`/${type}/${id}`}>
            <img src={previewImageLink} alt="Li's Product Image" />
          </Link>
          <span className="sticker">New</span>
        </div>
        <div className="product_desc">
          <div className="product_desc_info">
            <div className="product-review">
              <h5 className="manufacturer capitalized">
                <a href="shop-left-sidebar.html">{type}</a>
              </h5>
              <div className="rating-box">
                <Rate value={4} />
              </div>
            </div>
            <h4>
              <Link
                className="product-name"
                style={{ fontSize: "17px" }}
                to={`/${type}/${id}`}
              >
                {title}
              </Link>
            </h4>
            <div className="price-box">
              <span
                className="new-price"
                style={{ color: "red", fontSize: "19px", fontWeight: "bolder" }}
              >
                {priceSaleOff}
              </span>
              <del className="text-sm opacity-60">{originalPrice}</del>
            </div>
            <div className="countersection">
              <div className="li-countdown"></div>
            </div>
          </div>
          <div className="add-actions">
            <ul className="add-actions-link">
              <li
                onClick={handleAddMoreProduct}
                className="add-cart active hover:text-white"
              >
                <span className="cursor-pointer text-base font-medium">
                  Thêm vào giỏ hàng
                </span>
              </li>
              <li className="hover:text-white">
                <a className="links-details">
                  <HeartOutlined />
                </a>
              </li>
              <li className="hover:text-white">
                <a
                  style={{ color: "#000" }}
                  href="#"
                  title="quick view"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  <EyeOutlined />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
