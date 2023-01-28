import React, { useContext, useState } from "react";
import MiniCart from "../mini_cart";
import { Button, Form, Input } from "antd";
import Login from "../modal/login";
import { AppDataContext } from "../../context";
import Modals from "../modal";
import Register from "../modal/register";
import {
  HeartOutlined,
  LogoutOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const [viewMiniCard, setViewMiniCard] = useState(false);
  const [showModal, setShowModal] = useState<{
    openLogin: boolean;
    openRegister: boolean;
    title: string;
    child: React.ReactNode | null;
  }>({
    openLogin: false,
    openRegister: false,
    title: "",
    child: null,
  });
  const { user } = useContext(AppDataContext);

  return (
    <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="logo pb-sm-30 pb-xs-30">
              <Link to={"/"}>
                <img src="/images/logo.jpg" className="h-[45px]" />
              </Link>
            </div>
          </div>
          <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
            <Form action="#" className="hm-searchbox">
              <Input type="text" placeholder="Bạn muốn tìm gì ?" />
              <button className="li-btn" type="submit">
                <SearchOutlined />
              </button>
            </Form>
            <div className="header-middle-right">
              {!user ? (
                <Button
                  onClick={() =>
                    setShowModal({
                      child: (
                        <Login
                          close={() =>
                            setShowModal({
                              child: null,
                              openLogin: false,
                              openRegister: false,
                              title: "",
                            })
                          }
                        />
                      ),
                      title: "Đăng nhập",
                      openLogin: true,
                      openRegister: false,
                    })
                  }
                  className="text-lg font-semibold"
                  type="text"
                >
                  Đăng nhập
                </Button>
              ) : (
                <ul className="hm-menu flex justify-start items-center">
                  <li className="hm-wishlist">
                    <a href="/">
                      <HeartOutlined />
                    </a>
                  </li>
                  <li className="hm-minicart">
                    <div
                      onClick={() => setViewMiniCard(!viewMiniCard)}
                      className="hm-minicart-trigger space-x-3 grid place-content-center"
                    >
                      <ShoppingCartOutlined className="text-xl ml-5" />
                    </div>
                    <span></span>
                    {viewMiniCard && <MiniCart />}
                  </li>
                  <li
                    onClick={() => {
                      localStorage.removeItem("user");
                      window.location.replace("/");
                    }}
                    className="cursor-pointer ml-4"
                  >
                    <span className="">
                      <LogoutOutlined className="text-xl" />
                    </span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      {showModal.child && (
        <Modals
          footer={null}
          open={true}
          title={showModal.title}
          onCancel={() =>
            setShowModal({
              child: null,
              openLogin: false,
              openRegister: false,
              title: "",
            })
          }
        >
          <>
            {showModal.child}

            {showModal.openLogin ? (
              <p
                onClick={() =>
                  setShowModal({
                    child: (
                      <Register
                        close={() =>
                          setShowModal({
                            child: null,
                            openLogin: false,
                            openRegister: false,
                            title: "",
                          })
                        }
                      />
                    ),
                    title: "Đăng ký",
                    openLogin: false,
                    openRegister: true,
                  })
                }
                className="cursor-pointer lost-password"
              >
                <a>Chưa có tài khoản?</a>
              </p>
            ) : (
              <span
                className="cursor-pointer"
                onClick={() =>
                  setShowModal({
                    child: (
                      <Login
                        close={() =>
                          setShowModal({
                            child: null,
                            openLogin: false,
                            openRegister: false,
                            title: "",
                          })
                        }
                      />
                    ),
                    title: "Đăng nhập",
                    openLogin: true,
                    openRegister: false,
                  })
                }
              >
                Bạn đã có tài khoản?
              </span>
            )}
          </>
        </Modals>
      )}
    </div>
  );
};

export default MainHeader;
