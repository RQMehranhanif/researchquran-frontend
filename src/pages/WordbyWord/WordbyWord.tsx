/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Col, Row, Spin, Typography } from "antd";
import React, { useEffect, useState } from "react";
import "./style.css";
import { SurahsType } from "../../Types/Translations";
import {
  getwordbyword,
  filterSurah,
} from "../../Actions/WordByWordActions/WordByWord";
import { AyatNotesType } from "../../Types/AyatNotes";
import { OpenNotification } from "../../Actions/Utilities/Utilities";
import AyatTranslation from "../../components/AyatTranslation/AyatTranslation";
import WordTranslation from "../../components/WordTranslation/WordTranslation";
import UpdatedWordByWord from "./UpdatedWordByWord";
import WordbyWordFilter from "../../components/FilterComponent/WordbyWordFilter";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setdiagnosis } from "../../Redux/reducers/wordByWordReducer";
import { useLocation } from "react-router-dom";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
function WordbyWord() {
  const [data, setData] = React.useState<any[]>([]);
  const [loading, settLoading] = useState<boolean>(false);
  const [surahId, setSurahId] = React.useState<string>("");
  const [verses, setVerses] = React.useState<any>("");
  const [fromVerse, setFromVerse] = React.useState<string>("");
  const [toVerse, setToVerse] = React.useState<string>("");
  const [perPage, setPerPage] = React.useState<number>(50);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalRecords, setTotalRecords] = React.useState<number>(50);
  const [columns, setColumns] = React.useState<any>([]);
  const [ayatNotes, setAyatNotes] = React.useState<AyatNotesType[]>([]);
  const [verseLoader, setVerseLoader] = React.useState<boolean>(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [checkPageStatus, setCheckPageStatus] = React.useState<number>(0);
  const changeCurrentPage = (e: number) => {
    setCurrentPage(e);
  };
  const location = useLocation();
  const alldata = location?.state?.WordData;
  console.log(alldata);

  const dispatch = useDispatch();
  /*   const params = useP
   */ const fetchWordByWordData = () => {
    settLoading(true);
    getwordbyword(
      surahId === "" ? alldata?.surahId === undefined?'':alldata?.surahId : surahId,
      fromVerse === "" ? alldata?.fromVerse === undefined?'':alldata?.fromVerse : fromVerse,
      toVerse === "" ? alldata?.toVerse === undefined?'': alldata?.toVerse: toVerse,
      perPage === null ? alldata?.perPage === undefined?50:alldata?.perPage : perPage,
      currentPage === null ? alldata?.currentPage === undefined?1:alldata?.currentPage : currentPage
    )
      .then(({ data: response }) => {
        if (response.success) {
          settLoading(false);
          setColumns(response.columns);
          setData(response.list);
          setTotalRecords(response.total);
          dispatch(
            setdiagnosis({ surahId, fromVerse, toVerse, perPage, currentPage })
          );
          // setAyatNotes(response.ayatsNotesData)
        } else {
          OpenNotification("error", response.message);
        }
      })
      .catch((err) => {
        console.log("error", err);
        settLoading(false);
      });
  };
  useEffect(() => {
    fetchWordByWordData();
    // eslint-disable-next-line
  }, [currentPage]);
  
  const handleChangeSurah = (e: string) => {
    setVerseLoader(true);
    setToVerse("");
    setFromVerse("");
    var data = new FormData();
    data.append("surahId", e);
    filterSurah(data)
      .then(({ data: response }) => {
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
  const handleOpenPdf = (ayatId: number, scholarId: number) => {
    if (ayatNotes !== undefined) {
      const note = ayatNotes.filter(
        (item: { ayatId: number; scholarId: number }) =>
          item.ayatId === ayatId && item.scholarId === scholarId
      );
      console.log(note, ayatNotes);
      if (note.length > 0) {
        const file = note[0].noteFile;
        const url =
          "http://beta.dev.researchquran.org/laravel/public/ayatsNotes/" + file;
        window.open(url, "_blank");
      }
    }
  };
  // const handleOpenWordPdf = (wordId:number, scholarId:number) =>{
  //   console.log(wordId, scholarId);

  //   // if(ayatNotes !== undefined){
  //   //   const note = ayatNotes.filter((item: { ayatId: number; scholarId: number; }) =>item.ayatId === ayatId && item.scholarId === scholarId);
  //   //   console.log(note, ayatNotes);
  //   //   if(note.length > 0){

  //   //     const file = note[0].noteFile;
  //   //     const url = 'http://beta.dev.researchquran.org/laravel/public/ayatsNotes/'+file;
  //   //     window.open(url, '_blank');
  //   //   }
  //   // }

  // }
  //   const isAyatNoteExist = (ayatId:number, scholarId:number) => {
  //     const note = ayatNotes.filter((item: { ayatId: number; scholarId: number; }) =>item.ayatId === ayatId && item.scholarId === scholarId);
  // return note.length > 0 ? true : false;
  //   }

  return (
    <>
      <WordbyWordFilter
        totalRecords={totalRecords}
        perPage={perPage}
        verses={verses}
        verseLoader={verseLoader}
        changeFromVerse={(e) => setFromVerse(e)}
        changeToVerse={(e) => setToVerse(e)}
        changePerPage={(e) => setPerPage(e)}
        handleChangeSurah={handleChangeSurah}
        fetchWordByWordData={fetchWordByWordData}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
        antIcon={antIcon}
      />
      <Spin spinning={loading} indicator={antIcon} className='mt-5'>
        {/* <Row>
          <Col span={24}> */}
          <div style={{ paddingTop: '150px', overflowY: 'scroll', width: '100%' }}>
            {data.map((item) => {
              return (
                <div key={item.id}>
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
export default WordbyWord;
