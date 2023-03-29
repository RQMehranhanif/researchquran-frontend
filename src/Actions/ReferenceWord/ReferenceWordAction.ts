import {http} from '../../http';

const getScholars = async () => {
  return await http.get(`/get-scholars`);
};
const getRefernceWords = async (scholarId:any) => {
  return await http.post(`/reference-words`,scholarId);
};
const saveRelatedWords = async (data:any) => {
    return await http.post(`/save-reference-word-translation`,data);
  };

  
  export { getRefernceWords,saveRelatedWords,getScholars };