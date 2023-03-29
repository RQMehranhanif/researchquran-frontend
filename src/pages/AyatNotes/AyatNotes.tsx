/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Button, Col, Pagination, Row, Space, Typography } from "antd";
import { Table } from "antd";
import { Popconfirm } from "antd";
import AyatNotesForm from "./AyatNotesForm/AyatNotesForm";
import {
  getAyatNotes,
  filterSurah,
  deleteAyatNote,
  getScholars,
  getLanguages
} from "../../Actions/AyatNotesActions/AyatNotes";
import { OpenNotification } from "../../Actions/Utilities/Utilities";
import { LoadingOutlined } from "@ant-design/icons";
const { Text } = Typography;

const AyatNotes: React.FC = () => {
  const token = localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [ayatNotes, setAyatNotes] = React.useState<any>([]);
  const [scholars, setScholars] = React.useState<any>();
  const [languages, setLanguages] = React.useState<any>();
  const [verses, setVerses] = React.useState<any>();
  const [selectedScholars, setSelectedScholars] = React.useState<any>("");
  const [selectedAyat, setSelectedAyat] = React.useState<any>("");
  const [selectedName, setSelectedName] = React.useState<any>("");
  const [selectedSurah, setSelectedSurah] = React.useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>("");
  const [totalRecord, setTotalRecord] = React.useState<number>(0);
  const [updateId, setUpdateId] = React.useState<any>("");
  const [inputKey, setInputKey] = React.useState<any>("");
  const [file, setFile] = React.useState<any>();
  // const [filePath, setFilePath] = React.useState<any>("");
  // const [form] = Form.useForm();
  const handledel = (e: any) => {
    var id = e;
    setLoading(true);
    deleteAyatNote(id)
      .then(({ data: response }) => {
        if (response.success) {
          setLoading(false);

          // setLoader(false);
          const list = ayatNotes.filter((item: { id: any }) => item.id !== id);
          setAyatNotes(list);
          OpenNotification("success", response.message);
        } else {
          OpenNotification("error", response.message);
          setLoading(false);
          // setLoader(false);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  const getAllScholars = () => {
    getScholars()
      .then(({ data: response }) => {
        if (response.success) {
          setScholars(response.list);
          setLoading(false);
        } else {
          setLoading(false);
          OpenNotification("error", response.message);
        }
      })
      .catch((err: any) => {
        setLoading(false);
        console.log("error", err);
      });
  }
  const getAllLanguages = () => {
    getLanguages()
      .then(({ data: response }) => {
        if (response.success) {
          setLanguages(response.list);
          setLoading(false);
        } else {
          setLoading(false);
          OpenNotification("error", response.message);
        }
      })
      .catch((err: any) => {
        setLoading(false);
        console.log("error", err);
      });
  }

  const handleEdit = (e: any) => {
    var data = e;

    setSelectedScholars(data.scholarId);
    setSelectedSurah(data.surahNo);
    setSelectedAyat(data.ayatId);
    setSelectedName(data.noteLabel);
    setSelectedLanguage(data.languageId);
    setUpdateId(data.id);
    setVerses("");
    setFile(null);
    setTitle("Update Ayat Note");
    setIsOpen(true);
  };
  const handleFormOpen = () => {
    let randomString = Math.random().toString(36);
    setInputKey(randomString);
    // setSelectedScholars("");
    setSelectedSurah("");
    setSelectedName("");
    setSelectedAyat("");
    setUpdateId("");
    setVerses("");
    setFile("");
    setTitle("Add Ayat Note");
    setIsOpen(true);
  };
  const handleChangeLanguage = (e:any) => {
    console.log(e.target.value)
    setSelectedLanguage(e.target.value)
  }
  const handleCloseModel = () => {
    setIsOpen(false);
  };
  const handleChangeSurah = (e: any) => {
    setSelectedSurah(e.target.value);
    filterSurah(e.target.value)
      .then(({ data: response }) => {
        // settLoading(false);
        if (response.success) {
          // setSelectedSurah(e.target.value);
          console.log(e.target.value);
          
          setVerses(response.list);
        } else {
          OpenNotification("error", response.message);
        }
      })
      .catch((err: any) => {
        console.log("error", err);
      });
  };
  // const handleChangeScholar = (e: any) => {
  //   setSelectedScholars(e.target.value);
  // };
  const handleChangeAyat = (e: any) => {
    setSelectedAyat(e.target.value);
  };
  const handleChangeName = (e: any) => {
    setSelectedName(e.target.value);
  };
  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = ( id: any) => {
    console.log(selectedScholars);
    setLoading(true);
    var data = new FormData();
    var xhr = new XMLHttpRequest();
    if (id) {
      data.append("noteFile", file);
      data.append("ayatId", selectedAyat);
      data.append("noteLabel", selectedName);
      data.append("scholarId", selectedScholars);
      data.append("languageId", selectedLanguage);
      xhr.responseType = "json";
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
          
          const newdata = [...ayatNotes];
          const index = ayatNotes.findIndex((item: { id: any; }) => item.id === id);
          newdata[index] = this.response.row;
          setAyatNotes(newdata);
          setLoading(false);
        OpenNotification("success", "Record updated successfully");
        setIsOpen(false);

      }
      });
      const url = "http://beta.dev.researchquran.org/laravel/public/api/ayat-notes/"+id;
      xhr.open("POST", url);
      xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      xhr.setRequestHeader("Access-Control-Allow-Origin", `*`);
      xhr.setRequestHeader(
        "access-control-allow-methods",
        `GET, PUT, POST, DELETE, HEAD, OPTIONS`
      );
      if (data) {
        xhr.send(data);
        
      }
    } else {
      // var data = new FormData();
      data.append("noteFile", file);
      data.append("ayatId", selectedAyat);
      data.append("noteLabel", selectedName);
      data.append("scholarId", selectedScholars);
      data.append("languageId", selectedLanguage);
      // var xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
          setAyatNotes([...ayatNotes, this.response.row]);
        OpenNotification("success", "Record added successfully");
        setLoading(false);
        setIsOpen(false);
      }
      if(this.status !== 200) {
        setLoading(false);
        setIsOpen(false);
        // OpenNotification("error", "Record already added.");
      } 
      });
      const url = "https://beta.dev.researchquran.org/laravel/public/api/ayat-notes";
      xhr.open("POST", url);
      xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      xhr.setRequestHeader("Access-Control-Allow-Origin", `*`);
      xhr.setRequestHeader(
        "access-control-allow-methods",
        `GET, PUT, POST, DELETE, HEAD, OPTIONS`
      );
      if (data) {
        xhr.send(data);
        
      }
    }
  };

  const getAllAyatNotes = () => {
    setLoading(true);
    getAyatNotes(currentPage)
      .then(({ data: response }) => {
        if (response.success) {
          setLoading(false);
          setAyatNotes(response.list);
          setTotalRecord(response.total_records);
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
    getAllAyatNotes();
    getAllScholars();
    getAllLanguages();
    const userId = localStorage.getItem("userId");
    setSelectedScholars(userId);
    // eslint-disable-next-line
  }, [currentPage]);
  const columns = [
    {
      title: "Sr",
      dataIndex: "id",
      key: "eighth",
      width: "auto",
      className: "dark:bg-darkBody",
    },
    {
      title: "File Name",
      dataIndex: "noteLabel",
      key: "seventh",
      width: "auto",
      className: "dark:bg-darkBody",
    },
    {
      title: "Scholar Name",
      dataIndex: "scholarName",
      key: "sixth",
      width: "auto",
      className: "dark:bg-darkBody",
    },
    {
      title: "Surah",
      dataIndex: "surahNo",
      key: "fifth",
      width: "auto",
      className: "dark:bg-darkBody",
    },
    {
      title: "Ayat",
      dataIndex: "ayatNo",
      key: "forth",
      width: "auto",
      className: "dark:bg-darkBody",
    },
    {
      title: "Language",
      dataIndex: "languageName",
      key: "tenth",
      width: "auto",
      className: "dark:bg-darkBody",
    },
    {
      title: "File",
      dataIndex: "noteFile",
      width: "auto",
      key: "third",
      className: "dark:bg-darkBody",
    },
    {
      title: "Action",
      dataIndex: "btn",
      key: "action",
      render: (_: any, record: { id: React.SetStateAction<null>, noteFile:any }) =>
        ayatNotes.length >= 1 ? (
          <>
            <Space size="middle">
            <a href={'http://beta.dev.researchquran.org/laravel/public/ayatNotes/'+record.noteFile} target="_blank" rel="noreferrer" className="cursor-pointer">
                View{" "}
              </a>
              <Button type='primary' size="small" onClick={() => handleEdit(record)} className="cursor-pointer">
                Edit{" "}
              </Button>
              <Popconfirm
                title="sure to delete"
                onConfirm={() => handledel(record.id)}
              >
                <Button danger size="small">
                  Delete
                </Button>
              </Popconfirm>
            </Space>
          </>
        ) : null,
    },
  ];

  // console.log(ayatNotes);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <>
      <div className="container-fluid mt-5 mr-5">
        <div style={{ width: "100%" }}>
          <Row>
            <Col span={12}>
              <Text strong style={{ fontSize: "24px" }}>
                Ayat Notes
              </Text>
            </Col>
            <Col span={12}>
              <Button
                type="primary"
                className=" float-right"
                style={{ fontSize: "12px" }}
                onClick={() => handleFormOpen()}
              >
                Add New
              </Button>
            </Col>
          </Row>
          <Table
            columns={columns}
            dataSource={ayatNotes}
            pagination={false}
            loading={{ spinning: loading, indicator: antIcon }}
          />
          <Pagination
            total={totalRecord}
            current={currentPage}
            pageSize={10}
            onChange={(page: number) => setCurrentPage(page)}
          />
        </div>
        <AyatNotesForm
          isOpen={isOpen}
          scholars={scholars}
          verses={verses}
          selectedName={selectedName}
          selectedScholars={selectedScholars}
          selectedSurah={selectedSurah}
          selectedAyat={selectedAyat}
          updateId={updateId}
          loading={loading}
          languages={languages}
          selectedLanguage={selectedLanguage}
          handleChangeName={handleChangeName}
          handleChangeAyat={handleChangeAyat}
          // handleChangeScholar={handleChangeScholar}
          handleFileChange={handleFileChange}
          handleSubmit={handleSubmit}
          handleCloseModel={handleCloseModel}
          handleChangeSurah={handleChangeSurah}
          handleChangeLanguage={handleChangeLanguage}
          title={title}
          inputKey={inputKey}
        />
      </div>
    </>
  );
};

export default AyatNotes;
