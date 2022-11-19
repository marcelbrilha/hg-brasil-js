const createHttp = require("../config/api");

class Finance {
  constructor({ key, timeout }) {
    this.key = key;
    this.http = createHttp(timeout ? { timeout } : {});
  }

  /**
   * Returns information about real estate funds or companies
   * @param {*} code Real estate fund or company code
   * @returns Real estate fund or company information
   */
  async getStockPrice(code) {
    const { http, key } = this;
    const { data } = await http.get(
      `/finance/stock_price?key=${key}&symbol=${code}`
    );
    return data;
  }

  /**
   * Returns currency and stock exchange information
   * @returns Currency and stock exchange information
   */
  async getCurrenciesAndStocks() {
    const { http, key } = this;
    const { data } = await http.get(`/finance?key=${key}`);
    return data;
  }

  /**
   * Return rate information (CDI, IPCA, SELIC)
   * @returns Rate information (CDI, IPCA, SELIC)
   */
  async getTaxes() {
    const { http, key } = this;
    const { data } = await http.get(`/finance/taxes?key=${key}`);
    return data;
  }
}

module.exports = Finance;
