import { Table } from 'antd';
import { FixedType } from 'rc-table/lib/interface';
import React from 'react';
import './style.css'

const columns = [
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        يَخْتَلِفُونَ
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: 150,
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        فِيهِ
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: 150,
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        كَانُوا
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: 150,
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        فِيمَا
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: 150,
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
    width: 150,
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
    width: 150,
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
    width: 150,
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
    width: 150,
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
    width: 150,
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
    width: 150,
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
    width: 150,
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
    width: 150,

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
    width: 150,
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
    width: 150,
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
    width: 150,
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
    width: 150,
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
    width: 150,
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
    width: 150,
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
    width: 150,
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
    width: 150,
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
    width: 150,
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        مِنَ
      </h1>,
    ],
    dataIndex: "third",
    width: 150,
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
    width: 150,
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
    width: 150,
    className: "dark:bg-darkBody",
    dataIndex: "first",
  },
  {
    title: [
      <h1 className="text-center  text-gray-800 dark:text-gray-300  font-noorehuda text-2xl   transition-colors duration-500">
        اللفظ
      </h1>,
    ],
    width: 150,
    dataIndex: "Lafaz",
      fixed:"right" as FixedType,

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


// const ScrollTable = () => 
const ScrollTable: React.FC = () =>(
  <Table
  
    columns={columns}
    dataSource={data}
    pagination={false}

    bordered={true}
    scroll={{
      x: 2000
    }}
    
    
    
    rowClassName="dark:text-white dark:hover:bg-darkBody  "
  />
  
);

export default ScrollTable;