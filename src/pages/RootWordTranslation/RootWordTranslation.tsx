import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import { OpenNotification } from "../../Actions/Utilities/Utilities";
// import type { ColumnsType } from 'antd/es/table';
import {
    getrootwords,
    storeRootWrods
} from '../../Actions/RootWordMeaningActions/RootWordMeanings';
import RootWordMeaning from "../../components/FilterComponent/RootWordComponent";
// import { LoadingOutlined } from "@ant-design/icons";
// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
interface Item {
    key: string;
    root_word: number;
    meaning_eng: string;
    meaning_urdu: string;
    english_root_word: string;
}
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
}
const RootWordTranslation: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: false,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const App: React.FC = () => {
    const [form] = Form.useForm();
    const [data, setData] = React.useState<any[]>([]);
    const [editingKey, setEditingKey] = useState('');
    const [arabicLetterKey, setArabicLetterKey] = React.useState<any>('');
    // const [loading, settLoading] = useState<boolean>(false);
    const isEditing = (record: any) => record.id === editingKey;
    const edit = (record: any) => {
        form.setFieldsValue({ meaning_eng: '', meaning_urdu: '', ...record });
        setEditingKey(record.id);
    };
  
    useEffect(() => {
        // settLoading(true);
        getRootWordMeaning();
        // eslint-disable-next-line
    }, [arabicLetterKey]);
    const getRootWordMeaning = () => {
            getrootwords(arabicLetterKey)
            .then(({ data: response }) => {
                if (response.success) {
                    //    settLoading(false);
                    const newdata = response.list.data;
                    setData(newdata?.map((items: any) => ({
                        id: items.id,
                        root_word: items.root_word,
                        meaning_urdu: items.meaning_urdu,
                        meaning_eng: items.meaning_eng,
                        english_root_word: items.english_root_word
                    })));
                } else {
                    OpenNotification("error", response.message);
                }
            })
            .catch((err) => {
                console.log("error", err);
                // settLoading(false);
            });

    }
    const cancel = () => {
        setEditingKey('');
    };
    const handleFilter = (e:any) =>{
        const filterData = data.filter((items:any) => items.id === e)
    setData(filterData);
    
    }
    const handleArabicLetter = (e:any, key:any) => {
        getRootWordMeaning();
        setArabicLetterKey(key);
    }
    const save = async (key: React.Key) => {
        // settLoading(true);
        try {
            const row = (await form.validateFields()) as Item;
            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                const urduMeaning = row.meaning_urdu;
                const englishMeaning = row.meaning_eng;
                storeRootWrods(editingKey, urduMeaning, englishMeaning)
                    .then(({ data: response }) => {
                        if (response.success) {
                            // settLoading(false);
                            const newdata = response.list.data;
                            setData(newdata?.map((items: any) => ({
                                id: items.id,
                                root_word: items.root_word,
                                meaning_urdu: items.meaning_urdu,
                                meaning_eng: items.meaning_eng,
                                english_root_word: items.english_root_word
                            })));
                            setEditingKey('');

                        } else {
                            OpenNotification("error", response.message);
                        }
                    })
                    .catch((err) => {
                        console.log("error", err);
                        //  settLoading(false);
                    });
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };
    const columns = [
        {
            title: 'Action',
            dataIndex: 'operation',
            render: (_: any, record: any) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
                            Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <Typography.Link>Cancel</Typography.Link>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Edit
                    </Typography.Link>
                );
            },
        },
        {
            title: 'English Root Word',
            dataIndex: 'english_root_word',
            width: '25%',
        },
        {
            title: 'Add English Meaning',
            dataIndex: 'meaning_eng',
            width: '25%',
            name: 'rootwordmeaningeng',
            editable: true,
        },
        {
            title: 'Add Urdu Meaning',
            dataIndex: 'meaning_urdu',
            width: '25%',
            editable: true,
        },
        {
            title: 'Root Word',
            dataIndex: 'root_word',
            width: '25%',
        },

    ];
    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <>
        
            <RootWordMeaning
                data={data}
                handleArabicLetter={handleArabicLetter}
                handleFilter={handleFilter}
            />
            <Form form={form} component={false}>
                
                <Table
                    components={{
                        body: {
                            cell: RootWordTranslation,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
        
        </>
    );
};
export default App;

