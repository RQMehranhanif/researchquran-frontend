import {http} from '../../http';

const AddMeaning_URL = "/root-word-meanings";
const Add_Meaning_URL = "/add-meaning";
const getrootwords = async (arabicLetterKey:any) => {
  return await http.get(`${AddMeaning_URL}?query=${arabicLetterKey}`);
};
const storeRootWrods = async (editingKey:string, urduMeaning:string, englishMeaning:string) => {
  return await http.post(`${Add_Meaning_URL}?rootword_id=${editingKey}&rootwordmeaningurdu=${urduMeaning}&rootwordmeaningeng=${englishMeaning}`);
};
  
  export { getrootwords, storeRootWrods };