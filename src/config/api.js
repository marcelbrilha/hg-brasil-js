import axios from "axios";

import baseURL from "./config.js";

export default function createHttp({ timeout = 10000 }) {
  const http = axios.create({ baseURL, timeout });
  return http;
}
