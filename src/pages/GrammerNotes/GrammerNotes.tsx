/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Space, Tooltip, Typography } from "antd";
import { Table } from 'antd';
import { getGrammarNotes } from "../../Actions/GrammarNotesActions/GrammarNotesActions";
import GrammerNotesForm from "./GrammerNoterForm/GrammerNoterForm";
import { OpenNotification } from "../../Actions/Utilities/Utilities";
import { AlignType } from 'rc-table/lib/interface';
import { EditOutlined, LoadingOutlined } from "@ant-design/icons";
const { Text } = Typography;
const GrammerNotes: React.FC = () => {
  const token = localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [data, setData] = React.useState<any>([]);
  const [selectedGramarWord, setSelectedGramarWord] = React.useState<any>("");
  const [fileUsmani, setFileUsmani] = React.useState<any>();
  const [filearabic, setFileArabic] = React.useState<any>();
  const [inputKey, setInputKey] = React.useState<any>("");
  const [editUsmani, setEditUsmani] = React.useState<any>("");
  const [editArabic, setEditArabic] = React.useState<any>("");

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const handleEditUsmani = (record: any) => {
    setEditUsmani("1");
    setEditArabic("0");
    let randomString = Math.random().toString(36);
    setInputKey(randomString);
    setFileArabic(record.arabicGrammar);
    setFileUsmani("");
    setSelectedGramarWord(record.grammaticalDescription);
    console.log(record);
    setTitle("Update Grammer Note");
    setIsOpen(true);
  }
  const handleEditArabic = (record: any) => {
    setEditUsmani("0");
    setEditArabic("1");
    let randomString = Math.random().toString(36);
    setInputKey(randomString);
    setFileArabic("");
    setFileUsmani(record.usmaniStyle);
    setSelectedGramarWord(record.grammaticalDescription);
    console.log(record);
    setTitle("Update Grammer Note");
    setIsOpen(true);
  }
  // const handleFormOpen = () => {
  //   setTitle("Add Grammer Note");
  //   setIsOpen(true);
  // };
  const handleFileChangeUsmani = (e: any) => {
    setFileUsmani(e.target.files[0]);
  };
  const handleFileChangeArabic = (e: any) => {
    setFileArabic(e.target.files[0]);
  };
  const handleCloseModel = () => {
    setIsOpen(false);
  };
  const handleSubmit = (grammarWord: any, editUsmani: any, editArabic: any) => {
    var xhr = new XMLHttpRequest();
    if (editUsmani === "1" && editArabic === "0") {
      setLoading(true);
      var data1 = new FormData();
      if (grammarWord) {
        data1.append("usmaniStyle", fileUsmani);
        data1.append("arabicGrammar", filearabic);
        data1.append("grammaticalDescription", grammarWord);
        xhr.responseType = "json";
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4 && this.status === 200) {
            setLoading(false);
            const newdata = [...data];
            const index = data.findIndex((item: { grammaticalDescription: any; }) => item.grammaticalDescription === grammarWord);
            newdata[index] = this.response.row;
            setData(newdata);
            console.log(this.response.row);
            // setData(this.response.row);
            setIsOpen(false);
            OpenNotification("success", "Record added successfully");
          }
        });
        const url = "https://beta.dev.researchquran.org/laravel/public/api/grammar-notes/update-usmani-note";
        xhr.open("POST", url);
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);
        xhr.setRequestHeader("Access-Control-Allow-Origin", `*`);
        xhr.setRequestHeader(
          "access-control-allow-methods",
          `GET, PUT, POST, DELETE, HEAD, OPTIONS`
        );
        if (data1) {
          xhr.send(data1);
        }
      };
    }
    else {
      setLoading(true);
      var data2 = new FormData();
      if (grammarWord) {
        data2.append("arabicGrammar", filearabic);
        data2.append("usmaniStyle", fileUsmani);
        data2.append("grammaticalDescription", grammarWord);
        xhr.responseType = "json";
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4 && this.status === 200) {
            setLoading(false);
            const newdata = [...data];
            const index = data.findIndex((item: { grammaticalDescription: any; }) => item.grammaticalDescription === grammarWord);
            newdata[index] = this.response.row;
            setData(newdata);
            console.log(this.response.row);
            // setData(this.response.row);
            setIsOpen(false);
            OpenNotification("success", "Record Updated successfully");
          }
        });
        const url = "https://beta.dev.researchquran.org/laravel/public/api/grammar-notes/update-arabic-note";
        xhr.open("POST", url);
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);
        xhr.setRequestHeader("Access-Control-Allow-Origin", `*`);
        xhr.setRequestHeader(
          "access-control-allow-methods",
          `GET, PUT, POST, DELETE, HEAD, OPTIONS`
        );
        if (2) {
          xhr.send(data2);
        }
      };
    }

  }

  const getAllGrammarNotes = () => {
    setLoading(true);
    setLoading(true);
    getGrammarNotes()
      .then(({ data: response }) => {
        if (response.success) {
          console.log(response.list);

          setLoading(false);
          setData(response.list);
        } else {
          setLoading(false);
          OpenNotification("error", response.message);
        }
      })
      .catch((err: any) => {
        setLoading(false);
        console.log("error", err);
      });
  };
  useEffect(() => {
    getAllGrammarNotes();
    // eslint-disable-next-line
  }, []);
  // const data = [
  //   {
  //     key:"1",
  //     id:'1',
  //     noteLabel:'surah fatiha',
  //     noteFile:'surah fatiha.pdf',
  //     brn:'action'
  //   },
  //   {
  //     key:"2",
  //     id:'2',
  //     noteLabel:'surah fatiha',
  //     noteFile:'surah fatiha.pdf',
  //     btn:'action'
  //   },
  // ]
  const columns = [

    {
      title: 'Action',
      dataIndex: 'btn',
      key: 'action',
      render: (_: any, record: { id: React.SetStateAction<null>, noteFile: any }) =>
        data.length >= 1 ? (
          <>
            <Space size="middle">
              <Tooltip title="Usmani Style" color={'#2db7f5'}><Button type='primary' shape="circle" size="small" onClick={() => handleEditUsmani(record)} className="cursor-pointer">
                <EditOutlined />
              </Button>
              </Tooltip>
              <Tooltip title="Arabic Grammar" color={'#2db7f5'}><Button type='primary' danger shape="circle" size="small" onClick={() => handleEditArabic(record)} className="cursor-pointer btn-success">
                <EditOutlined />
              </Button>
              </Tooltip>
            </Space>
          </>
        ) : null,
    },
    {
      title: 'File (Arabic Grammar)',
      dataIndex: "arabicGrammar",
      key: "eighth",
      width: "auto",
      className: "dark:bg-darkBody",
    },
    {
      title: 'File (Usmani Style)',
      dataIndex: "usmaniStyle",
      width: "auto",
      key: "third",
      className: "dark:bg-darkBody",
    },
    {
      title: 'Grammar Word',
      dataIndex: "grammaticalDescription",
      width: "auto",
      key: "third",
      align: 'right' as AlignType,
      className: "dark:bg-darkBody ",
    },
    {
      title: '#',
      dataIndex: "id",
      key: "ninth",
      width: "auto",
      className: "dark:bg-darkBody",
    },
  ];
  return (
    <>
      <div
        className="container-fluid mt-5 mr-5"
      >
        <div style={{ width: '100%' }}>
          <Row>
            <Col span={12}>
              <Text strong style={{ fontSize: '24px' }}>Grammer Notes</Text>
            </Col>
            <Col span={12}>
              {/* <Button
                className="btn btn-info float-right mt-4"
                style={{ fontSize: "12px", marginTop: "6px" }}
                onClick={() => handleFormOpen()}
              >
                Add New
              </Button> */}
            </Col>
          </Row>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            loading={{ spinning: loading, indicator: antIcon }}
          />
          {/* <Pagination
            total={50}
            current={1}
            pageSize={10}
            onChange={(page: number) => setCurrentPage(page)}
          /> */}
        </div>
        <GrammerNotesForm
          isOpen={isOpen}
          title={title}
          inputKey={inputKey}
          editArabic={editArabic}
          editUsmani={editUsmani}
          loading={loading}
          selectedGramarWord={selectedGramarWord}
          handleSubmit={handleSubmit}
          handleCloseModel={handleCloseModel}
          handleFileChangeArabic={handleFileChangeArabic}
          handleFileChangeUsmani={handleFileChangeUsmani}
        />
      </div>
    </>
  )
}
export default GrammerNotes;
