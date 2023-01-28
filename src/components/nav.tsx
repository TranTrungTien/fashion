import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="header-bottom header-sticky d-none d-lg-block d-xl-block">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hb-menu">
              <nav style={{ display: "block" }}>
                <ul>
                  <li className="">
                    <Link to={"/"}>Trang chủ</Link>
                  </li>
                  <li>
                    <Link to={`/dresses`}>Váy/đầm</Link>
                  </li>
                  <li>
                    <Link to={`/coats`}>Áo khoác</Link>
                  </li>
                  <li>
                    <Link to={`/t-shirt`}>T-Shirt</Link>
                  </li>
                  <li>
                    <Link to={`/trousers`}>Quần</Link>
                  </li>
                  <li>
                    <Link to={`/about-us`}>Về chúng tôi</Link>
                  </li>
                  <li>
                    <Link to={`/contact`}>Liên hệ</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
