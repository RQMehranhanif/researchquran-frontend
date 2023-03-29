import { Button, Col, Input, Pagination, Row, Select, Typography} from "antd";
import React from "react";
const { Option } = Select;
const { Text } = Typography;
const style: React.CSSProperties = { padding: '0px 0px' };
const UpperRow = () => {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginTop:'20px', marginBottom: '20px'}}>
        <Col className="gutter-row" span={5}>
          <div style={{ padding: '-1px 25px', marginLeft:'30px' }}>
            <Text strong style={{ justifyContent: 'center', fontSize: '24px' }}>Word Search</Text>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <Select
              showSearch
              style={{ width: '100%', justifyContent: 'center', border: '1px solid #d9d9d9' }}
              placeholder="Search By"
              optionFilterProp="children"
              className="dark:text-white"
            >
              <Option value="1">By Word</Option>
            </Select>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <Input
              style={{ width: '100%', justifyContent: 'center', border: '1px solid #d9d9d9', textAlign:'right' }}
              placeholder="Enter Word/Root Word"
              className="dark:text-white"
            />
            
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div style={style}>
            <Select
              showSearch
              style={{ width: '100%', justifyContent: 'center', border: '1px solid #d9d9d9' }}
              placeholder="Lines PerPage"
              optionFilterProp="children"
              className="dark:text-white"
            >
              <Option value="1">50</Option>
            </Select>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <Button
              className="primary w-20">
              {" "}
              Search
            </Button>
          </div>
        </Col>
      </Row>
      <Pagination
            total={100}
            current={2}
            pageSize={10}
            style={{float:'right'}}
          />
          <br />

    </>
  );
};

export default UpperRow;
