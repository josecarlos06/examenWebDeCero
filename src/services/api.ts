import { HttpClient } from "./httpClient";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const http = new HttpClient(API_BASE_URL);