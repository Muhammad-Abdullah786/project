import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { auth } from "./../../../firebase/firebaseConfig";
import Navbar from "../../../Components/Navbars/Navbar";
import "./register.css";

import { Button, Checkbox, Form, Input } from "antd";

const Register = () => {
  const onFinish = (values) => {
    console.log("recived values of form ", values);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="place-items-center grid h-screen  ">
        <Form
          name="normal_login"
          className="form  login-form  antialiased hover:subpixel-antialiased  bg-slate-100 shadow-2xl border-t-8 border-pink-700  px-4 md:px-8 pt-6 pb-8 p-5 m-5 rounded-3xl "
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <h2 className="text-2xl font-bold mb-4">Sign up</h2>
          <Form.Item
            name="email"
            className="text-gray-700 text-sm font-bold mb-2"
            labelCol={{ span: 24 }}
            label="Email"
            rules={[
              {
                required: true,
                message: "Please input your Email",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email Address"
              className="appearance-none border border-purple-300 rounded w-full md:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            className="text-gray-700 text-sm font-bold mb-2"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              className="appearance-none border border-purple-300 rounded w-full md:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            className="text-gray-700 text-sm font-bold mb-2"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Re Enter your Password!",
              },
            ]}
          >
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
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default Register;
