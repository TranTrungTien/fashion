import React from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="slider-with-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="category-menu">
              <div className="category-heading">
                <h2 className="categories-toggle">
                  <span>danh mục</span>
                </h2>
              </div>
              <div id="cate-toggle" className="category-menu-list">
                <ul>
                  <li className="">
                    <Link style={{ fontSize: "16px" }} to={`/dresses`}>
                      Váy/đầm
                    </Link>
                  </li>
                  <li className="">
                    <Link style={{ fontSize: "16px" }} to={`/coats`}>
                      Áo khoác
                    </Link>
                  </li>
                  <li className="">
                    <Link style={{ fontSize: "16px" }} to={`/t-shirt`}>
                      T-Shirt
                    </Link>
                  </li>
                  <li className="">
                    <Link style={{ fontSize: "16px" }} to={`/trousers`}>
                      Quần
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="relative w-full min-h-[380px] max-h-[380px]">
              <img
                src="https://intphcm.com/data/upload/banner-thoi-trang-nu.jpg"
                alt=""
                className="bg-banner-position relative object-cover object-center max-h-[550px]"
              />
              <div className="slider-progress"></div>
              <div className="slider-content absolute top-1/4 left-10">
                <h5 className="text">
                  Giảm giá tới <span>20%</span> Trong tuần
                </h5>
                Giá chỉ từ
                <h3>
                  <span> 599k </span>
                </h3>
                <div className="default-btn slide-btn">
                  <Link className="links" to={"./dresses"}>
                    Shopping Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
