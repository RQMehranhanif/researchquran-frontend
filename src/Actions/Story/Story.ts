import { http } from "../../http";
import { getAllStoriesResponse } from "../../Types/Stories";
const URL = "stories";
const getStoriesList = async ():Promise<getAllStoriesResponse> =>{
    const response = await http.get(URL)
    return response.data;
}

export {getStoriesList}