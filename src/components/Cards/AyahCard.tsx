/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import {

  ReadOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

import { RootState } from "../../Redux/store";

const AyahCard = ({ ayah, id }: { ayah: any; id: any }) => {
  const {  banglaFontSize, isTransition } = useSelector(
    (state: RootState) => state.settings
  );
  const [ayahNumber, setAyahNumber] = useState(null);
  const [showTafsir, setShowTafsir] = useState(false);

  return (
    <div className="p-10 dark:bg-transparent dark:border-gray-900 border-b-2 border-transparent my-5 rounded-sm transition-colors duration-500">
      <div className="flex items-center space-x-2">
        <div className="number-icon mr-5">
          <p className="number text-purple-700 transition-colors duration-500 ayah-number font-signika text-lg">
            {ayah.id}
          </p>
        </div>

        <button
          className="w-10 h-10 text-2xl focus:outline-none"
          onClick={() => {
            setAyahNumber(ayah.id);
            setShowTafsir(!showTafsir);
          }}
          title="Show Tafsir"
        >
          <ReadOutlined style={{ color: "#4EB862" }} />
        </button>
      </div>
      <h1 className="text-right word-spacing  text-gray-800 dark:text-gray-300 font-noorehuda text-5xl py-5 leading-relaxed transition-colors duration-500">
        {ayah?.text}
      </h1>
      {isTransition && (
        <h3
          className="font-solaimanLipi text-gray-800 dark:text-gray-400"
          style={{ fontSize: banglaFontSize + "px" }}
        >
          Translation
        </h3>
      )}
    </div>
  );
};

export default AyahCard;
