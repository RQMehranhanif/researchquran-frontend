/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Button, Col, Pagination, Row, Space, Typography } from "antd";
import { Table } from 'antd';
import { Popconfirm } from 'antd';
import NotesForm from "./NotesForm/NotesForm";
const {Title} = Typography;
interface Props {
  isOpen: boolean;
}
const Notes: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
const handledel = () =>{
  console.log('delete');
}
const handleEdit = () =>{
  setTitle("Update Note");
  setIsOpen(true);
}
const handleFormOpen = () => {
  setTitle("Add Note");
  setIsOpen(true);
};
const handleCloseModel = () => {
  setIsOpen(false);
};
const columns = [
  {
    title: 'Sr',
    dataIndex: "id",
    key: "fifth",
    width: "auto",
    className: "dark:bg-darkBody",
  },
  {
    title: 'Name',
    dataIndex: "name",
    key: "forth",
    width: "auto",
    className: "dark:bg-darkBody",
  },
  {
    title: 'File',
    dataIndex: "file",
    width: "auto",
    key: "third",
    className: "dark:bg-darkBody",
  },
  {
    title: 'Action',
    dataIndex:'btn',
    key: 'action',
    render: (_:any, record:any) => (
      <Space size="middle">
        <a onClick={handleEdit} className='cursor-pointer' >Edit </a>
        <Popconfirm title="sure to delete" onConfirm={handledel}>
        <a >Delete</a>
        </Popconfirm>
      </Space>
    ),
  },
  
];
const data = [
  {
    key: "1",
    id:"1",
   name: "Surah Yussuf",
  file:'Surah Yussuf Aya 1.docx'
  },
  {
    key: "2",
    id:"2",
   name: "Abrahamic Locution",
   file:'	Abrahamic Locution-20211206.xlsx'
  },
];


    return(
      <>
      <div
        className="container-fluid mt-5 mr-5"
      >
        <div style={{width: '100%'}}>
          <Row>
            <Col span={12}>
              <Title>Notes</Title>
            </Col>
            <Col span={12}>
              <Button
                className="btn btn-info float-right mt-4"
                style={{ fontSize: "12px", marginTop: "6px" }}
                onClick={() => handleFormOpen()}
              >
                Add New
              </Button>
            </Col>
          </Row>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            />
          <Pagination
            total={50}
            current={currentPage}
            pageSize={2}
            onChange={(page: number) => setCurrentPage(page)}
          />
        </div>
        <NotesForm
          isOpen={isOpen}
          handleCloseModel={handleCloseModel}
          title={title}
        />
      </div>
      </>
  ) 
}
    

export default Notes;
