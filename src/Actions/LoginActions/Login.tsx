import {http} from "../../http";

const SubmitLogin = async (data: any) => {
  return await http.post("login", data);
};

export { SubmitLogin };
