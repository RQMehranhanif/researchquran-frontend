/* eslint-disable @typescript-eslint/no-unused-vars */
import { Col, Row, Spin, Typography } from "antd";
import React, { useEffect, useState } from "react";
import "./style.css";
import {
  getwordsearch
} from "../../Actions/WordSearchActions/WordSearch";
import { OpenNotification } from "../../Actions/Utilities/Utilities";
import AyatTranslation from "../../components/AyatTranslation/AyatTranslation";
import WordTranslation from "../../components/WordTranslation/WordTranslation";
import WordSearchFilter from "../../components/FilterComponent/WordSearchFilter";
import { LoadingOutlined } from "@ant-design/icons";
import UpdatedWordByWord from "../WordbyWord/UpdatedWordByWord";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
function WordSearch() {
  const [data, setData] = React.useState<any[]>([]);
  const [newdata, setNewdata] = React.useState<any[]>([]);
  const [loading, settLoading] = useState<boolean>(false);
  const [languageHeadings, setLanguageHeadings] = useState<any[]>([]);
  const [perPage, setPerPage] = React.useState<number>(50);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalRecord, setTotalRecords] = React.useState<number>(50);
  const [searchType, setSearchType] = React.useState<string>("");
  const [search, setSearch] = React.useState<any>("");
  const [columns, setColumns] = React.useState<any>([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [checkPageStatus, setCheckPageStatus] = React.useState<number>(0);
  const changeCurrentPage = (e: number) => {
    setCurrentPage(e);
  };
  const changePerPage = (e: number) => {
    setPerPage(e);
  }
  const handleChangeSearch = (e:any) => {
    console.log(e.target.value);
    
     setSearch(e.target.value);
  }

  const handleChangeSearchByTranslation = (e:any) => {
    console.log(e.target.value);
    
     setSearch(e.target.value);
  }

  const handleChangeSearchType = (e:string) => {
    console.log(e);

    setSearchType(e);
  }
  const fetchwordsearch = () => {
     settLoading(true);
    getwordsearch(search, searchType, perPage, currentPage)
      .then(({ data: response }) => {
        if (response.success) {
          settLoading(false);
          console.log(response.data);
          setColumns(response.columns);
          setTotalRecords(response.total);
          setData(response.list);
          setNewdata(response.data.words_headings);
          setLanguageHeadings(response.data.language_headings);
        } else {
          OpenNotification("error", response.message);
        }
      })
      .catch((err) => {
        console.log("error", err);
        settLoading(false);
      });
  }
  
  useEffect(() => {
    fetchwordsearch();
    // eslint-disable-next-line
  }, [currentPage]);
  return (
    <>
      <WordSearchFilter
        perPage={perPage}
        totalRecord={totalRecord}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
        changePerPage={changePerPage}
        fetchwordsearch={fetchwordsearch}
        handleChangeSearch={handleChangeSearch}
        handleChangeSearchType={handleChangeSearchType}
        handleChangeSearchByTranslation={handleChangeSearchByTranslation}
      />
      <Spin spinning={loading} indicator={antIcon} className='mt-5'>
        {/* <Row>
          <Col span={24}> */}
          <div style={{ paddingTop: '150px', overflowY: 'scroll', width: '100%' }}>
            {data.map((item) => {
              return (
                <div key={item.id} >
                  <AyatTranslation
                  scholarId={item.scholarId}
                    surahId={item.surahId}
                    ayatId={item.ayatId}
                    arabic={item.arabic}
                    translations={item.ayatTranslations}
                    checkPageStatus={checkPageStatus}
                  />
                  <UpdatedWordByWord
                    columns={columns ?? []}
                    words={item.words ?? []}
                  />
                </div>
              );
            })}
            </div>
          {/* </Col>
        </Row> */}
      </Spin>
    </>
  );
}
export default WordSearch;
