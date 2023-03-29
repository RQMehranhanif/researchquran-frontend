import { http } from '../../http';

const WordSearch_URL = "/word-search";

const getwordsearch = async (search: any, searchType: string, perPage: number, pageNumber: number) => {
  if ( searchType === 'translationKeyWord' ) {
    return await http.get(`${WordSearch_URL}?translationKeyWord=${search}&per_page=${perPage}&page=${pageNumber}`);
  }


  return await http.get(`${WordSearch_URL}?searchType=${searchType}&search=${search}&per_page=${perPage}&page=${pageNumber}`);
  // return await http.get(`${WordSearch_URL}?search_type=${searchType}&search=${search}&per_page=${perPage}&page=${pageNumber}`);
};

export { getwordsearch };