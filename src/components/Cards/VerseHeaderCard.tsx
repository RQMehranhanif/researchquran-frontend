import React from "react";
// import convertStartCase from 'lodash.startcase';
import logo from "../../assets/images/Background.png";
import { Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { mushafMode } from "./../../Redux/_actions/settingsActions";
const VerseHeaderCard = ({ item }: { item: any }) => {
  const { isMushaf } = useSelector((state: any) => state.settings);

  const dispatch = useDispatch();
  return (
    <div className="bg-gray-100 grid md:gap-5 grid-cols-3 justify-center items-center px-10 py-5 rounded-md border-2 border-dashed">
      <img src={logo} alt="Verse Card logo" className="w-56" />
      <div className="text-center flex-1">
        <h1 className="md:text-3xl text-xl text-gray-700 dark:text-gray-400 transition-colors duration-500 font-headTitle font-bold">
          {item?.name}
        </h1>
        <h4 className="text-lg font-light text-gray-500 dark:text-gray-500 transition-colors duration-500 font-signika">
          ( {item?.translated_en} )
        </h4>

        <div className="h-px md:w-48 w-32 bg-gray-200 dark:bg-gray-500 transition-colors duration-500 mx-auto" />
        <h2 className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-500 mt-1">
          {item?.place} - {item?.count} Ayah <br /> Mushaf mode
        </h2>
        
       <Switch
        className=""
        defaultChecked={isMushaf}
        onChange={(value) => dispatch(mushafMode(value))}
      />
      </div>
    </div>
  );
};

export default VerseHeaderCard;
