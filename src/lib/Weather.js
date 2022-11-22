import createHttp from "../config/api";

class Weather {
  constructor({ key, timeout }) {
    this.key = key;
    this.http = createHttp(timeout ? { timeout } : {});
  }

  /**
   * Returns weather information
   * @returns Weather information
   */
  async getWeather() {
    const { http } = this;
    const { data } = await http.get("/weather");
    return data;
  }

  /**
   * Returns weather information for a city
   * @param {*} code City code
   * @returns Reported weather information
   */
  async getWeatherWithCode(code) {
    const { http } = this;
    const { data } = await http.get(`/weather?woeid=${code}`);
    return data;
  }
}

export default Weather;
