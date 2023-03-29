
import React from "react";
import { Button, Card, Col, Pagination, Row, Select, Spin, Typography } from "antd";
const { Option } = Select;
const { Text } = Typography;
// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const style: React.CSSProperties = { padding: '0px 0px' };
interface Verses {
  id: number;
  ayatNo: number;
}
interface Props {
  verses: Verses[];
  totalRecords: number;
  perPage: number;
  antIcon:any;
  handleChangeSurah: (surahId: string) => void;
  changeFromVerse: (fromVerse: string) => void;
  changeToVerse: (toVerse: string) => void;
  changePerPage: (perPage: number) => void;
  fetchWordByWordData: () => void;
  changeCurrentPage: (perPage: number) => void;
  currentPage: number;
  verseLoader: boolean;
}
const WordbyWordFilter: React.FC<Props> = ({
  verses,
  totalRecords,
  perPage,
  verseLoader,
  antIcon,
  changeFromVerse,
  changeToVerse,
  changePerPage,
  handleChangeSurah,
  fetchWordByWordData,
  currentPage,
  changeCurrentPage
}) => {
  var storedNames = JSON.parse(localStorage?.getItem("surahs") as any);
  return (
    <>
      <Card style={{ position: 'fixed', width: '100%', zIndex: 1, }}>
        <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Col span={6}>
            <div style={{ padding: '-1px 25px', marginLeft: '30px' }}>
              <Text strong style={{ justifyContent: 'center', fontSize: '24px' }}>Word By Word</Text>
            </div>
          </Col>
          <Col span={3}>
            <div style={style}>
              <Select
                showSearch
                style={{ width: '80%', border: '1px solid #d9d9d9' }}
                placeholder="Select Surah"
                optionFilterProp="children"
                className="dark:text-white"
                onChange={(e: string) => handleChangeSurah(e)}
              >
                {storedNames.map((res: any) => {
                  return <Option value={res.id} key={res.id} style={{ textAlign: 'right' }}>{res.arabic} <span style={{ float: 'right' }}>{' :' + res.id}</span></Option>
                })}
              </Select>
            </div>
          </Col>
          <Col span={3}>
            <div style={style}>
              <Spin spinning={verseLoader} indicator={antIcon}>
                <Select
                  style={{ width: '80%', border: '1px solid #d9d9d9' }}
                  placeholder="From Verse"
                  optionFilterProp="children"
                  className="dark:text-white"
                  onChange={(e: string) => changeFromVerse(e)}
                >
                  {verses && verses.map((res) => {
                    return <Option value={res.ayatNo} key={res.id} style={{ textAlign: 'right' }}>{res.ayatNo}</Option>
                  })}
                </Select>
              </Spin>
            </div>
          </Col>
          <Col span={3}>
            <div style={style}>
              <Spin spinning={verseLoader} indicator={antIcon}>
                <Select
                  style={{ width: '80%', border: '1px solid #d9d9d9' }}
                  placeholder="To Verse"
                  optionFilterProp="children"
                  className="dark:text-white"
                  onChange={(e: string) => changeToVerse(e)}
                >
                  {verses && verses.map((res: any) => {
                    return <Option value={res.ayatNo} key={res.id} style={{ textAlign: 'right' }}>{res.ayatNo}</Option>
                  }).reverse()}
                </Select>
              </Spin>
            </div>
          </Col>
          <Col span={3}>
            <div style={style}>
              <Select
                showSearch
                style={{ width: '80%', border: '1px solid #d9d9d9' }}
                placeholder="Lines Per Page"
                optionFilterProp="children"
                className="dark:text-white"
                defaultValue={perPage}
                onChange={(e: number) => changePerPage(e)}

              >
                <Option value={50}>50</Option>
                <Option value={100}>100</Option>
                <Option value={300}>300</Option>
              </Select>
            </div>
          </Col>
          <Col span={3}>
            <div style={style}>
              <Button
                className="primary"
                disabled
              >
                Total: {totalRecords}
              </Button>
            </div>
          </Col>
          <Col span={3}>
            <div style={style}>
              <Button
                className="primary"
                onClick={() => fetchWordByWordData()}
              >
                Search
              </Button>
            </div>
          </Col>
        </Row>
        <Pagination
          total={totalRecords}
          current={currentPage}
          pageSize={perPage}
          showSizeChanger={false}
          onChange={(e: number) => changeCurrentPage(e)}
          style={{ float: 'right', paddingRight: '50px' }}
        />
      </Card>
    </>
  );
};

export default WordbyWordFilter;
