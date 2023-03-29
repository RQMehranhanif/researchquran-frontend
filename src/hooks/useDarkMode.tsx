import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from './../Redux/_actions/themeActions';

const useDarkMode = () => {
  const dispatch = useDispatch();
  const getCurrentTheme = () =>
    window.matchMedia('(prefers-color-scheme: light)').matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (e: any) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: light)');
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);

   useEffect(() => {
     isDarkTheme
       ? (document.querySelector('html')?.classList.add('light'))
       : document.querySelector('html')?.classList.remove('light');
     dispatch(setTheme(isDarkTheme));
   }, [isDarkTheme, dispatch]);

  return [isDarkTheme, setIsDarkTheme];
};

export default useDarkMode;
