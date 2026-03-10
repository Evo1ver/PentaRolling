import axios from "axios";

export const baseInstance = axios.create({
  baseURL: "https://rolling-api.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export const teamInstance = axios.create({
  baseURL: "https://rolling-api.vercel.app/23-2",
  headers: {
    "Content-Type": "application/json",
  },
});
