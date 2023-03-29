import { Col, Row, Card, Select, Typography } from "antd";
const { Text } = Typography;
const { Option } = Select;
interface Props {
    data: any;
    handleArabicLetter: (e: any, key: any) => void;
    handleFilter: (e: any) => void;
}
const RootWordMeaning: React.FC<Props> = ({
    data,
    handleArabicLetter,
    handleFilter
}) => {
    const style: React.CSSProperties = { padding: '0px 0px' };
    // console.log(arabicLetters);
    var arabicLetters = JSON.parse(localStorage?.getItem("arabicLetters") as any);
    return (
        <Card>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={5}>
                    <div style={{ padding: '-1px 25px' }}>
                        <Text strong style={{ justifyContent: 'center', fontSize: '24px' }}>Root Word Meanings</Text>
                    </div>
                </Col>
                <Col className="gutter-row" span={5}>
                    <div style={style}>
                        <Select
                            style={{ width: '100%', justifyContent: 'center', border: '1px solid #d9d9d9' }}
                            placeholder="Select Word"
                            optionFilterProp="children"
                            className="dark:text-white"
                            onChange={(e: any) => handleFilter(e)}
                        >
                            {data.map((items: any) => {
                                return (<Option value={items.id}>{items.root_word}</Option>);
                            })}
                        </Select>
                    </div>
                </Col>
                <Col className="gutter-row" span={14}>
                    <div style={{ textAlign: 'center', border: '1px solid #d9d9d9', padding: '5px' }}>
                    {Object.keys(arabicLetters && arabicLetters).map((key, i) => (
                             // eslint-disable-next-line
                            <a
                                href="#"
                                onClick={(e: any) => handleArabicLetter(e, key)}
                            >
                                {' ' + arabicLetters[key] + ' '}
                            </a>
                        ))}
                    </div>
                </Col>
            </Row>
        </Card>
    );
};

export default RootWordMeaning;
