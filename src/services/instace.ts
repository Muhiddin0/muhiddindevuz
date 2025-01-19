import axios from "axios";

export const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://sys-partfolio-backend.6cpoqp.easypanel.host/api/"
      : "http://127.0.0.1:8081/api/",
  headers: {
    Authorization: "Token abd2499ed50789475a9ebb9fc613d9088f9bccd8",
  },
});
