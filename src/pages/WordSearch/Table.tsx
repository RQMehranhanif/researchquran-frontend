/* eslint-disable jsx-a11y/anchor-is-valid */
import { Table } from "antd";
import React from "react";
import './style.css'

const columns = [
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        الرَّحِيمِ
      </h1>,
    ],
    dataIndex: "forth",
    key: "forth",
    width: "auto",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        الرَّحْمَٰنِ
      </h1>,
    ],
    dataIndex: "third",
    width: "auto",
    key: "third",
    className: "dark:bg-darkBody",
  },
  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        اللَّهِ
      </h1>,
    ],
    dataIndex: "second",
    width: "auto",
    key: "second",
    className: "dark:bg-darkBody",
  },

  {
    title: [
      <h1 className="word-spacing text-center text-gray-800 dark:text-gray-300 font-noorehuda text-2xl  leading-relaxed transition-colors duration-500">
        بِسْمِ
      </h1>,
    ],
    key: "action",
    width: "auto",
    className: "dark:bg-darkBody",
    dataIndex:'first'
  },
  {
    title: [
      <h1 className="text-center  text-gray-800 dark:text-gray-300  font-noorehuda text-2xl   transition-colors duration-500">
       اللفظ
      </h1>,
    ],
    width: "50px",
    dataIndex: "Lafaz",
    
    className: "dark:bg-darkBody",
  },
];
const data = [
  {
    key: "1",
    Lafaz:[<h1 className="text-center  text-gray-800 dark:text-gray-300  font-noorehuda text-2xl   transition-colors duration-500">
   الوصف
   </h1>],
   first: "--",
   second:
   " --",
   third: '--',
   forth: "--",

  },
  {
    key: "2",
    Lafaz:[<h1 className="text-center whitespace-nowrap  text-gray-800 dark:text-gray-300  font-noorehuda  font-semibold   transition-colors duration-500">
    RQG-Eng
    </h1>],
    first: "In (the) name",
    second: "(of) Allah",
    third: 'the Most Gracious',
    forth: "the Most Merciful",
  },
  {
    key: "3",
    Lafaz:[<h1 className="text-center whitespace-nowrap text-gray-800 dark:text-gray-300  font-noorehuda font-semibold   transition-colors duration-500">
    RQG-Urdu
    </h1>],
    first: "ساتھ نام ۔ (شروع نام)",
    second: "اللہ ہی کے",
    third: 'جونہایت مہربان',
    forth: "سب سے زیادہ رحم کرنے والا",
  },

];


const TableAyah = () => {

    return(
        <div className="grid grid-flow-row grid-rows-1">

    
  <Table
    columns={columns}
    dataSource={data}
    pagination={false}
    bordered
    rowClassName="text-center dark:bg-darkBody dark:text-gray-200"
  />
  <br />
  </div>
  ) 
}
    

export default TableAyah;
