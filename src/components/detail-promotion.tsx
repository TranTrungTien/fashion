import { Checkbox, Form, InputNumber, Radio, message } from "antd";
import React, { useContext, useState } from "react";
import { AppDataContext } from "../context";
import { uuid } from "../utils";

type IProps = {
  id: string;
  priceSaleOff: string;
  images: string;
  title: string;
  price: string;
  originalPrice: string;
  detail: string;
};

const DetailPromotion = ({
  detail,
  originalPrice,
  price,
  title,
  id,
  images,
  priceSaleOff,
}: IProps) => {
  console.log(detail, originalPrice, price, title, id, images, priceSaleOff);

  const { user } = useContext(AppDataContext);
  const [form] = Form.useForm();
  const [quantity, setQuantity] = useState(1);
  const handleAddMoreProduct = () => {
    console.log(form.getFieldsValue());
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
        quantity: quantity,
        color: form.getFieldValue("color") || "Hồng",
        title,
        price,
        detail,
        imageLink: images?.[0],
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
    <div className="max-w-[calc(55%-12px)] overflow-visible">
      <div className="flex flex-start items-center gap-x-4">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <Form form={form} onFinish={handleAddMoreProduct}>
        <div className="mt-10">
          <div className="flex justify-start items-center gap-x-3">
            <div className="text-orange-500 text-xl font-semibold">
              <span>{price}</span>
              <sup>₫</sup>
            </div>
            <del className="text-sm">
              {originalPrice} <sup>₫</sup>
            </del>
          </div>
          <div className="mt-6">
            <Form.Item name={"color"}>
              <Radio.Group defaultValue={"Xanh"} className="space-x-4">
                {["Xanh", "Hồng", "Đỏ"].map((color, index) =>
                  color ? (
                    <Radio.Button value={color} key={index}>
                      <span
                        key={index}
                        className="cursor-pointer mr-2 text-blue-500 bg-white uppercase"
                      >
                        {color}
                      </span>
                    </Radio.Button>
                  ) : (
                    <></>
                  )
                )}
              </Radio.Group>
            </Form.Item>
          </div>
          <div className="my-4">
            <span>Số lượng</span>
            <div className="">
              <Form.Item name="quantity">
                <InputNumber
                  min={1}
                  defaultValue={1}
                  onChange={setQuantity as any}
                />
                ;
              </Form.Item>
            </div>
          </div>
          <p className="text-lg font-medium text-black">Thông tin sản phẩm</p>
          <pre className=" leading-6 text-[#222]">{detail}</pre>
          <div className="my-3">
            <button
              type="submit"
              className="w-full text-lg py-2 rounded-md bg-orange-500 text-white font-semibold"
            >
              Thêm vào giỏ hàng
              <p className="font-light text-sm">
                Thoải mái lựa chọn, xem hàng tại nhà
              </p>
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default DetailPromotion;
