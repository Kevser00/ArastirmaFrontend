// src/api/authService.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from './api';

// Swagger’daki endpointler:
const ENDPOINTS = {
  loginUser: '/api/auth/login/user',
  loginDoctor: '/api/auth/login/doctor',
  register: '/api/identity/register',
};

// ✅ Backend’in döndürdüğü token yapısı net değil.
// O yüzden olası alan adlarını yakalayan bir yardımcı:
const pickToken = (data) => {
  if (!data) return null;

  // yaygın ihtimaller:
  return (
    data.accessToken ||
    data.access_token ||
    data.token ||
    data.jwt ||
    null
  );
};

export const authService = {
  async loginUser({ email, password }) {
    const res = await api.post(ENDPOINTS.loginUser, { email, password });
    const token = pickToken(res.data);

    // token geldiyse sakla
    if (token) await AsyncStorage.setItem('accessToken', token);

    return { data: res.data, token };
  },

  async loginDoctor({ registrationNumber, password }) {
    const res = await api.post(ENDPOINTS.loginDoctor, { registrationNumber, password });
    const token = pickToken(res.data);

    if (token) await AsyncStorage.setItem('accessToken', token);

    return { data: res.data, token };
  },

  async register(payload) {
    // payload: { role, password, name, surname, email, registrationNumber }
    const res = await api.post(ENDPOINTS.register, payload);
    return res.data;
  },

  async logout() {
    await AsyncStorage.removeItem('accessToken');
  },
};
