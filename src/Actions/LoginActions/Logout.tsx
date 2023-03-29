import {http} from "../../http";

const SubmitLogout = async (data: any) => {
  return await http.post("logout", data);
};

export { SubmitLogout };
