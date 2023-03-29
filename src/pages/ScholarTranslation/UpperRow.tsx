import React from "react";
import { Button, Card, Col, Pagination, Row, Select, Spin, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const { Option } = Select;
const { Text } = Typography;
const style: React.CSSProperties = { padding: '0px 0px' };
// interface Surahs{
//   id:number;
//   arabic:string;
// }
interface Scholars {
  id: number;
  name: string;
}
interface Props {
  // surahs:Surahs[];
  verses:any;
  verseLoader:boolean;
  scholars: Scholars[];
  handleChangeSurah: (surahId: string) => void;
  changeFromVerse: (fromVerse: string) => void;
  changeToVerse: (toVerse: string) => void;
  handleChangeScholars: (scholarIds: string[]) => void;
  handleChangePerPage: (perPage: number) => void;
  changeCurrentPage: (perPage: number) => void;
  totalRecords: number;
  perPage: number;
  currentPage: number;
}
const UpperRow: React.FC<Props> = ({
  // surahs,
  verseLoader,
  verses, 
  scholars,
  totalRecords,
  perPage,
  currentPage,
  handleChangeSurah,
  handleChangeScholars,
  handleChangePerPage,
  changeCurrentPage,
  changeFromVerse,
  changeToVerse
}) => {

  var storedNames = JSON.parse(localStorage?.getItem("surahs") as any);
  return (
    <>
      <Card style={{position:'fixed', width:'100%', zIndex:1, }}>
        <Row style={{  marginBottom: '20px' }}>
          <Col span={5}>
            <div style={{ padding: '-1px 25px', marginLeft: '30px' }}>
              <Text strong style={{ justifyContent: 'center', fontSize: '24px' }}>Scholar Translations</Text>
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
                  style={{ width: '80%', border: '1px solid #d9d9d9'}}
                  placeholder="From Verse"
                  optionFilterProp="children"
                  className="dark:text-white"
                  onChange={(e: string) => changeFromVerse(e)}
                >
                  {verses && verses.map((res:any) => {
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
          <Col span={4}>
            <div style={style}>
              <Select
                showSearch
                mode="multiple"
                style={{ width: '80%', justifyContent: 'center', border: '1px solid #d9d9d9' }}
                placeholder="Select Scholar"
                optionFilterProp="children"
                className="dark:text-white"
                onChange={(e: string[]) => handleChangeScholars(e)}
              >
                {scholars.map((res) => {
                  return <Option value={res.id}
                    key={res.id}
                  >
                    {res.name}
                  </Option>
                })}
              </Select>
            </div>
          </Col>
          <Col span={3}>
            <div style={style}>
              <Select
                showSearch
                style={{ width: '80%', justifyContent: 'center', border: '1px solid #d9d9d9' }}
                placeholder="Lines PerPage"
                defaultValue={50}
                optionFilterProp="children"
                className="dark:text-white"
                onChange={(e: number) => handleChangePerPage(e)}
              >
                <Option value="50">50</Option>
                <Option value="100">100</Option>
                <Option value="300">300</Option>
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
export default UpperRow;
