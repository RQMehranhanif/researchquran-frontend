/* eslint-disable jsx-a11y/anchor-is-valid */
import { Space, Table } from "antd";
import React from "react";
import "./style.css";
import Container from "../../components/Container";

const columns = [
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        يَوْمَ
      </h1>,
    ],
    dataIndex: "forth",
    fixed:'left',
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        يَوْمَ
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        الْقِيَامَةِ
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        يَوْمَ
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        بَيْنَهُمْ
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        يَقْضِي
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        رَبَّكَ
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        إِنَّ
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        بَيْنَهُمْ
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        بَغْيًا
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        الْعِلْمُ
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        جَاءَهُمُ
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        مَا
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        بَعْدِ
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        مِنْ
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        إِلَّا
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        اخْتَلَفُوا
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        فَمَا
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        الْأَمْرِ
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "20px",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        مِنَ
      </h1>,
    ],
    dataIndex: "third",
    width: "20px",
    key: "third",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        بَيِّنَاتٍ
      </h1>,
    ],
    dataIndex: "second",
    width: "20px",
    key: "second",
    className: "dark:bg-darkBody",
  },

  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        وَآتَيْنَاهُمْ
      </h1>,
    ],
    key: "action",
    width: "20px",
    className: "dark:bg-darkBody",
    dataIndex: "first",
  },
  {
    title: [
      <h1 className="text-center  text-gray-800 dark:text-gray-300  font-noorehuda text-2xl   transition-colors duration-500">
        اللفظ
      </h1>,
    ],
    width: "50px",
    dataIndex: "Lafaz",
    fixed:'right',

    className: "dark:bg-darkBody",
  },
];
const data = [
  {
    key: "1",
    Lafaz: [
      <h1 className="text-center  text-gray-800 dark:text-gray-300  font-noorehuda text-2xl   transition-colors duration-500">
        الوصف
      </h1>,
    ],
    first: "--",
    second: " --",
    third: "--",
    forth: "--",
  },
  {
    key: "2",
    Lafaz: [
      <h1 className="text-center whitespace-nowrap  text-gray-800 dark:text-gray-300  font-noorehuda  font-semibold   transition-colors duration-500">
        RQG-Eng
      </h1>,
    ],
    first: "In (the) name",
    second: "(of) Allah",
    third: "the Most Gracious",
    forth: "the Most Merciful",
  },
  {
    key: "3",
    Lafaz: [
      <h1 className="text-center whitespace-nowrap text-gray-800 dark:text-gray-300  font-noorehuda font-semibold   transition-colors duration-500">
        RQG-Urdu
      </h1>,
    ],
    first: "ساتھ نام ۔ (شروع نام)",
    second: "اللہ ہی کے",
    third: "جونہایت مہربان",
    forth: "سب سے زیادہ رحم کرنے والا",
  },
];

const TableAyah = () => {
  return (
    <div className="grid grid-flow-row grid-rows-1">
      <h1>Hello</h1>
      {/* <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: 500 }}
        bordered
        rowClassName="text-center dark:bg-darkBody dark:text-gray-200"
      />
      <br /> */}
    </div>
  );
};

export default TableAyah;
