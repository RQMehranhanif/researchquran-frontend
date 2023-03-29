import React from "react";
import { Button, Col, Form, Modal, Row, Typography } from "antd";
import { CloudUploadOutlined } from '@ant-design/icons';
const { Text } = Typography;
interface Props {
    isOpen: boolean;
    title: string;
    inputKey: string;
    selectedGramarWord: string;
    editUsmani: any;
    editArabic: any;
    loading:any;
    handleCloseModel: (e: any) => void;
    handleFileChangeUsmani: (e: any) => void;
    handleFileChangeArabic: (e: any) => void;
    handleSubmit: (id: any, editUsmani:any, editArabic:any) => void;
}
const GrammerNotesForm: React.FC<Props> = ({
    isOpen,
    title,
    inputKey,
    selectedGramarWord,
    editArabic,
    editUsmani,
    loading,
    handleCloseModel,
    handleFileChangeArabic,
    handleFileChangeUsmani,
    handleSubmit
}) => {
    const [form] = Form.useForm();
    const style = {
        height: '32px',
        width: 216,
        border: '1px solid #d9d9d9',
        marginBottom: '10px'
    }
    // console.log(editArabic, editUsmani)
    // var storedNames = JSON.parse(localStorage?.getItem("surahs") as any);
    return (
        <>
            <Modal title={title}
                open={isOpen}
                closable={false}
                footer={false}
                style={{ zIndex: "1050" }}>
                <Form form={form} onFinish={() => handleSubmit(selectedGramarWord, editUsmani, editArabic)}>
                    <Row>
                        <Col span="24">
                            <Text strong style={{ textAlign: 'right', justifyContent: 'right', float: 'right' }}>{selectedGramarWord}</Text>
                        </Col>
                    </Row>
                    {editUsmani === "1" && editArabic === "0" ? (
                        <>
                            <Row>
                                <Col span={12}>
                                    <label htmlFor="">Select Usmani File</label>
                                    <div>
                                        <input
                                            key={inputKey || ''}
                                            type="file"
                                            name="note_file"
                                            style={style}
                                            onChange={(e: any) => handleFileChangeUsmani(e)}
                                        /><CloudUploadOutlined />
                                    </div>
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <>
                            <Row>
                                <Col span={24}>
                                    <label htmlFor="">Select Arabic File</label>
                                    <div>
                                        <input
                                            key={inputKey || ''}
                                            type="file"
                                            name="note_file"
                                            style={style}
                                            onChange={(e: any) => handleFileChangeArabic(e)}
                                        /><CloudUploadOutlined />
                                    </div>
                                </Col>
                            </Row>
                        </>
                    )}
                    <Row>
                        <Col span={24}>
                            <Button
                                onClick={(e) => handleCloseModel(e)}
                                className="rounded-pill"
                                style={{ fontSize: "12px", marginTop: "6px" }}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                className="rounded-pill float-right "
                                style={{ fontSize: "12px", marginTop: "6px" }}
                            >
                                Save
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    );
};
export default GrammerNotesForm;


