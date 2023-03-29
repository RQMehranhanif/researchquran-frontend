import React, { useState, useEffect } from "react";
import { OpenNotification } from "../../Actions/Utilities/Utilities";
import { Card, Button, Row, Col, Checkbox, Typography, Space } from "antd";

import {
  getUserSettings,
  saveUserSettings,
} from "../../Actions/UserSettingsActions/UserSettings";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const { Text } = Typography;
type LanguageType = {
  id: number;
  name: string;
  checked: boolean;
};

type ScholarSettingType = {
  scholarId: number;
  languageId: number;
  label: string;
  checked: boolean;
  disable: boolean;
  displayLabel: string;
};
type otherType = {
  label: string;
  value: string;
  checked: boolean;
};
const UserSettings = () => {

  const { WordData } = useSelector(
    (state: RootState) => state.wordData
  );
  console.log(WordData);
  
  const [loading, setLoading] = useState<boolean>(false);
  const [wordLanguages, setWordLanguages] = useState<LanguageType[]>([]);
  const [ayatLanguages, setAyatLanguages] = useState<LanguageType[]>([]);
  const [wordScholars, setWordScholars] = useState<ScholarSettingType[]>([]);
  const [ayatScholars, setAyatScholars] = useState<ScholarSettingType[]>([]);
  const [displayWords, setDisplayWords] = useState<otherType[]>([]);
  const [grammerSettings, setGrammerSettings] = useState<otherType[]>([]);

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true);
    getUserSettings()
      .then(({ data: response }) => {
        setLoading(false);
        if (response.success) {
          const {
            wordLanguages,
            ayatLanguages,
            displayWords,
            grammerSettings,
            ayatScholars,
            wordScholars,
          } = response.list;
          setWordLanguages(wordLanguages);
          setAyatLanguages(ayatLanguages);
          setWordScholars(wordScholars);
          setAyatScholars(ayatScholars);
          setDisplayWords(displayWords);
          setGrammerSettings(grammerSettings);
        } else {
          OpenNotification("error", response.message);
        }
      })
      .catch((err) => {
        console.log("error", err);
        setLoading(false);
      });
  }, []);

  // Handle Language Change
  const handleLanguageChange = (field: string, item: LanguageType) => {
    if (field === "wordLanguages") {
      const wordLanguagesCopy = [...wordLanguages];
      const index = wordLanguagesCopy.findIndex(
        (languageItem) => languageItem.id === item.id
      );
      item = { ...item, checked: !item.checked };
      console.log(item);
      
      wordLanguagesCopy[index] = item;
      updateScholarSelection("word", wordLanguagesCopy);
      setWordLanguages(wordLanguagesCopy);
    } else {
      const ayatLanguagesCopy = [...ayatLanguages];
      const index = ayatLanguagesCopy.findIndex(
        (languageItem) => languageItem.id === item.id
      );
      item = { ...item, checked: !item.checked };
      ayatLanguagesCopy[index] = item;
      updateScholarSelection("ayat", ayatLanguagesCopy);
      setAyatLanguages(ayatLanguagesCopy);
    }
    return false;
  };

  // Function to Change Others Infos like Grammer or Word Columns
  const handleOtherInfoChange = (fieldType: string, item: otherType) => {
    if (fieldType === "grammer") {
      const newGrammerSettings = [...grammerSettings];
      const index = newGrammerSettings.findIndex(
        (settingItem) => settingItem.value === item.value
      );
      item = { ...item, checked: !item.checked };
      newGrammerSettings[index] = item;
      setGrammerSettings(newGrammerSettings);
    } else {
      const newDisplayWords = [...displayWords];
      const index = newDisplayWords.findIndex(
        (wordItem) => wordItem.value === item.value
      );
      item = { ...item, checked: !item.checked };
      newDisplayWords[index] = item;
      setDisplayWords(newDisplayWords);
    }
    return false;
  };

  // Handle Scholar Selection
  const handleScholarSelection = (
    field: string,
    scholarItem: ScholarSettingType
  ) => {
    if (field === "ayatScholars") {
      const ayatScholarCopy = [...ayatScholars];
      const index = ayatScholarCopy.indexOf(scholarItem);
      scholarItem = { ...scholarItem, checked: !scholarItem.checked };
      ayatScholarCopy[index] = scholarItem;
      setAyatScholars(ayatScholarCopy);
    } else {
      const wordScholarCopy = [...wordScholars];
      const index = wordScholarCopy.indexOf(scholarItem);
      scholarItem = { ...scholarItem, checked: !scholarItem.checked };
      wordScholarCopy[index] = scholarItem;
      setWordScholars(wordScholarCopy);
    }
    return false;
  };

  const updateScholarSelection = (
    field: string,
    languagesList: LanguageType[]
  ) => {
    const languageIds = languagesList
      .filter((item) => item.checked === true)
      .map((item) => item.id);

    if (field === "word") {
      const scholarList = [] as ScholarSettingType[];
      wordScholars.forEach((item) => {
        if (languageIds.includes(item.languageId)) {
          item = { ...item, disable: false };
        } else {
          item = { ...item, checked: false, disable: true };
        }
        scholarList.push(item);
      });
      setWordScholars(scholarList);
    } else {
      const scholarList = [] as ScholarSettingType[];
      ayatScholars.forEach((item) => {
        if (languageIds.includes(item.languageId)) {
          item = { ...item, disable: false };
        } else {
          item = { ...item, checked: false, disable: true };
        }
        scholarList.push(item);
      });
      setAyatScholars(scholarList);
    }
    return false;
  };

  const handleSave = () => {
    const request = {
      wordLanguages,
      ayatLanguages,
      displayWords,
      grammerSettings,
      ayatScholars,
      wordScholars,
    };
    setLoading(true);
    saveUserSettings(request)
      .then(({ data: response }) => {
        setLoading(false);
        const { success, message } = response;
        navigate('/wordbyword',{state:{WordData}})
        OpenNotification(success ? "success" : "error", message);
      })
      .catch((err) => {
        setLoading(false);
        OpenNotification("error", err.message);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <Card>
          <Card size="small" title="Users Settings" style={{ marginTop: "10px" }}>
          <Row>
              <Col span={24}>
                <Card size="small" title="Word By Word Dislpay Settings" loading={loading}>
                  <Text strong style={{ display: "block" }}>
                    Word Columns
                  </Text>
                  <hr />
                  <Space
                    direction={"vertical"}
                    size={"small"}
                    style={{ marginTop: "10px" }}
                  >
                    <Row>
                    {displayWords.map((item: otherType, index: number) => (
                      <>
                        <Col span={4}>
                      <div key={index}>
                        <Checkbox
                          checked={item.checked}
                          onChange={(e) =>
                            handleOtherInfoChange("displayWords", item)
                          }
                          name="displayWords"
                        >
                          {item.label}
                        </Checkbox>
                        <br />
                      </div>
                      </Col>
                      </>
                    ))}
                    </Row>
                  </Space>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Card size="small" title="Word By Word Quran Scholars" loading={loading}>
                  <Row>
                    <Col span={12}>
                      <>
                        <Text strong style={{ display: "block" }}>
                          Grammar Settings
                        </Text>
                        <Space direction="vertical">
                          {grammerSettings.map(
                            (item: otherType, index: number) => (
                              <div key={index}>
                                <Checkbox
                                  name={item.value}
                                  checked={item.checked}
                                  onChange={() =>
                                    handleOtherInfoChange("grammer", item)
                                  }
                                >
                                  {item.label}
                                </Checkbox>
                                <br />
                              </div>
                            )
                          )}
                        </Space>
                        <hr />
                        <Text strong style={{ display: "block" }}>
                          Language
                        </Text>
                        <Space direction="vertical">
                          {wordLanguages &&
                            wordLanguages.map((language: LanguageType) => (
                              <div key={language.id}>
                                <Checkbox
                                  checked={language.checked}     
                                  onChange={(e) =>
                                    handleLanguageChange(
                                      "wordLanguages",
                                      language
                                    )
                                  }
                                  name="wordLanguages"
                                >
                                  {language.name}
                                </Checkbox>
                                <br />
                              </div>
                            ))}
                        </Space>
                      </>
                    </Col>
                    <Col span={12}>
                      <>
                        <Text strong style={{ display: "block" }}>
                          Scholars
                        </Text>
                        <Space direction="vertical">
                          {wordScholars.map(
                            (scholar: ScholarSettingType, index: number) => (
                              <div key={index}>
                                <Checkbox
                                  checked={scholar.checked}
                                  onChange={() =>
                                    handleScholarSelection(
                                      "wordScholars",
                                      scholar
                                    )
                                  }
                                  name="wordScholars"
                                  disabled={scholar.disable}
                                >
                                  {scholar.label}
                                </Checkbox>
                                <br />
                              </div>
                            )
                          )}
                        </Space>
                      </>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={12}>
                <Card size="small" title="Scholar Translation" loading={loading}>
                  <Row>
                    <Col span={12}>
                      <Text strong style={{ display: "block" }}>
                        Language
                      </Text>
                      <Space direction="vertical">
                        {ayatLanguages.map((language: LanguageType) => (
                          <div key={language.id}>
                            <Checkbox
                              checked={language.checked}
                              onChange={(e) =>
                                handleLanguageChange("ayatLanguages", language)
                              }
                              name="ayatLanguages"
                            >
                              {language.name}
                            </Checkbox>
                            <br />
                          </div>
                        ))}
                      </Space>
                    </Col>
                    <Col span={12}>
                      <>
                        <Text strong style={{ display: "block" }}>
                          Scholars
                        </Text>
                        <Space direction="vertical">
                          {ayatScholars.map(
                            (scholar: ScholarSettingType, index: number) => (
                              <div key={index}>
                                <Checkbox
                                  checked={scholar.checked}
                                  onChange={() =>
                                    handleScholarSelection(
                                      "ayatScholars",
                                      scholar
                                    )
                                  }
                                  name="ayatScholars"
                                  disabled={scholar.disable}
                                >
                                  {scholar.label}
                                </Checkbox>
                                <br />
                              </div>
                            )
                          )}
                        </Space>
                      </>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            
          </Card>
          <Button htmlType="submit" onClick={() => handleSave()}>
            Save
          </Button>
        </Card>
      </div>
    </>
  );
};
export default UserSettings;
