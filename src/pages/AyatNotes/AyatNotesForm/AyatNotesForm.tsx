import React from "react";
import { Col, Input, Row, Modal, Button, Form } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
interface Verses {
    id: number;
    ayatNo: number;
}
interface Props {
    verses: Verses[];
    isOpen: boolean;
    title: string;
    scholars: any;
    selectedName: any;
    selectedScholars: any;
    selectedSurah: any;
    selectedAyat: any;
    updateId: any;
    loading: any;
    inputKey: any;
    languages:any;
    selectedLanguage:any;
    handleCloseModel: (e: any) => void;
    handleSubmit: (id: any) => void;
    // handleChangeScholar: (e: any) => void;
    handleChangeAyat: (e: any) => void;
    handleChangeName: (e: any) => void;
    handleFileChange: (e: any) => void;
    handleChangeLanguage: (e: any) => void;
    handleChangeSurah: (surahId: string) => void;
}
const AyatNotesForm: React.FC<Props> = ({
    updateId,
    isOpen,
    title,
    scholars,
    verses,
    selectedName,
    selectedScholars,
    selectedSurah,
    selectedAyat,
    loading,
    inputKey,
    languages,
    selectedLanguage,
    handleCloseModel,
    handleChangeSurah,
    handleSubmit,
    handleChangeName,
    handleChangeAyat,
    // handleChangeScholar,
    handleFileChange,
    handleChangeLanguage
}) => {
    const [form] = Form.useForm();
    const style = {
        height: '32px',
        width: 216,
        border: '1px solid #d9d9d9',
        marginBottom: '10px'
    }

    var storedNames = JSON.parse(localStorage?.getItem("surahs") as any);
    const userName = localStorage.getItem("userName");

    return (
        <>
            <Modal title={title}
                open={isOpen}
                closable={false}
                // onCancel={(e: any) => handleCloseModel(e)}
                // onOk={(e: any) => handleSubmit(e)}
                footer={false}
                style={{ zIndex: "1050" }}>
                <Form form={form} onFinish={() => handleSubmit(updateId)}>
                    <Row>
                        <Col span={12}>
                            {updateId ? (
                                <>
                                    <label htmlFor="">Select Scholar</label>
                                    <select
                                        name="scholar_id"
                                        id=""
                                        style={style}
                                        value={selectedScholars}
                                        disabled
                                    >
                                        <option value={selectedScholars}>{userName}</option>
                                    </select>
                                </>
                            ) : (
                                <>
                                    <label htmlFor="">Select Scholar</label>
                                    <select
                                        name="scholar_id"
                                        id=""
                                        style={style}
                                        value={selectedScholars}
                                        disabled
                                        // onChange={(e: any) => handleChangeScholar(e)}
                                    >
                                        {/* <option value="">Select Scholar</option> */}
                                        <option value={selectedScholars}>{userName}</option>
                                        
                                    </select>
                                </>
                            )}
                        </Col>
                        <Col span={12}>
                        {updateId ? (
                                <>
                                   <label htmlFor="">Select Language</label>
                                    <select
                                        name="scholar_id"
                                        id=""
                                        style={style}
                                        value={selectedLanguage}
                                        disabled
                                        onChange={(e: any) => handleChangeLanguage(e)}
                                    >
                                        <option value="">Select Scholar</option>
                                        {languages?.map((i: any) => {
                                            return (<option value={i.id}>{i.name}</option>);
                                        })}
                                    </select>
                                </>
                            ) : (
                                <>
                                    <label htmlFor="">Select Language</label>
                                    <select
                                        name="scholar_id"
                                        id=""
                                        style={style}
                                        value={selectedLanguage}
                                        required
                                        onChange={(e: any) => handleChangeLanguage(e)}
                                    >
                                        <option value="">Select Language</option>
                                        {languages?.map((i: any) => {
                                            return (<option value={i.id}>{i.name}</option>);
                                        })}
                                    </select>
                                </>
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            {updateId ? (
                                <>
                                    <label htmlFor="">Select Surah "{selectedSurah}"</label>
                                    <select
                                        name="surah_id"
                                        id=""
                                        style={style}
                                        value={selectedSurah}
                                        disabled
                                    >
                                        {storedNames.map((res: any) => {
                                            return <option value={res.id} key={res.id} style={{ textAlign: 'right' }}>{res.id + "-:" + res.arabic}</option>
                                        })}
                                    </select>

                                </>
                            ) : (
                                <>
                                    <label htmlFor="">Select Surah "{selectedSurah}"</label>
                                    <select
                                        name="surah_id"
                                        id=""
                                        style={style}
                                        value={selectedSurah}
                                        onChange={(e: any) => handleChangeSurah(e)}
                                        required
                                    >
                                        <option value="">Select Surah</option>
                                        {storedNames.map((res: any) => {
                                            return <option value={res.id} key={res.id} style={{ textAlign: 'right' }}>{res.id + "-:" + res.arabic}</option>
                                        })}
                                    </select>
                                </>
                            )}

                        </Col>
                        <Col span={12}>
                            {updateId ? (
                                <>
                                    <label htmlFor="">Select Ayat "{selectedAyat}"</label>
                                    <select
                                        name="ayat_id"
                                        style={style}
                                        disabled
                                    >
                                        {verses && verses.map((res) => {
                                            return <option value={res.id} key={res.id} style={{ textAlign: 'right' }}>{res.ayatNo}</option>
                                        })}
                                    </select>
                                </>
                            ) : (
                                <>
                                    <label htmlFor="">Select Ayat "{selectedAyat}"</label>
                                    <select
                                        name="ayat_id"
                                        style={style}
                                        onChange={(e: any) => handleChangeAyat(e)}
                                        required
                                    >
                                        <option selected value="">Select Ayat</option>
                                        {verses && verses.map((res) => {
                                            return <option value={res.id} key={res.id} style={{ textAlign: 'right' }}>{res.ayatNo}</option>
                                        })}
                                    </select>
                                </>
                            )}

                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <label htmlFor="">File Name</label>
                            <Input
                                name="note_label"
                                type="text"
                                value={selectedName}
                                style={style}
                                required
                                onChange={(e: any) => handleChangeName(e)}
                                placeholder="Enter note name" />
                        </Col>
                        <Col span={12}>
                            <label htmlFor="">Select File</label>
                            <div>
                                <input
                                    key={inputKey || ''}
                                    type="file"
                                    name="note_file"
                                    required
                                    onChange={(e: any) => handleFileChange(e)}

                                /><CloudUploadOutlined />
                            </div>
                        </Col>
                    </Row>
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
export default AyatNotesForm;


