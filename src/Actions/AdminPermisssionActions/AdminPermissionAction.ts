import {http} from '../../http';


const getPermissions = async () => {
  return await http.get(`/permissions`);
};
const savePermissions = async (data: any) => {
  return await http.post(`/permissions`,data);
};

  export { getPermissions, savePermissions };