const createHttp = require("../config/api");

class Weather {
  constructor({ key, timeout }) {
    this.key = key;
    this.http = createHttp(timeout ? { timeout } : {});
  }

  async getWeather() {
    const { http } = this;
    const { data } = await http.get("/weather");
    return data;
  }

  async getWeatherWithCode(code) {
    const { http } = this;
    const { data } = await http.get(`/weather?woeid=${code}`);
    return data;
  }
}

module.exports = Weather;
