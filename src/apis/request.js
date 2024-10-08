import axios from "axios";

const client = axios.create({ baseURL: "http://127.0.0.1:8000/api" });

export const request = async ({ ...options }) => {
  const token = localStorage.getItem('token');
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return client(options).then((res) => res);
};
