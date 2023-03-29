import { Button, Card, Col, Row, Space, Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
const { Text } = Typography;
const UserPermissions = () => {
    interface DataType {
        key: React.Key;
        id: any;
        name: any;
        short_name: any;
    }
    const columns: ColumnsType<DataType> = [
        {
            title: '#',
            dataIndex: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',

        },
        {
            title: 'Short Name',
            dataIndex: 'short_name',
        },
        {
            title: 'Action',
            dataIndex: 'btn',
            render: (_: any, record: any) => (
                <Space >
                    <Button>Impersonate</Button>
                </Space>
            ),
        },
    ];
    const data: DataType[] = [
        {
            key: '1',
            id: '1',
            name: 'Dr Hany Marvelous Quran',
            short_name: 'DrHany',
        },
        {
            key: '2',
            id: '2',
            name: 'Dr Zia Iqbal',
            short_name: 'DrZia',
        },



    ];
    return (
        <div>
            <Card>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={24}>
                        <div>
                            <Text strong style={{ justifyContent: 'center', fontSize: '24px' }}>User Permissions</Text>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    rowClassName=" dark:bg-darkBody dark:text-gray-200"
                />
            </Card>
        </div>
    );
};

export default UserPermissions;