// /* <h1>Abdul Fatah</h1> */
// /* <div className="links">
//               <Link to="/">Home</Link>
//               <Link to="/services">Services</Link>
//               <Link to="/work">Work</Link>
//               <Link to="/contactUs">Contact Us</Link>
//               <Link to="/SignUp">Sign Up</Link> */

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { Button, Flex } from "antd";
import { Typewriter } from "react-simple-typewriter";
// import Register from "../../Pages/Resgistration/Register/Register";

const Navbar = () => {
  return (
    <>
      <nav className="navbar w-full min-h-12 p-2 flex bg-blue-800">
        <div className="flex justify-between w-full mx-10">
          <div>
            <Typewriter
              words={[
                "Hey There",
                "Sign In to Get Amazing Deals",
                "Best Products",
                "Enjoyed Deals",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />{" "}
          </div>
          <div className="flex items-center ">
            {/* //               <Link to="/SignIn">Sign In</Link> */}
            <Link to="/register">
              <Button type="primary" ghost>
                Sign Up
              </Button>
            </Link>
            <Button type="primary" danger ghost>
              Log In
            </Button>
          </div>
        </div>
      </nav>
      <div className="bg-green-700 w-full h-4">checking</div>
    </>
  );
};

export default Navbar;
