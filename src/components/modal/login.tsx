import { Checkbox, Form, Input, message } from "antd";
import React, { useContext } from "react";
import { AppDataContext } from "../../context";

const Login = ({ close }: { close: () => void }) => {
  const [form] = Form.useForm();
  const { handleLogin } = useContext(AppDataContext);
  const hanleLoginApp = () => {
    handleLogin(form.getFieldsValue(), (isSuccess: boolean) => {
      if (isSuccess) {
        message.success("đăng nhập thành công ");
        close();
      } else {
        message.error("tài khoản hoặc mật khẩu không đúng");
      }
    });
  };
  return (
    <div className="coupon-content min-h-[50%]">
      <div className="coupon-info">
        <p className="text-xl mb-4">Đăng nhập để trải nghiệm tốt nhất</p>
        <Form form={form} onFinish={hanleLoginApp}>
          <p className="">
            <label>
              Email <span className="required">*</span>
            </label>
            <Form.Item name={"email"}>
              <Input />
            </Form.Item>
          </p>
          <p className="">
            <label>
              Password <span className="required">*</span>
            </label>
            <Form.Item name="password">
              <Input type="password" />
            </Form.Item>
          </p>
          <p className="my-3 text-center ">
            <input
              value="Đăng nhập"
              type="submit"
              className="w-32 text-black"
            />
          </p>
          <label className="mt-10 space-x-3">
            <Checkbox />
            Remember me
          </label>
          <div className="flex gap-3">
            <p className="lost-password">
              <a>Quên mật khẩu?</a>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
