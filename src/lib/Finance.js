const createHttp = require("../config/api");

class Finance {
  constructor({ key, timeout }) {
    this.key = key;
    this.http = createHttp(timeout ? { timeout } : {});
  }

  async getStockPrice(code) {
    const { http, key } = this;
    const { data } = await http.get(
      `/finance/stock_price?key=${key}&symbol=${code}`
    );
    return data;
  }

  async getCurrenciesAndStocks() {
    const { http, key } = this;
    const { data } = await http.get(`/finance?key=${key}`);
    return data;
  }
}

module.exports = Finance;
