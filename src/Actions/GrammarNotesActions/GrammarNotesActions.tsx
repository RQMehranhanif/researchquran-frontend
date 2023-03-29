import {http} from '../../http';

const getGrammarNotes = async () => {
  return await http.get(`/grammar-notes`);
};
// const getRefernceWords = async (scholarId:any) => {
//   return await http.post(`/reference-words`,scholarId);
// };


  
  export { getGrammarNotes };