/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Form, Table, Tag } from "antd";
import { Card } from "antd";
import { useEffect } from "react";
import {
  getPermissions,
  savePermissions,
} from "../../Actions/AdminPermisssionActions/AdminPermissionAction";
import { OpenNotification } from "./../../Actions/Utilities/Utilities";
import { LoadingOutlined } from "@ant-design/icons";
import { Button } from 'antd';

const AdminPermissions: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { CheckableTag } = Tag;
  const [selectedTags, setSelectedTags] = useState<any>([]);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  useEffect(() => {
    getPermission();
  }, []);

  const handleChange = (record: any, checked: boolean, tag: any) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t: any) => t !== tag);
    Object.assign(tag, { checked: checked });
    Object.assign({ ...record }, { scholars: tag });
    setSelectedTags(nextSelectedTags);
  };

  function getPermission() {
    setLoading(true);
    getPermissions().then(({ data: response }) => {
      if (response.success === true) {
        setLoading(false);
        setData(response.list);
        OpenNotification("success", response.message);
      } else {
        setLoading(false);

        OpenNotification("error", response.message);
      }
    });
  }

  const save = async () => {
    try {
      setLoading(true);

      const newData = [...data];
      console.log(newData);
      const req = { request: newData };
      savePermissions(req).then(({ data: response }) => {
        console.log(response);
        if (response.success === true) {
          setLoading(false);
          OpenNotification("success", response.message);
        } else {
          setLoading(false);
          OpenNotification("error", response.message);
        }
      });
      
    } catch (errInfo:any) {
      OpenNotification('error',errInfo)
    }
  };

  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Scholar Name",
      dataIndex: "name",
    },
    {
      title: "Scholars",
      dataIndex: "scholars",
      render: (_: any, record: any) =>
        record.scholars.map((items: any) => {
          return (
            <CheckableTag
              key={items.id}
              checked={items.checked === true ? true : false}
              onChange={(checked) => handleChange(record, checked, items)}
            >
              {items.shortName}
            </CheckableTag>
          );
        }),
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_: any, record: any) => {
        return (
          <span>
            <Button className="bg-success text-light"  onClick={() => save()} style={{ marginRight: 8 }}>
              Save
            </Button>
          </span>
        );
      },
    },
  ];

  return (
    <Card>
      <Form form={form} component={false}>
        <Table
          loading={{ spinning: loading, indicator: antIcon }}
          bordered
          dataSource={data}
          columns={columns}
        />
      </Form>
    </Card>
  );
};

export default AdminPermissions;
