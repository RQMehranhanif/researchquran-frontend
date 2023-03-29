import { http } from "../../http";

const WORD_BY_WORD_URL = "/word-by-word";

const getwordbyword = async (
  surah: string,
  fromVerse: string,
  toVerse: string,
  perPage: number,
  pageNumber: number
) => {
  return await http.get(
    `${WORD_BY_WORD_URL}?surahId=${surah}&fromVerse=${fromVerse}&toVerse=${toVerse}&perPage=${perPage}&page=${pageNumber}`
  );
};
const filterSurah = async (data: any) => {
  return await http.post(`/search-ayat`, data);
};

export { getwordbyword, filterSurah };
