import React from "react";
import {  Input, Modal } from "antd";
interface Props {
    isOpen: boolean;
    title: string;
    handleCloseModel: (e: any) => void;
}
const NotesForm: React.FC<Props> = ({
    isOpen,
    title,
    handleCloseModel,
}) => {
    return (
        <>
            <Modal title={title}
                open={isOpen}
                onCancel={(e: any) => handleCloseModel(e)}
                onOk={(e: any) => handleCloseModel(e)}
                style={{ zIndex: "1050" }}>
                <label htmlFor="">Note</label>
                <Input type="text" placeholder="Enter note name" />
                <label htmlFor="">Note File</label>
                <Input type="file"  />
            </Modal>
        </>
    );
};
export default NotesForm;


