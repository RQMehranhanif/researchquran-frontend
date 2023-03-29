import React, { useState } from "react";
import { Spin } from "antd";
import { useEffect } from "react";
import UpperRow from "./UpperRow";
import { getscholartranslations, filterSurah } from "../../Actions/ScholarTranslationActions/ScholarTranslation";
import { OpenNotification } from "../../Actions/Utilities/Utilities";
import { LoadingOutlined } from "@ant-design/icons";
import AyatTranslation from "../../components/AyatTranslation/AyatTranslation";

const ScholarTranslation = () => {
  const [data, setData] = React.useState<any[]>([]);
  // const [surahs, setSurahs] = React.useState<any>([]);
  const [scholars, setScholars] = React.useState<any[]>([]);
  const [scholarIds, setScholarIds] = React.useState<string[]>([]);
  const [surahId, setSurahId] = React.useState<string>("");
  const [fromVerse, setFromVerse] = React.useState<string>("");
  const [toVerse, setToVerse] = React.useState<string>("");
  const [perPage, setPerPage] = React.useState<number>(50);
  const [totalRecords, setTotalRecords] = React.useState<number>(50);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [checkPageStatus, setCheckPageStatus] = React.useState<number>(1);
  const [verseLoader, setVerseLoader] = React.useState<any>(false);
  const [loading, settLoading] = useState<boolean>(false);
  const [verses, setVerses] = React.useState<any>("");
  const changeCurrentPage = (e: number) => {
    setCurrentPage(e);
  };
  // const handleChangeSurah = (e: string) => {
  // setSurahId(e);
  const handleChangeSurah = (e: string) => {
    setVerseLoader(true);
    var data = new FormData();
    data.append("surahId", e);
    filterSurah(data)
      .then(({ data: response }) => {
        settLoading(false);
        setVerseLoader(false);
        if (response.success) {
          setSurahId(e);
          setVerses(response.list);
        } else {
          OpenNotification("error", response.message);
        }
      })
      .catch((err: any) => {
        console.log("error", err);
      });
  };
  // };
  const changeFromVerse = (e: string) => {
    setFromVerse(e);
  };
  const changeToVerse = (e: string) => {
    setToVerse(e);
  };
  const handleChangeScholars = (e: string[]) => {
    setScholarIds(e);
  };
  const handleChangePerPage = (e: number) => {
    setPerPage(e);
  };
  useEffect(() => {
    settLoading(true);
    //   const storedNames = localStorage.getItem("surahs");
    getscholartranslations(surahId, fromVerse, toVerse, scholarIds.toString(), perPage, currentPage)
      .then(({ data: response }) => {
        if (response.success) {
          settLoading(false);
          setData(response.list);
          // setSurahs(storedNames);
          setScholars(response.scholars);
          setTotalRecords(response.totalRecords);
        } else {
          settLoading(false);

          OpenNotification("error", response.message);
        }
      })
      .catch((err: any) => {
        console.log("error", err);
      });

  }, [scholarIds, fromVerse, toVerse, surahId, perPage, currentPage]);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <>
      <UpperRow
        handleChangeSurah={handleChangeSurah}
        changeFromVerse={changeFromVerse}
        changeToVerse={changeToVerse}
        scholars={scholars}
        verses={verses}
        verseLoader={verseLoader}
        handleChangeScholars={handleChangeScholars}
        handleChangePerPage={handleChangePerPage}
        totalRecords={totalRecords}
        perPage={perPage}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
      />
        <Spin spinning={loading} indicator={antIcon} className='mt-5'>
          <div style={{ paddingTop: '150px', overflowY: 'scroll', width: '100%' }}>
            {data.map((item) => {
              return (
                <div key={item.id}>
                  <AyatTranslation
                    scholarId={item.scholarId}
                    surahId={item.surahId}
                    ayatId={item.ayatNo}
                    arabic={item.arabic}
                    translations={item.ayatTranslations}
                    checkPageStatus={checkPageStatus}
                  />
                </div>
              );
            })}
          </div>
          {/* {data.map((i) => {
        return (
          <div key={i.id}>
            <Row justify="space-around" align="middle">
              <Col span={23}>
                <Card
                  size="small"
                  extra={
                    <>
                      <Text strong style={{marginRight:'10px'}}>{"." + i.arabic}</Text>
                      <Text strong style={{ float: "right", color: "#1890FF" }}>
                        {" (" + i.surah_id + ":" + i.ayatNo + ")"}
                      </Text>
                    </>
                  }
                  style={{ marginTop: "10px" }}
                >
                  {i.ayats_translations.map(
                    (aya_trans: {
                      scholarinfo: any;
                      language_id: number;
                      translation: string;
                    }) => {
                      return (
                        <>
                          {aya_trans.language_id === 2 ? (
                                                          <Row style={{ marginTop: "10px" }}>

                            <Badge.Ribbon
                              placement="start"
                              text={aya_trans.scholarinfo.short_name}
                            >
                                <Col
                                  span={24}
                                  style={{
                                    marginTop: "7px",
                                    marginLeft: "60px",
                                  }}
                                >
                                  <Text strong className="ml-5">{aya_trans.translation}</Text>
                                </Col>
                            </Badge.Ribbon>
                              </Row>
                          ) : (
                            <Badge.Ribbon
                              placement="end"
                              text={aya_trans.scholarinfo.short_name}
                            >
                              <Row style={{ marginTop: "10px" }}>
                                <Col span={1}></Col>
                                <Col
                                  span={23}
                                  style={{
                                    marginTop: "7px",
                                    marginRight: "60px",
                                    paddingRight: '30px',
                                    textAlign: "right",

                                  }}
                                >
                                  <Text strong >{aya_trans.translation}</Text>
                                </Col>
                              </Row>
                            </Badge.Ribbon>
                          )}
                        </>
                      );
                    }
                  )}
                </Card>
              </Col>
            </Row>
          </div>
        );
      })} */}
        </Spin>
    </>
  );
};

export default ScholarTranslation;
