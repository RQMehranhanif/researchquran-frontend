import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AyahCard from '../components/Cards/AyahCard';
import VerseHeaderCard from '../components/Cards/VerseHeaderCard';
import Container from '../components/Container';
import chaptersList from '../data/chaptersList';
import quranVerses from '../data/quranVerses';
// import tafsirBayaan from '../data/tafsirBayaan';
// import taisirulQuran from '../data/taisirulQuran';
import MushafCard from '../components/Cards/MushafCard';

const Verse = () => {
  // const [ayahs,setAyahs] = useState()
  const { isMushaf } = useSelector((state:any) => state.settings);
  const { pathname } = useLocation();
  const currentVerse = pathname.slice(1);

  const [verseInfo] = chaptersList.filter(
    chapter => chapter.id === parseInt(currentVerse)
  );
  const [ayahs] = quranVerses
    .filter(verse => verse.id === currentVerse)
    .map(verse => verse.aya);


  return (
    <Container>
      <div className='w-4/5 mx-auto mt-20'>
        <VerseHeaderCard item={verseInfo} />
        {isMushaf ? (
          <MushafCard {...{ ayahs }} />
        ) : (
          ayahs.map((ayah, i) => (
            <AyahCard
               
              key={ayah.id}
              id={ayah.id}
              {...{ ayah }}            />
          ))
        )}
      </div>
    </Container>
  );
};

export default Verse;
