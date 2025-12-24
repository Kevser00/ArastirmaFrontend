// src/api/api.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// ✅ Base URL seçimi
const DEV_BASE_URL =
  Platform.OS === 'ios'
    ? 'http://localhost:5127'      // iOS simulator
    : 'http://10.0.2.2:5127';      // Android emulator

// Gerçek cihaz kullanacaksan:
// const DEV_BASE_URL = 'http://192.168.1.50:5127';

export const api = axios.create({
  baseURL: DEV_BASE_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});
// ✅ Her isteğe token ekle (varsa)
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});