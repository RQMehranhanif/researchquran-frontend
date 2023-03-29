import { Badge, Button, Card, Col, Pagination, Row, Select, Typography } from 'antd';
import { Option } from 'antd/lib/mentions';
import React from 'react';
import TopicsTable from './TopicsTable';
const { Text } = Typography;
const Topics = () => {

    return (
        <div>
            <Card>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" lg={4}>
                        <Text strong style={{ justifyContent: 'center', fontSize: '24px' }}>Topics / Stories</Text>
                    </Col>
                    <Col className="gutter-row" lg={4}>
                        <Select showSearch
                            style={{ width: '100%', border: '1px solid #d9d9d9' }}
                            placeholder="Select Topic"
                            optionFilterProp="children"
                            className="dark:text-white">
                            <Option value="1">Topic 1</Option>
                            <Option value="2">Topic 2</Option>
                            <Option value="3">Topic 3</Option>
                        </Select>
                    </Col>
                    <Col className="gutter-row" lg={4}>
                        <Select showSearch
                            style={{ width: '100%', border: '1px solid #d9d9d9' }}
                            placeholder="Select Format"
                            optionFilterProp="children"
                            className="dark:text-white">
                            <Option value="1">Ayah</Option>
                            <Option value="2">Word By Word</Option>
                        </Select>
                    </Col>
                    <Col className="gutter-row" lg={4}>
                        <Select showSearch
                            style={{ width: '100%', border: '1px solid #d9d9d9' }}
                            placeholder="Select Sequence"
                            optionFilterProp="children"
                            className="dark:text-white">
                            <Option value="1">Quranic</Option>
                            <Option value="2">Topic</Option>
                        </Select>
                    </Col>
                    <Col className="gutter-row" lg={4}>
                        <Select showSearch
                            style={{ width: '100%', border: '1px solid #d9d9d9' }}
                            placeholder="Lines Per Page"
                            optionFilterProp="children"
                            className="dark:text-white">
                            <Option value="1">10</Option>
                            <Option value="2">50</Option>
                            <Option value="2">100</Option>
                        </Select>
                    </Col>
                    <Col className="gutter-row" lg={4}>
                        <Button>Search</Button>
                    </Col>

                </Row>
                <Pagination
                    style={{ width: 500, marginTop: '10px', float: 'right' }}
                    defaultCurrent={1}
                    total={100}
                    defaultPageSize={10}
                />
            </Card>
            <Card title="Word By Word Translation">
                <Row justify="space-around" align="middle">
                    <Col span={23}>
                        <Card extra={<Text strong>. وَآتَيْنَاهُمْ بَيِّنَاتٍ مِنَ الْأَمْرِ ۖ فَمَا اخْتَلَفُوا إِلَّا مِنْ بَعْدِ مَا جَاءَهُمُ الْعِلْمُ بَغْيًا بَيْنَهُمْ ۚ إِنَّ رَبَّكَ يَقْضِي بَيْنَهُمْ يَوْمَ الْقِيَامَةِ فِيمَا كَانُوا فِيهِ يَخْتَلِفُونَ (1:2)</Text>} style={{ marginTop: '10px' }}>
                            <Badge.Ribbon placement="start" text="S-Int" >
                                <Row>
                                    <Col span={1}></Col>
                                    <Col span={23}>
                                        <Text strong >This is a demo Trasnlation۔</Text>
                                    </Col>
                                </Row>
                            </Badge.Ribbon>
                            <Badge.Ribbon text="DrHany">
                                <Row style={{ marginTop: '10px' }}>
                                    <Col span={23}>
                                        <Text strong style={{ float: 'right' }}>شُروع اَللہ کے پاک نام سے جو بڑا مہر بان نہايت رحم والا ہے</Text>
                                    </Col>
                                    <Col span={1}></Col>
                                </Row>
                            </Badge.Ribbon>
                        </Card>
                    </Col>
                </Row>
                <Row justify="space-around">
                    <Col xl={23}>
                        <TopicsTable />
                    </Col>
                </Row>
            </Card>
            <Card title="Scholar Translation">
                <Card extra={<Text strong>. بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ (1:1)</Text>} style={{ marginTop: '10px' }}>
                    <Badge.Ribbon placement="start" text="S-Int" >
                        <Row
                        >
                            <Col span={1}></Col>
                            <Col span={23}>
                                <Text strong >In the name of Allah, the Entirely Merciful, the Especially Merciful.</Text>
                            </Col>
                        </Row>
                    </Badge.Ribbon>
                    <Badge.Ribbon text="DrHany">
                        <Row style={{ marginTop: '10px' }}>

                            <Col span={23}>
                                <Text strong style={{ float: 'right' }}>شُروع اَللہ کے پاک نام سے جو بڑا مہر بان نہايت رحم والا ہے</Text>
                            </Col>
                            <Col span={1}></Col>
                        </Row>
                    </Badge.Ribbon>
                </Card>
            </Card>
        </div>
    );
};

export default Topics;