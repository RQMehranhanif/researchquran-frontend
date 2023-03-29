import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import icon from '../../assets/images/star.svg';
import ChapterNameIcon from '../Chapters/ChapterNameIcon';
import './ChapterCard.scss';
const ChaptersCard = (props:any) => {
  const isDarkTheme = useSelector(({ theme }:{theme:any}) => theme.dark);
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
      to={`${props.id}`}
      className='block p-5 rounded-md bg-white hover:bg-indigo-50 dark:border-green-500 border border-gray-900 dark:bg-gray-900 transition-colors duration-500'
    >
      <div className='flex justify-between items-center font-signika'>
        <div className='flex items-center'>
          <div className='number-icon'>
            <img className='icon ' src={icon} alt='' style={{display: 'none'}} />
            <p className='number text-yellow-500 dark:text-green-300 transition-colors duration-500'>
              {props.id}
            </p>
          </div>
          <div className='ml-3'>
            <h5 className='text-lg font-semibold text-gray-700 dark:text-gray-400 transition-colors duration-500'>
              {props.name}
            </h5>
            <span className='text-yellow-500 font-medium dark:text-green-300'>{props.translated_en}</span>
          </div>
        </div>
        <ChapterNameIcon
          id={props.id}
          color={isDarkTheme ? '#818CF8' : '#6D28D9'}
        />
      </div>
    </Link>
  );
};

export default ChaptersCard;
