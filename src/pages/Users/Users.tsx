/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Pagination, Row, Space, Typography } from "antd";
import { Table } from "antd";
import { Popconfirm } from "antd";
import UsersForm from "./UserForm/UsersForm";
import {
  getUsers,
  createUsers,
  deleteUser,
  updateUser,
  impersonateUser,
} from "../../Actions/UsersActions/Users";
import { OpenNotification } from "../../Actions/Utilities/Utilities";
import UserType from "../../Types/Users";
import { LoadingOutlined } from "@ant-design/icons";
const { Title } = Typography;

const Users = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [users, setUsers] = React.useState<any>();
  const [updateId, setUpdateId] = React.useState<any>("");
  const [user, setUser] = React.useState<UserType>({} as UserType);
  const [roles, setRoles] = React.useState<any[]>([]);
  const [allowedScholars, setAllowedScholars] = React.useState<any>([]);
  const [changeRole, setChangeRole] = React.useState<string>("1");
  const [totalRecords, setTotalRecords] = React.useState<number>(10);
  // eslint-disable-next-line
  const [data, setData] = React.useState<any[]>([]);
  const roleId = localStorage.getItem("role_id");
  const changeCurrentPage = (e: number) => {
    setCurrentPage(e);
  };
  const handleImporsonate = (data: any) => {
    setLoader(true);
    localStorage.removeItem("role_id");
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    impersonateUser(data.id).then(({ data: response }) => {
      localStorage.setItem("role_id", response.persona.role);
      localStorage.setItem("token", response.token);
      localStorage.setItem("userName", response.persona.name);
      localStorage.setItem("userId", data.id);
      localStorage.setItem("impersonated", JSON.stringify(response.impersonator));
      OpenNotification("success", "User Impersonated Successfully");
      setLoader(false);
      window.location.href = "/";
    });
  };
  const handleChange = (e: any) => {
    const { value } = e.target;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };
  const handledel = (data: any) => {
    setLoader(true);
    var id = data;
    deleteUser(id)
      .then(({ data: response }) => {
        if (response.success) {
          setLoader(false);
          const list = users.filter((item: { id: any }) => item.id !== id);
          setUsers(list);
          OpenNotification("success", response.message);
        } else {
          OpenNotification("error", response.message);
          alert("error deleting record");
          setLoader(false);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  const handleEdit = (data: any) => {
    setUpdateId(data.id);
    console.log(data);

    let roleID = data?.role;
    roleID = "" + roleID;
    const role = Object.keys(roles).find((items) => items === roleID);
    data = { ...data, role };
    setChangeRole(data.isApproved)
    setUser(data);
    setTitle("Update User");
    setIsOpen(true);
  };
  const handleReset = () => {
    const row = {} as UserType
    setUser(row);
  }
  const handleFormOpen = () => {
    handleReset();
    setUpdateId("");

    setChangeRole("1");
    setTitle("Add User");
    setIsOpen(true);
  };

  const handleCloseModel = () => {
    setIsOpen(false);
  };
  const handleRole = (data: any) => {
    const { value } = data.target;
    setChangeRole(value);
    setUser({
      ...user,
      [data.target.name]: value,
    });
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    setLoader(true);
    // e.preventDefault();
    if (user.id) {
      updateUser(user.id, user)
        .then(({ data: response }) => {
          if (response.success) {
            const newdata = [...users];
            const index = users.findIndex((item: any) => item.id === user.id);
            newdata[index] = response.row;
            setUsers(newdata);

            setLoader(false);
            OpenNotification("success", response.message);
            setIsOpen(false);
            setUser({} as UserType);
          } else {
            setLoader(false);
            OpenNotification("error", "Please enter valid input fields");
          }
        })
        .catch((err) => {
            setLoader(false);
            OpenNotification("error", err.message);
          });
    } else {
      createUsers(user).then(({ data: response }) => {
        setLoader(true);
        if (response.success) {
          setUsers([...users, response.row]);
          setIsOpen(false);
          setLoader(false);
          OpenNotification("success", response.message);
          setUser({} as UserType);
        } else {
          setLoader(false);

          OpenNotification("error", "Please enter valid input fields");
        }
      });
    }
  };
  const getAllUsers = () => {
    setLoader(true);

    getUsers(currentPage)
      .then(({ data: response }) => {
        if (response.success) {
          setLoader(false);
          setAllowedScholars(response.allowedScholars)
          setUsers(response.list);
          setRoles(response.roles);
          setTotalRecords(response.totalRecords);
        } else {
          setLoader(false);
          OpenNotification("error", response.message);
        }
      })
      .catch((err: any) => {
        setLoader(false);
        console.log("error", err);
      });
  };
  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line
  }, [currentPage, roleId]);

  const columns = [
    {
      title: "Sr",
      dataIndex: "id",
      key: "fifth",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "forth",
      width: "auto",
      className: "dark:bg-darkBody",
    },
    {
      title: "Short Name",
      dataIndex: "shortName",
      width: "auto",
      key: "third",
      className: "dark:bg-darkBody",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "auto",
      key: "third",
      className: "dark:bg-darkBody",
    },
    {
      title: "Role",
      dataIndex: "roleText",
      width: "auto",
      key: "third",
      className: "dark:bg-darkBody",
    },
    {
      title: "Action",
      dataIndex: "btn",
      key: "action",
      render: (_: any, record: { id: React.SetStateAction<null> }) => {
        return users.length >= 1 ? (
          <>
            <Space>
              {roleId !== "3" ? (
                <>
                  <Button
                    size="middle"
                    type="primary"
                    onClick={(e) => handleEdit(record)}
                  >
                    Edit
                  </Button>

                  <Button danger size="middle">
                    <Popconfirm
                      title="Sure to delete?"
                      onConfirm={() => handledel(record.id)}
                    >
                      Delete
                    </Popconfirm>
                  </Button>
                </>) : null}

              {allowedScholars.includes(record.id) ? (
                <Button size="middle" onClick={() => handleImporsonate(record)}>
                  Impersonate
                </Button>
              ) : null}
            </Space>
          </>
        ) : null;
      },
    },
  ];
  // const data = [
  //   {
  //     key: "1",
  //    name: "Ommar",
  //   short_name:'OM'
  //   },
  //   {
  //     key: "2",
  //    name: "Ahmad",
  //    short_name:'AR'
  //   },
  // ];
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <>
      <Card>
        <div className="container-fluid mt-1 mr-5">
          <div style={{ width: "100%" }}>
            <Row>
              <Col span={12}>
                <Title>Users Administrator</Title>
              </Col>
              {roleId !== '3' ? (
                <>
                  <Col span={12}>
                    <Button
                      type="primary"
                      className="float-right mt-4"
                      style={{ fontSize: "12px", marginTop: "6px" }}
                      onClick={() => handleFormOpen()}
                    >
                      Add New
                    </Button>
                  </Col>
                </>
              ) : null}

            </Row>
            <Table
              columns={columns}
              dataSource={users}
              pagination={false}
              bordered
              loading={{ spinning: loader, indicator: antIcon }}
            />
            <br />
            <Pagination
              total={totalRecords}
              current={currentPage}
              pageSize={10}
              showSizeChanger={false}
              onChange={(e: number) => changeCurrentPage(e)}
            />
          </div>
          <UsersForm
            isOpen={isOpen}
            handleCloseModel={handleCloseModel}
            title={title}
            roles={roles}
            users={users}
            user={user}
            changeRole={changeRole}
            updateId={updateId}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleRole={handleRole}
          />
        </div>
      </Card>
    </>
  );
};

export default Users;
