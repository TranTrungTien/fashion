import { Form, Input, message } from "antd";
import React, { useContext } from "react";
import { AppDataContext } from "../../context";

const Register = ({ close }: { close: () => void }) => {
  const [form] = Form.useForm();
  const { handleSubmitUser } = useContext(AppDataContext);
  const onSubmit = (e: any) => {
    handleSubmitUser(form.getFieldsValue());
    message.success("đã đăng ký thành công, vui lòng đăng nhập");
    close();
  };
  return (
    <div>
      <div className="w-full">
        <Form form={form} onFinish={onSubmit}>
          <div className="login-form">
            <div className="row">
              <div
                className="col-md-6  rounded col-12 mb-10 max-h-max"
                style={{ height: "80px" }}
              >
                <label>Họ và tên</label>
                <Form.Item name={"username"}>
                  <Input placeholder="Họ và tên" />
                </Form.Item>
              </div>
              <div
                className="col-md-6  rounded col-12 mb-10 max-h-max"
                style={{ height: "80px" }}
              >
                <label>Địa chỉ</label>
                <Form.Item name={"address"}>
                  <Input placeholder="Địa chỉ" />
                </Form.Item>
              </div>
              <div
                className="col-md-12 rounded  mb-10 max-h-max"
                style={{ height: "80px" }}
              >
                <label>Email*</label>
                <Form.Item name={"email"}>
                  <Input type="email" />
                </Form.Item>
              </div>
              <div
                className="col-md-6  rounded mb-10 max-h-max"
                style={{ height: "80px" }}
              >
                <label>Mật khẩu</label>
                <Form.Item name={"password"}>
                  <Input type="password" />
                </Form.Item>
              </div>
              <div
                className="col-md-6  rounded mb-10 max-h-max"
                style={{ height: "80px" }}
              >
                <label>Nhập lại Mật khẩu</label>
                <Form.Item name={"passwordConfirm"}>
                  <Input type="password" />
                </Form.Item>
              </div>
              <div className="col-12">
                <button
                  className="register-button mt-0 text-blue-500 border border-solid border-blue-500 py-1 px-3 hover:text-white"
                  type="submit"
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
