/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

import Settings from "../Settings/Settings";
import { Button,  Dropdown } from "antd";
import { UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { SubmitLogout } from "../../Actions/LoginActions/Logout";
import { OpenNotification } from "../../Actions/Utilities/Utilities";
import { Link } from "react-router-dom";
import { leaveUser } from "../../Actions/UsersActions/Users";
import { message } from 'antd';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const [checkLogin, setCheckLogin] = React.useState<string>("");
  const impersonated = JSON.parse(localStorage.getItem("impersonated") as any);  
  const key = "updatable";
  const chechUserLogin = () => {
    var loginToken = localStorage.getItem("token");
    if (loginToken) {
      setCheckLogin("1");
    } else {
      setCheckLogin("0");
    }
  };
  const userName = localStorage.getItem("userName");
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    var token = localStorage.getItem("token");
    messageApi.open({
      key,
      type: "loading",
      content: "Logging out..",
      duration: 0,
      style: { marginTop: "40px" },
    });
    if (impersonated) {
      localStorage.removeItem("role_id");
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("impersonated");
      localStorage.removeItem("userId");
      leaveUser().then(({ data: response }) => {
        localStorage.setItem('role_id',response.persona.role)
        localStorage.setItem('token',response.token)
        localStorage.setItem('userName',response.persona.name)
        localStorage.setItem('userId',response.persona.id)
        window.location.href = "/"
      });
    } else {
      SubmitLogout(token).then(({ data: response }) => {
        if (response.success) {
          localStorage.clear();
          window.location.href = "/login";
        } else {
          OpenNotification("error", response.message);
        }
      });
    }
  };
  const items: MenuProps["items"] =
    impersonated
      ? [
          {
            label: "leave",
            key: "1",
          },
        ]
      : [
          {
            label: "Logout",
            key: "1",
          },
        ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  useEffect(() => {
    chechUserLogin();
    // eslint-disable-next-line
  }, []);
  function loginProfile() {
    window.location.href = "/login";
  }
  // function logoutProfile(){
  //   var token = localStorage.getItem("token");
  //   SubmitLogout(token)
  //   .then(({ data: response }) => {
  //     if (response.success) {
  //       localStorage.removeItem("token");
  //       window.location.href = "/login";
  //     } else {
  //       OpenNotification("error", response.message);
  //     }
  //   })
  // }

  return (
    <>
      <div className="bg-gray-50 sticky  w-full  top-0 z-50  dark:bg-darkNav transition-colors duration-500">
        <div className=" max-w-screen-2xl px-5 mx-auto">
          <nav
            className="flex flex-row py-4 justify-between items-center w-full "
            style={{ width: "100%" }}
          >
            <a type="primary" onClick={() => setIsOpen(!isOpen)}>
              <UnorderedListOutlined style={{ fontSize: "30px" }} />
            </a>
            <Link
              to="/"
              className="focus:outline-none font-signika hover:text-gray-600 text-lg font-bold text-gray-500 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-500"
            >
              <div className="flex justify-center items-center ">
                <h3
                  className="mb-0 text-lg font-bold text-current"
                  style={{ paddingLeft: "14rem" }}
                >
                  Research Quran
                </h3>
              </div>
            </Link>
            <div className="justify-end">
              {checkLogin === "1" && (
                <div className="flex items-center space-x-5">
                 {/*  <Switch
                    className=""
                    defaultChecked={isMushaf}
                    onChange={(value) => dispatch(mushafMode(value))}
                  /> */}
                  <Dropdown.Button
                    menu={menuProps}
                    placement="bottom"
                    icon={<UserOutlined />}
                  >
                    {userName}
                  </Dropdown.Button>
                  {/* <Button onClick={logoutProfile}>Logout</Button> */}
                </div>
              )}
              {checkLogin === "0" && (
                <div className="flex items-center space-x-5">

                  
                  <Button onClick={loginProfile}>Login</Button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
      <Settings {...{ isOpen, setIsOpen }} />
      {contextHolder}
    </>
  );
};

export default Navbar;
