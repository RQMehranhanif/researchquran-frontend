import React, { useState } from "react";
import { Row, Col, Input, Card, Select, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";

import { filterSurah } from "../../../Actions/WordNotesActions/WordNotes";
import { OpenNotification } from "../../../Actions/Utilities/Utilities";

interface SurahAyatType {
  key: React.Key;
  id: number;
  arabic: string;
  reference: string;
  sequence: number | undefined;
}

const { Option } = Select;

const StoryForm = () => {
  var storedAyatNames = JSON.parse(localStorage?.getItem("surahs") as any);
  const [title, setTitle] = useState<string>("");
  const [surahAyats, setSurahAyats] = useState<SurahAyatType[]>([]);
  const [storyAyats, setStoryAyats] = useState<SurahAyatType[]>([]);

  const handleChange = (e: any) => {
    // selectedAyats([]);
    filterSurah(e).then(({ data: response }) => {
      if (response.success) {
        OpenNotification("success", response.message);
        setSurahAyats(response.list);
      } else {
        OpenNotification("error", response.message);
      }
    });
  };

  const handleAyatSelection = (ayat: SurahAyatType) => {
    let storyAyatsCopy = [...storyAyats];
    if (storyAyatsCopy.findIndex((item) => item.id === ayat.id) === -1) {
      storyAyatsCopy.push(ayat);
    } else {
      storyAyatsCopy = storyAyatsCopy.filter((item) => item.id !== ayat.id);
    }
    setStoryAyats(storyAyatsCopy);
  };

  const columns: ColumnsType<SurahAyatType> = [
    {
      title: "Sequence",
      dataIndex: "sequence",
      render: (_, record: SurahAyatType) => (
        <Input
          type="text"
          value={record.sequence}
          onChange={(e) => console.log("e sq", e)}
        />
      ),
    },
    {
      title: "Ayat",
      dataIndex: "arabic",
      className: "text-right font-noorehuda text-lg",
    },
    {
      title: "Reference",
      dataIndex: "reference",
    },
    {
      title: "#",
      dataIndex: "id",
      render: (_, record: SurahAyatType) => (
        <Input
          type="checkbox"
          checked={storyAyats.includes(record)}
          onChange={() => handleAyatSelection(record)}
        />
      ),
    },
  ];

  // const handleStoryAyats = () => {
  //   let ayats = surahAyats.filter((item) => selectedAyatIds.includes(item.id));
  //   ayats = ayats.map((item, index) =>
  //     item.sequence === undefined ? { ...item, sequence: ++index } : item
  //   );
  //   setStoryAyats(ayats);
  //   setSurahAyats([]);
  // };
  return (
    <div className="container-fluid mt-5 mr-5">
      <div style={{ width: "100%" }}>
        <Row>
          <Col style={{ width: "100%" }}>
            <Card title="Add New Story">
              <label htmlFor="">Title</label>
              <Input
                required
                type="text"
                placeholder="Story Title"
                name="title"
                value={title}
                size="large"
                onChange={(e: any) => setTitle(e.target.value)}
              />
              <label htmlFor="">Description</label>
              <Input.TextArea
                rows={4}
                placeholder="Story Description"
                name="description"
                value={""}
                size="large"
                onChange={(e: any) => console.log(e)}
              />
              <Row className="mt-5">
                <Col span={24}>
                  <Card title="Search Ayats">
                    <Select
                      showSearch
                      style={{ width: 400 }}
                      placeholder="Select a surah"
                      optionFilterProp="children"
                      onChange={(e: any) => handleChange(e)}
                    >
                      {storedAyatNames.map((res: any) => {
                        return (
                          <Option
                            value={res.id}
                            key={res.id}
                            style={{ textAlign: "right" }}
                          >
                            {res.arabic}{" "}
                            <span style={{ float: "right" }}>
                              {" :" + res.id}
                            </span>
                          </Option>
                        );
                      })}
                    </Select>
                    {surahAyats.length > 0 && (
                      <div className="mt-3">
                        <Table
                          columns={columns}
                          dataSource={surahAyats}
                          pagination={false}
                          style={{ maxHeight: "400px", overflowY: "scroll" }}
                        />
                        {/* <div style={{ overflowX: "auto", direction: "rtl" }}>
                          <table
                            className="table table-bordered "
                            style={{
                              border: "1px solid #252525",
                              direction: "rtl",
                              maxHeight: "200px",
                              overflowY: "scroll",
                              width: "100%",
                            }}
                          >
                            <tbody className="text-center">
                              <tr>
                                <th>#</th>
                                <th>Reference</th>
                                <th>Ayat</th>
                              </tr>
                              {surahAyats.map((ayat, index) => (
                                <tr key={index}>
                                  <td>
                                    <Input
                                      type="checkbox"
                                      value={ayat.id}
                                      checked={selectedAyatIds.includes(
                                        ayat.id
                                      )}
                                      onChange={() => handleAyatChange(ayat.id)}
                                    />
                                  </td>
                                  <td>{ayat.reference}</td>
                                  <td>{ayat.arabic}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div> */}
                        <div className="mt-3">
                          <Button
                            type="primary"
                            // onClick={() => handleStoryAyats()}
                          >
                            Save
                          </Button>
                        </div>
                      </div>
                    )}
                  </Card>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col span={24}>
                  <Card title="Selected Ayat">
                    <div style={{ overflowX: "auto", direction: "rtl" }}>
                      <table
                        className="table table-bordered "
                        style={{
                          border: "1px solid #252525",
                          width: "100%",
                        }}
                      >
                        <tbody>
                          <tr>
                            <th>Reference</th>
                            <th>Ayat</th>
                            <th>Sequence</th>
                          </tr>
                          {storyAyats.map((item) => (
                            <tr key={item.id}>
                              <td>{item.reference}</td>
                              <td>{item.arabic}</td>
                              <td>
                                <Input
                                  value={item.sequence}
                                  onChange={() => console.log("change")}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StoryForm;
