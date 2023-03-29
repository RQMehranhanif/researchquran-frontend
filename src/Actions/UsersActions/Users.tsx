import {http} from '../../http';
const getUsers = async (page:number) => {
  return await http.get(`/users?page=${page}`);
};
const createUsers = async (data:any) => {
  return await http.post(`/users`, data);
};
const updateUser = async (id: number, data: any) => {
  return await http.post(`/users/${id}?_method=PUT`, data);
};
const deleteUser = async (id:any) => {
  return await http.delete(`/users/${id}`);
};
const impersonateUser = async (id:any) => {
  return await http.get(`/impersonate/${id}`);
};
const leaveUser = async () => {
  return await http.get(`/leave-impersonation`);
};
  export { getUsers, createUsers, deleteUser, updateUser,impersonateUser,leaveUser};