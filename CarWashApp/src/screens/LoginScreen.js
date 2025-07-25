import { login } from '../api/api';

const handleLogin = async () => {
  try {
    const response = await login(email, password);
    console.log('Giriş başarili:', response.data);
  } catch (error) {
    console.error('Hata:', error.response?.data || error.message);
  }
};