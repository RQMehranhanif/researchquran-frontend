import { http } from "../../http";

const Words_Notes_URL = "/word-notes";
// const Add_Ayat_Note_URL = "/add-ayats-notes";
const getWordsNotes = async (page: number) => {
  return await http.get(`${Words_Notes_URL}?page=${page}`);
};
const getScholars = async () => {
  return await http.get("/get-scholars");
};
const filterSurah = async (surah: any) => {
  const request = { surahId: surah };
  return await http.post(`/search-ayat`, request);
};
const filterAyatWord = async (surahId: any, ayatId: any) => {
  return await http.post(
    `/word-notes/search?surahNo=${surahId}&ayatNo=${ayatId}`
  );
};
const getLanguages = async () => {
  return await http.get(`/languages`);
};
const deleteWordNote = async (id: any) => {
  return await http.delete(`/word-notes/${id}`);
};
export {
  getWordsNotes,
  filterSurah,
  filterAyatWord,
  deleteWordNote,
  getScholars,
  getLanguages,
};
