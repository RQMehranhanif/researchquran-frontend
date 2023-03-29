import {http} from '../../http';
const getscholartranslations = async (surah_id: any, fromVerse:any, toVerse:any, scholar_id:string, per_page:any, pageNumber:number) => {
  return await http.get(`/scholar-translations?surahId=${surah_id}&fromVerse=${fromVerse}&toVerse=${toVerse}&scholarId=${scholar_id}&perPage=${per_page}&page=${pageNumber}`);
};
const filterSurah = async (data: any) => {
  return await http.post(`/search-ayat`, data);
};
  export { getscholartranslations, filterSurah };