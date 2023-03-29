import React from 'react';

import logoLight from './../assets/images/quranLight.png';
import Chapters from '../components/Chapters/Chapters';
import Settings from '../components/Settings/Settings';
import Container from '../components/Container';




const Home = () => {
  

  
  
  return (
    <>
      <div className='w-full h-80 flex justify-center items-center space-y-5 flex-col'>
      <img src={logoLight} alt='' className='w-52 ' />

        <h1 id='maintext'  className='text-4xl text-center font-headTitle text-indigo-900 font-bold dark:text-gray-400 transition-colors duration-500'>
      Research Quran
        </h1>
        
      </div>
      <Container>
        <div className='space-y-11'>
          <h1 className='text-2xl text-gray-600 dark:text-gray-400 font-signika'>
            Surahs (Chapters)
          </h1>
          <Chapters />
          <div className='h-10' />
        </div>
      </Container>
      <Settings />
    </>
  );
};

export default Home;
