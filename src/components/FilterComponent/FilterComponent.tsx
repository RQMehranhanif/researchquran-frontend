import { Button, Col, Pagination, Row, Card, Select, Typography } from "antd";
import React from "react";
import { SurahsType } from "../../Types/Translations";
const { Option } = Select;
const { Text } = Typography;
const style: React.CSSProperties = { padding: "0px 0px" };
interface Props {
  showSurahs?: boolean;
  surahs?: SurahsType[];
  selectedSurah?: string;
  onSurahChange?: (id: string) => void;
  showVerses?: boolean;
  showScholars?: boolean;
  scholars?: any[];
}
const FilterComponent: React.FC<Props> = ({
  showSurahs,
  surahs,
  selectedSurah,
  onSurahChange,
  showVerses,
  showScholars,
  scholars,
}) => {
  return (
    <div className="container-fluid">
      <Card title="Word By Word Translation">
        <Row gutter={12}>
          {showSurahs && (
            <Col span={4}>
              <Select
                showSearch
                style={{
                  width: "100%",
                  justifyContent: "center",
                  border: "1px solid #d9d9d9",
                }}
                value={selectedSurah}
                onChange={(e: string) => onSurahChange && onSurahChange(e)}
                placeholder="Select Surah"
                optionFilterProp="children"
                className="dark:text-white"
              >
                {surahs &&
                  surahs.map((surah: SurahsType) => (
                    <Option
                      value={surah.id}
                      key={surah.id}
                    >{`${surah.id}-${surah.arabic}`}</Option>
                  ))}
              </Select>
            </Col>
          )}

          <Col span={4}>
            <Select
              showSearch
              style={{
                width: "100%",
                justifyContent: "center",
                border: "1px solid #d9d9d9",
              }}
              placeholder="Select Surah"
              optionFilterProp="children"
              className="dark:text-white"
            >
              <Option value="1">Al Fatiha</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Select
              showSearch
              style={{
                width: "100%",
                justifyContent: "center",
                border: "1px solid #d9d9d9",
              }}
              placeholder="Select Surah"
              optionFilterProp="children"
              className="dark:text-white"
            >
              <Option value="1">Al Fatiha</Option>
            </Select>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default FilterComponent;
