import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Row,Col, Typography, Button,Table,Space, Popconfirm } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { StoryType,getAllStoriesResponse } from "../../Types/Stories";
import { getStoriesList } from "../../Actions/Story/Story";
import { OpenNotification } from "../../Actions/Utilities/Utilities";

const Stories = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState<boolean>(false)
    const [stories,setStories] =  useState<StoryType[]>([]);
    const columns:ColumnsType<StoryType> = [
        {
          title: 'Sr',
          dataIndex: "id",
          key: "ninth",
          width: "auto",
          className: "dark:bg-darkBody",
        },
        {
          title: 'Title',
          dataIndex: "title",
          key: "eighth",
          width: "auto",
          className: "dark:bg-darkBody",
        },
        {
          title: 'Description',
          dataIndex: "description",
          key: "seventh",
          width: "auto",
          className: "dark:bg-darkBody",
        },
        {
          title: 'Created User',
          dataIndex: "createdUser",
          key: "sixth",
          width: "auto",
          className: "dark:bg-darkBody",
        },
        {
          title: 'Total Ayats',
          dataIndex: "totalAyats",
          key: "fifth",
          width: "auto",
          className: "dark:bg-darkBody",
        },
        {
          title: 'Action',
          dataIndex:'btn',
          key: 'action',
          render: (_: any, record: StoryType) =>
                <>
                  <Space size="middle">
                  
                    <Button type='primary' size="small" onClick={() => console.log(record)} className="cursor-pointer">
                      Edit{" "}
                    </Button>
                    <Popconfirm
                      title="sure to delete"
                      onConfirm={() => console.log(record)}
                    >
                      <Button danger size="small">
                        Delete
                      </Button>
                    </Popconfirm>
                  </Space>
                </>
        },
      ];

    useEffect(()=>{
      setLoading(true)
      getStoriesList().then((response:getAllStoriesResponse)=>{
        setLoading(false)
        if(response.success){
          OpenNotification('success', response.message)
          setStories(response.list)
        }else{
          OpenNotification('error', response.message)
        }
      }).catch((err)=>{
        setLoading(false)
        OpenNotification('error', err?.message)
      })
    },[])
  return (
    <>
      <div className="container-fluid mt-5 mr-5">
        <div style={{ width: "100%" }}>
        <Row>
            <Col span={12}>
            <Typography.Text strong style={{  fontSize: '24px' }}>Stories List</Typography.Text>
            </Col>
            <Col span={12}>
              <Button
                className="btn btn-info float-right mt-4"
                style={{ fontSize: "12px", marginTop: "6px" }}
                onClick={() => navigate('/stories/add')}
              >
                Add New
              </Button>
            </Col>
          </Row>
          <Table loading={loading} columns={columns} dataSource={stories} rowKey={'id'}/>
        </div>
      </div>
    </>
  );
};
export default Stories;
