import React from "react";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import UserType from '../../../Types/Users';
interface Props {
    isOpen: boolean;
    title: string;
    roles: any;
    users:UserType;
    changeRole: string;
    user:any;
    updateId:number;
    handleCloseModel: (e: any) => void;
    handleSubmit: (e: any) => void;
    handleChange: (e: any) => void;
    handleRole: (e: any) => void;
}
const UsersForm: React.FC<Props> = ({
    isOpen,
    title,
    roles,
    users,
    changeRole,
    user,
    updateId,
    handleCloseModel,
    handleSubmit,
    handleChange,
    handleRole,
}) => {
    const [form] = Form.useForm();
// console.log(user?.role);

    return (
        <>
            <Modal title={title}
                open={isOpen}
                closable={false}
                footer={false}
                // onCancel={(e: any) => handleCloseModel(e)}
                // onOk={(e: any) => handleSubmit(e)}
                style={{ zIndex: "1050" }}>
                <Form form={form} onFinish={() => handleSubmit(updateId)} autoComplete="off">
                <Row>
                    <Col span={11}>
                        <label htmlFor="">Name</label>
                        <Input
                            required
                            type="text"
                            placeholder="Enter user name"
                            name="name"
                            value={user?.name}
                            onChange={(e: any) => handleChange(e)}
                        />
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <label htmlFor="">Short Name</label>
                        <Input
                            type="text"
                            placeholder="Enter user short name"
                            name="shortName"
                            value={user?.shortName}
                            required
                            onChange={(e: any) => handleChange(e)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={11}>
                        <label htmlFor="">Email</label>
                        <Input
                            type="email"
                            placeholder="Enter user email"
                            name="email"
                            autoComplete="off"
                            value={user?.email}
                            required
                            onChange={(e: any) => handleChange(e)}
                        />
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <label htmlFor="">Password</label>
                        <Input
                            type="password"
                            name="password"
                            autoComplete="off"
                            placeholder="Enter user password"
                            value={user?.password}
                            onChange={(e: any) => handleChange(e)}
                        />
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col span={11}>
                        {updateId ? (
                            <>
<label htmlFor="">Role</label>
                        <select
                            name="role"
                            value={user?.role}
                            required
                            style={{ height: '32px', width: 216, border: '1px solid #d9d9d9' }}
                            onChange={(e: any) =>  handleRole(e)}
                        >
                            <option value="" selected disabled>
                                Select
                            </option>
                            {Object.keys(roles).map((key, i) => (
                                <option
                                    value={key}
                                    key={i}>
                                    {roles[key]}
                                </option>
                            ))}
                        </select>
                            </>
                        ):(
                            <>
                            <label htmlFor="">Role</label>
                        <select
                            name="role"
                            // value={""}
                            required
                            style={{ height: '32px', width: 216, border: '1px solid #d9d9d9' }}
                            onChange={(e: any) =>  handleRole(e)}
                        >
                            <option value="" selected disabled>
                                Select
                            </option>
                            {Object.keys(roles).map((key, i) => (
                                <option
                                    value={key}
                                    key={i}>
                                    {roles[key]}
                                </option>
                            ))}
                        </select>
                            </>
                        )}
                        
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        {user.role === "3" && (
                            <>
                                <label htmlFor="">Status</label>
                                <select
                                    required
                                    name="isApproved"
                                    value={user?.isApproved}
                                    style={{ height: '32px', width: 216, border: '1px solid #d9d9d9' }}
                                    onChange={(e: any) => handleChange(e)}
                                >
                                    <option value="" selected disabled>Select</option>
                                    <option value="1" >Published</option>
                                    <option value="2" >Non-Published</option>

                                </select>
                            </>
                        )}

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
                            // loading={loading}
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
export default UsersForm;


