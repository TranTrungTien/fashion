import { Checkbox, Pagination } from "antd";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import ProductCard from "../components/product-card";
import { womanDresses } from "../data";

const CategoryPage = () => {
  const { type } = useParams();
  const ip = type
    ? womanDresses[type].map((item) => ({
        id: item.id,
        title: item.title,
        previewImageLink: item.images[0],
        priceSaleOff: item.price,
        originalPrice: item.originalPrice,
        detail: item.detail,
        type: type,
      }))
    : null;
  const getTypeName = (type: string | undefined) => {
    switch (type) {
      case "dresses":
        return "Váy/Đầm";
      case "trousers":
        return "Quần";
      case "t-shirt":
        return "T-Shirt";
      case "coats":
        return "Áo khoác";
      default:
        return "";
    }
  };
  return (
    <div>
      <Header />
      <div>
        <div className="breadcrumb-area">
          <div className="container">
            <div className="breadcrumb-content">
              <ul>
                <li>
                  <a href="/">Trang chủ</a>
                </li>
                <li className="active">{getTypeName(type)}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content-wraper pt-60 pb-60 pt-sm-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 order-1 order-lg-2">
                <div className="single-banner shop-page-banner max-h-44 overflow-hidden">
                  <a href="#">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Fashion/May_ART/WomensPage/PC/topbanner._V509694744_.jpg"
                      alt="Li's Static Banner"
                      className="h-full object-cover object-center max-h-44"
                    />
                  </a>
                </div>
                <div className="shop-top-bar mt-30">
                  <div className="shop-bar-inner">
                    <div className="product-view-mode">
                      <ul className="nav shop-item-filter-list" role="tablist">
                        <li className="active" role="presentation">
                          <a
                            aria-selected="true"
                            className="active show"
                            data-toggle="tab"
                            role="tab"
                            aria-controls="grid-view"
                            href="#grid-view"
                          >
                            <i className="fa fa-th"></i>
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            data-toggle="tab"
                            role="tab"
                            aria-controls="list-view"
                            href="#list-view"
                          >
                            <i className="fa fa-th-list"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="toolbar-amount">
                      <span>1 đến 9 trong 14</span>
                    </div>
                  </div>
                  <div className="product-select-box">
                    <div className="product-short">
                      <p>Sắp xếp:</p>
                      <select className="nice-select">
                        <option value="trending">Liên quan nhất</option>
                        <option value="sales">Tên (A - Z)</option>
                        <option value="sales">Tên (Z - A)</option>
                        <option value="rating">Giá (thấp &gt; cao)</option>
                        <option value="date">Vote</option>
                        <option value="price-asc">Model (A - Z)</option>
                        <option value="price-asc">Model (Z - A)</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="shop-products-wrapper">
                  <div className="tab-content">
                    <div className="grid grid-cols-3 gap-2">
                      {ip &&
                        ip.map((item, index) => (
                          <ProductCard {...item} key={index} />
                        ))}
                    </div>
                    <div className="w-full">
                      <Pagination
                        className="max-w-max ml-auto"
                        total={14}
                        pageSize={10}
                        current={1}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 order-2 order-lg-1">
                <div className="sidebar-categores-box mt-sm-30 mt-xs-30">
                  <ul>
                    <li className="py-1">
                      <Link style={{ fontSize: "16px" }} to={`/dresses`}>
                        Váy/đầm
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link style={{ fontSize: "16px" }} to={`/coats`}>
                        Áo khoác
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link style={{ fontSize: "16px" }} to={`/t-shirt`}>
                        T-Shirt
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link style={{ fontSize: "16px" }} to={`/trousers`}>
                        Quần
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-categores-box">
                  <div className="sidebar-title">
                    <h2>Bộ lọc</h2>
                  </div>
                  <div className="filter-sub-area">
                    <h5 className="filter-sub-titel">Thương hiệu</h5>
                    <div className="categori-checkbox">
                      <ul>
                        <li>
                          <Checkbox />
                          <a href="#">Louis Vuitton.</a>
                        </li>
                        <li>
                          <Checkbox />
                          <a href="#">Hermès.</a>
                        </li>
                        <li>
                          <Checkbox />
                          <a href="#">Prada.</a>
                        </li>
                        <li>
                          <Checkbox />
                          <a href="#">Chanel.</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-sub-area pt-sm-10 pt-xs-10">
                    <h5 className="filter-sub-titel">Thể loại</h5>
                    <div className="categori-checkbox">
                      <ul>
                        <li>
                          <Checkbox />
                          <a href="#">New</a>
                        </li>
                        <li>
                          <Checkbox />
                          <a href="#">Đã qua sử dụng</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-sub-area pt-sm-10 pt-xs-10">
                    <h5 className="filter-sub-titel">Kích cỡ</h5>
                    <div className="size-checkbox">
                      <ul>
                        <li>
                          <Checkbox />
                          <a href="#"> {"M"}</a>
                        </li>
                        <li>
                          <Checkbox />
                          <a href="#"> {"L"}</a>
                        </li>
                        <li>
                          <Checkbox />
                          <a href="#"> {"XL"}</a>
                        </li>
                        <li>
                          <Checkbox />
                          <a href="#"> {"XXL"}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-sub-area pt-sm-10 pt-xs-10">
                    <h5 className="filter-sub-titel">Màu sắc</h5>
                    <div className="">
                      <ul>
                        <li className="py-1 space-x-2">
                          <Checkbox />
                          <a href="#">Trắng (1)</a>
                        </li>
                        <li className="py-1 space-x-2">
                          <Checkbox />
                          <a href="#">Đen (1)</a>
                        </li>
                        <li className="py-1 space-x-2">
                          <Checkbox />
                          <a href="#">Đỏ (3) </a>
                        </li>
                        <li className="py-1 space-x-2">
                          <Checkbox />
                          <a href="#">Vàng (2) </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-sub-area pt-sm-10 pb-sm-15 pb-xs-15">
                    <h5 className="filter-sub-titel">Năm sản xuất</h5>
                    <div className="categori-checkbox">
                      <ul>
                        <li>
                          <Checkbox />
                          <a href="#">2022</a>
                        </li>
                        <li>
                          <Checkbox />
                          <a href="#">2021 (6)</a>
                        </li>
                        <li>
                          <Checkbox />
                          <a href="#">2020 (6)</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
