import {http} from "../../http";
const USERS_SETTINGS_URL = "/settings";

const getUserSettings = async () => {
  return await http.get(`${USERS_SETTINGS_URL}`);
};

const saveUserSettings = async (data: any) => {
  return await http.post(USERS_SETTINGS_URL, data);
};

export { getUserSettings, saveUserSettings };
