import React from "react";
import { Badge, Card, Col, Row, Tooltip, Typography } from "antd";
import { AyatProps, AyatTranslations } from "../../Types/Translations";
import { EyeOutlined } from "@ant-design/icons";
const { Text } = Typography;
const AyatTranslation: React.FC<AyatProps> = ({
  arabic,
  translations,
  ayatId,
  surahId,
  checkPageStatus
}) => {
  return (
    <>
      <Row justify="space-around" align="middle">
        <Col span={23}>
          {/* {checkPageStatus === 1 ? (
          <>
          <Card
            size="small"
            extra={
              <>
                <Text strong style={{ float: "right", color: "#1890FF" }}>
                  {" (" + surahId + ":" + ayatId + ")"}
                </Text>
                <Text strong style={{float: 'right', textAlign: 'right'}}>{"." + arabic}</Text>
              </>
            }
            style={{ marginTop: "10px" }}
          >
            {translations &&
              translations.map((item: AyatTranslations, index: number) => (
                <div key={index}>
                  <>
                    {item.languageId === 2 ? (
                      <Badge.Ribbon
                        placement="start"
                        text={item.scholarName}
                      >
                        <Row style={{ marginTop: "10px" }}>
                          <Col span={2}></Col>
                          <Col
                            span={22}
                            style={{
                              marginTop: "7px",
                              marginLeft: "100px",
                            }}
                          >
                            <Text strong>{item.translation}
                            </Text>
                          </Col>
                        </Row>
                      </Badge.Ribbon>
                    ) : (
                      <Badge.Ribbon
                        placement="end"
                        text={item.scholarName}
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
                            <Text strong>{item.translation}
                            </Text>
                          </Col>
                        </Row>
                      </Badge.Ribbon>
                    )}
                  </>
                </div>
              ))}
          </Card>
          </>
            ):(
            <> */}
          <Card
            size="small"
            extra={
              <>
                <Text strong style={{ float: "right", color: "#1890FF" }}>
                  {" (" + surahId + ":" + ayatId + ")"}
                </Text>
                <Tooltip title="View Grammatical Details" color={'#2db7f5'}>
                  <a href={`https://corpus.quran.com/treebank.jsp?chapter=${surahId}&verse=${ayatId}`} rel="noreferrer" style={{ marginRight: '3px', marginLeft:'3px', float:'right' }} target="_blank"><EyeOutlined /></a>
                </Tooltip>
                <Text strong style={{float: 'right', textAlign: 'right' }}>{"." + arabic}</Text>
              </>
            }
            style={{ marginTop: "10px" }}
          >
            {translations &&
              translations.map((item: AyatTranslations, index: number) => (
                <div key={index}>
                  <>
                    {item.languageId === 2 ? (
                      <Badge.Ribbon
                        placement="start"
                        text={item.scholarName}
                      >
                        <Row style={{ marginTop: "10px" }}>
                          <Col span={2}></Col>
                          <Col
                            span={22}
                            style={{
                              marginTop: "7px",
                              marginLeft: "100px",
                            }}
                          >
                            {item.note !== "" && (
                              <Tooltip title="View Translation Details" color={'#2db7f5'}>
                                <a href={`https://beta.dev.researchquran.org/laravel/public/ayatNotes/`+item.note} target="_blank" rel="noreferrer"><EyeOutlined style={{ color: '#2db7f5', marginRight: '3px' }} /></a>
                              </Tooltip>
                            )
                            }
                            <Text strong>{item.translation}
                            </Text>
                          </Col>
                        </Row>
                      </Badge.Ribbon>
                    ) : (
                      <Badge.Ribbon
                        placement="end"
                        text={item.scholarName}
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
                            <Text strong>{item.translation}</Text>
                            {item.note !== "" && (
                              <Tooltip title="View Translation Details" color={'#2db7f5'} >
                                <a href={`https://beta.dev.researchquran.org/laravel/public/ayatNotes/`+item.note}><EyeOutlined style={{ color: '#2db7f5', marginRight: '3px'}} /></a>
                              </Tooltip>
                            )
                            }
                          </Col>
                        </Row>
                      </Badge.Ribbon>
                    )}
                  </>
                </div>
              ))}
          </Card>
          {/* </>
          )} */}
        </Col>
      </Row>
    </>
  );
};
export default AyatTranslation;
