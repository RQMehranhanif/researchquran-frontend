/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  EditOutlined,
  LoadingOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Row,
  Select,
  Pagination,
  Typography,
  Table,
  Space,
  Popconfirm,
  Spin,
} from "antd";
import { Option } from "antd/lib/mentions";
import { useEffect, useState } from "react";
import {
  deleteTranslation,
  getfilterTranslations,
} from "../../Actions/Translation/translation";
import { OpenNotification } from "../../Actions/Utilities/Utilities";
import { filterSurah } from "../../Actions/WordByWordActions/WordByWord";
import "./style.css";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
const { Text } = Typography;
const style: React.CSSProperties = { padding: "0px 0px" };

function MyTranslation() {
  const [allData, setAllData] = useState<any>([]);
  const [columns, setColumns] = useState<any>([]);
  const [verseLoader, setVerseLoader] = useState<any>(false);
  const [mainLoader, setMainLoader] = useState<any>(false);

  const [verses, setVerses] = useState<any>("");
  const [verseId, setVersesId] = useState<any>("");
  const [surahID, setSurahId] = useState<any>("");
  const [words, setWords] = useState<any>("");
  const [page, setPage] = useState<any>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [perPage, setPerPage] = useState<number>(1);

  const [record, setRecord] = useState<any>(0);


  var surahs = JSON.parse(localStorage?.getItem("surahs") as any);
  const navigate = useNavigate();
  useEffect(() => {
    getTranslation()
  }, [currentPage]);
  function getTranslation() {
    setMainLoader(true);
    getfilterTranslations(surahID, verseId, words.word ?? "", page, currentPage)
      .then(({ data: response }) => {
        if (response.success === true) {
          setMainLoader(false);
          setColumns(response.columns);
          setRecord(response.totalRecords);
          setAllData(response.list);
          setPerPage(response.list.length);
          OpenNotification("success", response.message);
        } else {
          OpenNotification("error", response.message);
        }
      })
      .catch((err) => {
        OpenNotification("error", err);
      });
  }
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  columns.push({
    title: "Action",
    dataIndex: "btn",
    key: "action",
    className: "",
    render: (_: any, record: any, index: any) => (
      <>
        <Space direction="horizontal">
          <Button
            icon={<EditOutlined />}
            shape={"circle"}
            style={{ marginRight: 8 }}
            onClick={() => handleEdit(record)}
          />
          <Popconfirm
            title="Are you sure？"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handledel(record, index)}
          >
            <Button icon={<MinusOutlined />} shape={"circle"} danger />
          </Popconfirm>
        </Space>
      </>
    ),
  });

  /* const columns = [
    {
      title: "Action",
      dataIndex: "btn",
      key: "action",
      className: "",
      render: (_: any, record: any, index: any) => (
        <>
          <Space direction="horizontal">
            <Button
              icon={<EditOutlined />}
              shape={"circle"}
              style={{ marginRight: 8 }}
              onClick={() => handleEdit(record, index)}
            />
            <Popconfirm
              title="Are you sure？"
              okText="Yes"
              cancelText="No"
              onConfirm={() => handledel(record, index)}
            >
              <Button icon={<MinusOutlined />} shape={"circle"} danger />
            </Popconfirm>
          </Space>
        </>
      ),
    },
    {
      title: "Scholar",
      dataIndex: "scholar",
      width: "auto",
      // key: "third",
      className: "",
    },
    {
      title: "English",
      dataIndex: "english",
      width: "auto",
      // key: "third",
      className: "w-50 m-0",
      render: (_: any, record: any) => (
        <>
          <span>{record.eng}</span>
        </>
      ),
    },
    {
      title: "Urdu",
      dataIndex: "urdu",
      width: "auto",
      // key: "third",
      className: "",
      render: (_: any, record: any) => (
        <>
          <span>{record.urdu}</span>
        </>
      ),
    },
    {
      title: "Ayah",
      dataIndex: "arabic",
      width: "auto",
      // key: "third",
      className: "text-right w-75 ",
      render: (_: any, record: any, index: any) => (
        <>
          <Title level={5} className="font-noorehuda">
            {record?.ayat}
          </Title>
        </>
      ),
    },
    {
      title: "#",
      dataIndex: "reference",
      width: "auto",
      // key: "third",
     
    },
  ]; */

  const handleChange = (e: any) => {
    setVerseLoader(true);
    var data = new FormData();
    data.append("surahId", e);

    setSurahId(e);
    filterSurah(data)
      .then(({ data: response }) => {
        if (response.success) {
          setVerseLoader(false);
          setVerses(response.list);
        } else {
          OpenNotification("error", response.message);
        }
      })
      .catch((err: any) => {
        OpenNotification("error", err);
      });
  };
  const handleVerseChange = (e: any) => {
    setVersesId(e);
  };
  const handleWordChange = (e: any) => {
    setWords({ ...words, [e.target.name]: e.target.value });
  };
  const handleSearch = () => {
    setMainLoader(true);
    getfilterTranslations(
      surahID,
      verseId,
      words.word ?? "",
      page,
      currentPage
    ).then(({ data: response }) => {
      setMainLoader(false);
      setAllData(response.list);
      setRecord(response.totalRecords);
      setPerPage(response.list.length);
    });
  };
  const handlePageChange = (e: any) => {
    setPage(e);
  };
  const handledel = (data: any, index: any) => {
    setMainLoader(true);
    deleteTranslation(data.id).then(({ data: response }) => {
      setMainLoader(false);
      getTranslation()
      /* const data = allData.filter((item: any) => item.reference !== data.reference);
      
      setAllData(data); */
    });
  };
  const handleEdit = (data: any) => {
    navigate("/addtranslation", {
      state: {
        surahId: data.surahId,
        scholarId: data.scholarId,
        ayatNo: data.ayatNo,
      },
    });
  };

  return (
    <>
      {/* <div className="container-fluid"> */}
        <Card style={{ position: 'fixed', width: '100%', zIndex: 1, }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={5} style={{ marginTop: "-4px" }}>
              <div style={{ padding: "-1px 25px" }}>
                <Text
                  strong
                  style={{ justifyContent: "center", fontSize: "24px" }}
                >
                  My Translation
                </Text>
              </div>
            </Col>
            <Col className="gutter-row" span={4}>
              <div style={style}>
                <Select
                  showSearch
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    border: "1px solid #d9d9d9",
                  }}
                  placeholder="Select Surahs"
                  optionFilterProp="children"
                  className="dark:text-white"
                  onChange={(e) => handleChange(e)}
                >
                  {surahs.map((res: any) => {
                    return (
                      <Option
                        value={res.id}
                        key={res.id}
                        style={{ textAlign: "right" }}
                      >
                        {res.arabic}{" "}
                        <span style={{ float: "right" }}>{" :" + res.id}</span>
                      </Option>
                    );
                  })}
                </Select>
              </div>
            </Col>
            <Col className="gutter-row" span={4}>
              <div style={style}>
                <Spin spinning={verseLoader} indicator={antIcon}>
                  <Select
                    showSearch
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      border: "1px solid #d9d9d9",
                    }}
                    placeholder="Select Verse"
                    optionFilterProp="children"
                    className="dark:text-white"
                    onChange={(e) => handleVerseChange(e)}
                  >
                    {verses &&
                      verses.map((res: any) => {
                        return (
                          <Option
                            value={res.ayatNo}
                            key={res.id}
                            style={{ textAlign: "right" }}
                          >
                            {res.ayatNo}
                          </Option>
                        );
                      })}{" "}
                  </Select>
                </Spin>
              </div>
            </Col>
            <Col className="gutter-row" span={4}>
              <div style={style}>
                <Input
                  type="text"
                  name="word"
                  placeholder="Search Word"
                  onChange={(e) => handleWordChange(e)}
                />
              </div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div style={style}>
                <Select
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    border: "1px solid #d9d9d9",
                  }}
                  optionFilterProp="children"
                  placeholder="Line PerPage"
                  onChange={(e) => handlePageChange(e)}
                >
                  <Option value="50">50</Option>
                  <Option value="100">100</Option>
                  <Option value="500">500</Option>
                </Select>
              </div>
            </Col>
            <Col className="gutter-row" span={4}>
              <div style={style}>
                <Space>
                  <Button type="primary" onClick={handleSearch}>
                    Search
                  </Button>
                  <Button className="primary" disabled>
                    Total: {record}
                  </Button>
                </Space>
              </div>
            </Col>
          </Row>
          <Pagination
            className="mt-3"
            style={{float:'right'}}
            current={currentPage}
            total={record}
            pageSize={50}
            showSizeChanger={false}
            onChange={(page: number) => setCurrentPage(page)}
          />
        </Card>
        <Card size="small">
        <div style={{ paddingTop: '130px',  width: '100%' }}>
          <Table
            columns={columns.reverse()}
            dataSource={allData}
            pagination={false}
            bordered
            rowClassName='font-signika text-base text-center'
            loading={{ spinning: mainLoader, indicator: antIcon }}
          />
          </div>
        </Card>

      {/* </div> */}
    </>
  );
}

export default MyTranslation;
