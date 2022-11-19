const axios = require("axios");

const baseURL = require("./config");

module.exports = function createHttp({ timeout = 10000 }) {
  const http = axios.create({ baseURL, timeout });
  return http;
};
