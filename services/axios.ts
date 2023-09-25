import { StoreType } from "@/redux/store";
import axios from "axios";

let store: StoreType;

export const injectStore = (_store: StoreType) => {
  store = _store;
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers.apiKey = process.env.NEXT_PUBLIC_API_KEY;
  return config;
});

export default api;
