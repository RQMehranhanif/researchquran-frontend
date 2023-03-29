import React from "react";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import { CloudUploadOutlined } from '@ant-design/icons';
interface Props {
    isOpen: boolean;
    title: string;
    inputKey: any;
    loading: any;
    scholars: any;
    selectedSurah: any;
    verses: any;
    selectedVerse: any;
    words: any;
    selectedScholar: any;
    selectedName: any;
    updateId: any;
    selectedWord: any;
    selectedWordId:any;
    languages:any;
    selectedLanguage:any;
    handleCloseModel: (e: any) => void;
    handleChangeName: (e: any) => void;
    handleFileChange: (e: any) => void;
    handleChangeSurah: (e: any) => void;
    handleChangeAyat: (e: any) => void;
    handleChangeWord: (e: any) => void;
    // handleChangeScholar: (e: any) => void;
    handleChangeLanguage: (e: any) => void;
    handleSubmit: (id: any) => void;



}
const WordNotesForm: React.FC<Props> = ({
    isOpen,
    title,
    inputKey,
    loading,
    scholars,
    selectedSurah,
    verses,
    selectedVerse,
    words,
    selectedScholar,
    selectedName,
    updateId,
    selectedWord,
    selectedWordId,
    languages,
    selectedLanguage,
    handleCloseModel,
    handleChangeName,
    handleFileChange,
    handleChangeSurah,
    handleChangeAyat,
    handleChangeWord,
    // handleChangeScholar,
    handleSubmit,
    handleChangeLanguage
}) => {
    const [form] = Form.useForm();
    const style = {
        height: '32px',
        width: 216,
        border: '1px solid #d9d9d9',
        marginBottom: '10px'
    }
    const fileStyle = {
        height: '32px',
        width: 135,
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
                footer={false}
                style={{ zIndex: "1050" }}>
                <Form form={form} onFinish={() => handleSubmit(updateId)}>
                    <Row>
                    <Row>
                        <Col span={12}>
                            {updateId ? (
                                <>
                                    <label htmlFor="">Select Scholar</label>
                                    <select
                                        name="scholar_id"
                                        id=""
                                        style={style}
                                        value={selectedScholar}
                                        disabled
                                    >
                                        {scholars?.map((i: any) => {
                                            return (<option value={i.id}>{i.name}</option>);
                                        })}
                                    </select>
                                </>
                            ) : (
                                <>
                                    <label htmlFor="">Select Scholar</label>
                                    <select
                                        name="scholar_id"
                                        id=""
                                        style={style}
                                        value={selectedScholar}
                                        disabled
                                        // onChange={(e: any) => handleChangeScholar(e)}
                                    >
                                        {/* <option value="">Select Scholar</option> */}
                                        {scholars?.map((i: any) => {
                                            return (<option value={selectedScholar}>{userName}</option>);
                                        })}
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
                    </Row>
                    <Row>
                        <Col span={8}>
                            {updateId ? (
                                <>
                                    <label htmlFor="">Surah</label>
                                    <select
                                        name="surah_id"
                                        id=""
                                        style={fileStyle}
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
                                    <label htmlFor="">Surah</label>
                                    <select
                                        name="surah_id"
                                        id=""
                                        style={fileStyle}
                                        value={selectedSurah}
                                        required
                                        onChange={(e: any) => handleChangeSurah(e)}
                                    >
                                        <option value="" disabled>Select Surah</option>
                                        {storedNames.map((res: any) => {
                                            return <option value={res.id} key={res.id} style={{ textAlign: 'right' }}>{res.id + "-:" + res.arabic}</option>
                                        })}
                                    </select>
                                </>
                            )}

                        </Col>
                        <Col span={8}>
                            {updateId ? (
                                <>
                                    <label htmlFor="">Ayat "{selectedVerse}"</label>
                                    <select
                                        name="ayat_id"
                                        style={fileStyle}
                                        value={selectedVerse}
                                        disabled
                                    >
                                        {verses && verses.map((res: { ayatNo: string, id: number }) => {
                                            return <option value={res.ayatNo} key={res.id} style={{ textAlign: 'right' }}>{res.ayatNo}</option>
                                        })}
                                    </select>
                                </>
                            ) : (
                                <>
                                    <label htmlFor="">Ayat "{selectedVerse}"</label>
                                    <select
                                        name="ayat_id"
                                        style={fileStyle}
                                        // value={selectedVerse}
                                        required
                                        onChange={(e: any) => handleChangeAyat(e)}
                                    >
                                        <option value="" selected disabled>Select Ayat</option>
                                        {verses && verses.map((res: { ayatNo: string, id: number }) => {
                                            return <option value={res.ayatNo} key={res.id} style={{ textAlign: 'right' }}>{res.ayatNo}</option>
                                        })}
                                    </select>
                                </>
                            )}

                        </Col>
                        <Col span={8}>
                            {updateId ? (
                                <>
                                    <label htmlFor="">Word "{selectedWord}"</label>
                                    <select
                                        name=""
                                        id=""
                                        style={fileStyle}
                                        value={selectedWord}
                                        disabled
                                    >
                                        <option value="" selected disabled>Select Word</option>
                                        {words && words.map((res: { id: string, ayat_no: number, word: string }) => {
                                            return <option value={res.id} key={res.id} style={{ textAlign: 'right' }}>{res.word}</option>
                                        })}
                                    </select>
                                </>
                            ) : (
                                <>
                                    <label htmlFor="">Word "{selectedWord}"</label>
                                    <select
                                        name=""
                                        id=""
                                        style={fileStyle}
                                        //  value={selectedWord}
                                        required
                                        onChange={(e: any) => handleChangeWord(e)}
                                    >
                                        <option value="" selected disabled>Select Word</option>
                                        {words && words.map((res: { id: string, ayat_no: number, word: string }) => {
                                            return <option value={res.id} key={res.id} style={{ textAlign: 'right' }}>{res.word}</option>
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
                                style={style}
                                value={selectedName}
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
                                    style={style}
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
export default WordNotesForm;


