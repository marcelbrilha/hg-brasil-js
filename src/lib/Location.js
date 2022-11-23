import createHttp from "../config/api.js";

class Location {
  constructor({ key, timeout }) {
    this.key = key;
    this.http = createHttp(timeout ? { timeout } : {});
  }

  /**
   * Location information
   * @param {*} address Address information
   * @param {*} precision Search accuracy
   * @returns Location information
   */
  async getGeoIP(address, precision) {
    const { http, key } = this;
    const { data } = await http.get(
      `/geoip?key=${key}&address=${address}&precision=${precision}`
    );
    return data;
  }
}

export default Location;
