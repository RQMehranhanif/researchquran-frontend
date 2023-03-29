import React from "react";
import { Col, Row, Tooltip } from "antd";
import { EyeOutlined, InfoCircleOutlined } from "@ant-design/icons";
interface Props {
  columns: any[];
  words: any[];
}
const UpdatedWordByWord: React.FC<Props> = ({ columns, words }) => {
  return (
    <Row justify="space-around" style={{ marginBottom: "10px" }}>
      <Col xl={23}>
        <div style={{ overflowX: "auto", direction: "rtl" }}>
          <table
            className="table table-bordered "
            style={{ border: "1px solid #252525", direction: "rtl" }}
          >
            <tbody className="text-center ">
              {columns.map((columnItem, index) => (
                <div className="word-display table-heading" key={index} style={{ position: 'sticky', right: '0', backgroundColor: '	#71797E' }}>
                  {columnItem.title === "اللفظ" ?
                    (
                      <>
                        <div style={{ paddingBottom: '4px' }}>
                          {columnItem.title}
                        </div>
                      </>
                    ) : columnItem.title === "Grammar" ? (
                      <>
                        <div style={{ height: '30px' }}>
                          {columnItem.title}
                        </div>
                      </>
                    ) : (
                      <>{columnItem.title}</>
                    )}

                </div>
              ))}

              {words.map((wordItem, index) => {
                return (
                  <td>
                    {columns.map((columnItem, index) => {
                      // console.log(count(wordItem[columnItem.key]))
                      return (
                        <div className="word-display" key={index} >
                          {wordItem[columnItem.key] !== undefined &&
                            wordItem[columnItem.key] !== ""
                            ? <>

                              {columnItem.key === "word" ?
                                (
                                  <>

                                    {wordItem.quranicLexiconNumber >= 2 || wordItem.quranicLexiconType === "Referred" || wordItem.quranicLexiconType === "Source" ? (
                                      <><div style={{ backgroundColor: 'gray', color: 'lightgreen', paddingBottom: '4px' }} >
                                        <Tooltip title="View Grammer Details" color={'#2db7f5'}>
                                          <a href={`https://corpus.quran.com/wordmorphology.jsp?location=(${wordItem.reference})`} rel="noreferrer" style={{ float: 'right', color: 'lightgreen' }} target="_blank"><InfoCircleOutlined /></a>
                                        </Tooltip>
                                        <span className="inner-word">{wordItem[columnItem.key]}</span>
                                      </div>
                                      </>
                                    ) : (
                                      <>
                                        <div style={{ paddingBottom: '4px' }}>
                                          <Tooltip title="View Grammer Details" color={'#2db7f5'}>
                                            <a href={`https://corpus.quran.com/wordmorphology.jsp?location=(${wordItem.reference})`} rel="noreferrer" style={{ float: 'right' }} target="_blank"><InfoCircleOutlined /></a>
                                          </Tooltip>
                                          <span className="inner-word">{wordItem[columnItem.key]}</span>
                                        </div>
                                      </>
                                    )}

                                  </>
                                ) : columnItem.key === "grammaticalDescription" ? (
                                  <>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5px' }}>
                                      {wordItem.usmaniStyle !== "" &&
                                        <Tooltip title="Arabic 1" color={'#2db7f5'}>
                                          <a href={`https://beta.dev.researchquran.org/laravel/public/grammarNotes/` + wordItem.usmaniStyle} rel="noreferrer" style={{ float: 'right', verticalAlign: 'top', color: 'green' }} target="_blank"><EyeOutlined style={{ height: '10px', width: '25px' }} /></a>
                                        </Tooltip>
                                      }
                                      {wordItem.arabicGrammar !== "" &&
                                        <Tooltip title="Arabic 2" color={'#2db7f5'}>
                                          <a href={`https://beta.dev.researchquran.org/laravel/public/grammarNotes/` + wordItem.arabicGrammar} rel="noreferrer" style={{ float: 'right', verticalAlign: 'bottom', color: 'blue', marginRight: '5px' }} target="_blank"><EyeOutlined style={{ height: '10px', width: '10px' }} /></a>
                                        </Tooltip>
                                      }

                                    </div>

                                    {wordItem[columnItem.key].length >= 20 ? (
                                      <>
                                        <Tooltip title={wordItem[columnItem.key]} color={'#2db7f5'}>
                                          <span className="inner-word">{`${wordItem[columnItem.key].substring(0, 20)}...`}</span>
                                        </Tooltip>
                                      </>
                                    ) : (
                                      <>
                                        <span className="inner-word">{wordItem[columnItem.key]}</span>
                                      </>
                                    )}


                                  </>
                                ) : columnItem.key === "rootWord" ? (
                                  <>
                                    <Tooltip title="View Grammer Details" color={'#2db7f5'}>
                                      <a href={`https://corpus.quran.com/qurandictionary.jsp?q=${wordItem.engRootWord})`} rel="noreferrer" style={{ float: 'right' }} target="_blank"><InfoCircleOutlined /></a>
                                    </Tooltip>
                                    <span className="inner-word">{wordItem[columnItem.key]}</span>
                                  </>
                                ) : columnItem.key === "quranicLexiconType" ? (
                                  <>
                                    {wordItem.quranicLexiconNumber >= 2 || wordItem.quranicLexiconType === "Referred" || wordItem.quranicLexiconType === "Source" ? (
                                      <>
                                        <div style={{ backgroundColor: 'gray', color: 'lightgreen' }} >
                                          <span className="inner-word">{wordItem[columnItem.key]}</span>
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        <span className="inner-word">{wordItem[columnItem.key]}</span>
                                      </>
                                    )}

                                  </>
                                ) : (
                                  <>
                                    {columnItem.note !== "" && wordItem[columnItem.note] !== "" && wordItem[columnItem.key] !== undefined && wordItem[columnItem.key] !== "" ? (
                                      <>
                                        <Tooltip title="View Word Details" color={'#2db7f5'}>
                                          <a href={`https://beta.dev.researchquran.org/laravel/public/wordsNotes/` + wordItem[columnItem.note]} target="_blank" rel="noreferrer" style={{ float: 'right' }}><EyeOutlined style={{ color: '#2db7f5', marginRight: '3px' }} /></a>
                                        </Tooltip>
                                        <span className="inner-word">{wordItem[columnItem.key]}</span>
                                      </>
                                    ) : (
                                      <>
                                        <span className="inner-word">{wordItem[columnItem.key]}</span>
                                      </>
                                    )}

                                  </>
                                )}

                            </>
                            : 
                            <>
                              {wordItem.quranicLexiconNumber >= 2 || wordItem.quranicLexiconType === "Referred" || wordItem.quranicLexiconType === "Source" ? (
                                <><div style={{ backgroundColor: 'gray', color: 'lightgreen' }} >
                                 -
                                </div>
                                </>
                              ) : (
                                "-"
                              )}
                            </>
                          }

                        </div>
                      );
                    })}
                  </td>
                );
              })}
            </tbody>
          </table>
        </div>
      </Col>
    </Row>
  );
};
export default UpdatedWordByWord;
