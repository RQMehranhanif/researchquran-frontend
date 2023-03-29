import {http} from "../../http";
const getTranslations = async () => {
  return await http.get(`/translation`);
};
const getUserTranslations = async (page: any) => {
  return await http.get(`/my-translations?page=${page}`);
};
const getfilterTranslations = async (
  id: any,
  verse: any,
  word: any,
  page: any,
  page_no: any
) => {
  return await http.get(
    `/my-translations?surahId=${id}&verse=${verse}&search=${word}&perPage=${page}&page=${page_no}`
  );
};
const getScholarsTranslation = async (data: any) => {
  return await http.post(`/translation/create`, data);
};
const saveTranslation = async (data: any) => {
  return await http.post(`/translation/save`, data);
};
const deleteTranslation = async (id: any) => {
  return await http.delete(`/translation/delete/${id}`);
};
const editTranslation = async (data:any) => {
  return await http.post(`/translation/edit`,data);
};
const UpdateTranslation = async (data:any) => {
  return await http.post(`/translation/update`,data);
};
const getRelatedWords = async (wordId:any) => {
  return await http.post(`/translation/related-words`,wordId);
};
const getPhraseWords = async (wordId:any) => {
  return await http.post(`/translation/related-phrase-words`,wordId);
};
export {
  getTranslations,
  getScholarsTranslation,
  saveTranslation,
  UpdateTranslation,
  getUserTranslations,
  getfilterTranslations,
  deleteTranslation,
  editTranslation,
  getRelatedWords,
  getPhraseWords
};
