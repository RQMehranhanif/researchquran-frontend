import React from "react";
import { Col, Row } from "antd";
interface Props {
  newData: any;
  languageHeadings: any;
  words: any[];
}
const WordTranslation: React.FC<Props> = ({
  newData,
  languageHeadings,
  words,
}) => {
  const getTranslation = (
    translations: any[],
    scholarId: number,
    languageId: number
  ) => {
    const singleTranslation =
      translations &&
      translations.filter(
        (item) =>
          item.scholar_id === scholarId && item.language_id === languageId
      );
    return singleTranslation &&
      singleTranslation.length > 0 &&
      singleTranslation[0].translation !== ""
      ? singleTranslation[0].translation
      : "-";
  };
  return (
    <Row justify="space-around" >
      <Col xl={23}>
        {/* <WordTranslations words={item.words} /> */}
        <div style={{ overflowX: "auto", direction: "rtl" }}>
          <table
            className="table table-bordered "
            style={{ border: "1px solid #252525", direction: "rtl" }}
          >
            <tbody className="text-center ">
              <tr>
                <td>
                  {Object.keys(newData).map((item) => (
                    <div className="word-display table-heading">
                      {newData[item] ?? ""}
                    </div>
                  ))}
                  {languageHeadings.map((list: any) => (
                    <div className="word-display table-heading">
                      {list.label}
                    </div>
                  ))}
                </td>

                {words.map((wordItem: any) => (
                  <td>
                    {Object.entries(newData).map(([key, item]) => (
                      <div className="word-display">
                        {wordItem[key] && wordItem[key] !== ""
                          ? wordItem[key]
                          : "-"}
                      </div>
                    ))}
                    {languageHeadings.map((list: any) => (
                      <>
                        <div className="word-display">
                          {getTranslation(
                            wordItem.translations,
                            list.scholar_id,
                            list.language_id
                          )}
                        </div>
                      </>
                    ))}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    </Row>
  );
};
export default WordTranslation;
