import axios from 'axios';
import { API_URL } from '@env';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Token için düzenlenecek :
// api.interceptors.request.use(async config => {
//   const token = await AsyncStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });
export const getAppointments = () =>
  api.get('/appointments');
export default api;
