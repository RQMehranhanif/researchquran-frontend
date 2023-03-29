import React from 'react';
import { useSelector } from 'react-redux';

const MushafCard = ({ ayahs }:{ ayahs:any }) => {
  const { arabicFontSize } = useSelector((state:any) => state.settings);
  return (
    <>
      <h1 className='mt-5 flex text-justify break-word flex-row-reverse items-center flex-wrap word-spacing text-gray-800 dark:text-gray-300 font-noorehuda text-5xl py-5 leading-relaxed transition-colors duration-500'>
      {ayahs?.map((ayah:any) => (
        <span
          key={ayah.id}
          style={{ direction: 'rtl', fontSize: arabicFontSize + 'px' }}
          className='text-justify break-words'
        >
          {ayah?.text}
          <span className='ayah-number font-signika text-lg'>{ayah?.id}</span>
        </span>
      ))}
    </h1>
    </>
  );
};

export default MushafCard;


