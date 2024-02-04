import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Navbar from "../../../Components/Navbars/Navbar";
import "./register.css";
const Register = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="place-items-center grid h-screen  ">
        <Form
          name="normal_login"
          className="form login-form  antialiased hover:subpixel-antialiased  bg-slate-100 shadow-2xl border-t-8 border-pink-700  px-4 md:px-8 pt-6 pb-8 p-5 m-5 rounded-3xl "
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <h2 className="text-2xl font-bold mb-4">Sign up</h2>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email",
              },
            ]}
          >
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>

            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email Address"
              className="appearance-none border border-purple-300 rounded w-full md:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              className="appearance-none border border-purple-300 rounded w-full md:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Re Enter your Password!",
              },
            ]}
          >
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              className="appearance-none border border-purple-300 rounded w-full md:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold text-center rounded focus:outline-none focus:shadow-outline login-form-button "
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default Register;
