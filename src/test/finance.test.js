const Finance = require("../lib/Finance");

describe("Financial module tests", () => {
  let finance = null;

  beforeAll(() => {
    finance = new Finance({ key: "your key" });
  });

  it("Should return information from a real estate fund", async () => {
    const code = "KNRI11";
    const spy = jest.spyOn(finance, "getStockPrice");
    spy.mockReturnValue(
      Promise.resolve({
        by: "default",
        valid_key: true,
        results: {
          [code]: {
            kind: "fii",
            symbol: code,
            name: "FII Kinea",
            company_name:
              "Kinea Renda Imobiliria Fundo Investimento Imobiliario FII",
            document: "12.005.956/0001-65",
            description: "Financeiro e Outros/Fundos/Fundos Imobiliários",
            website: "https://www.intrag.com.br/",
            region: "Brazil/Sao Paulo",
            currency: "BRL",
            market_time: {},
            market_cap: 3388.52,
            price: 140.27,
            change_percent: 2.69,
            updated_at: "2022-11-18 20:54:43",
          },
        },
        execution_time: 0.0,
        from_cache: true,
      })
    );

    const response = await finance.getStockPrice(code);
    const keysResponse = Object.keys(response);
    const { results } = response;
    const keysStock = Object.keys(results[code]);

    expect(results[code].symbol).toEqual(code);
    expect(keysResponse).toEqual([
      "by",
      "valid_key",
      "results",
      "execution_time",
      "from_cache",
    ]);
    expect(keysStock).toEqual([
      "kind",
      "symbol",
      "name",
      "company_name",
      "document",
      "description",
      "website",
      "region",
      "currency",
      "market_time",
      "market_cap",
      "price",
      "change_percent",
      "updated_at",
    ]);
  });

  it("Should return currency and financial market information", async () => {
    const spy = jest.spyOn(finance, "getCurrenciesAndStocks");
    spy.mockReturnValue(
      Promise.resolve({
        by: "default",
        valid_key: true,
        results: {},
        execution_time: 0.0,
        from_cache: true,
      })
    );

    const response = await finance.getCurrenciesAndStocks();
    const keysResponse = Object.keys(response);

    expect(keysResponse).toEqual([
      "by",
      "valid_key",
      "results",
      "execution_time",
      "from_cache",
    ]);
  });

  it("Should return rate information (CDI, IPCA, SELIC)", async () => {
    const spy = jest.spyOn(finance, "getTaxes");
    spy.mockReturnValue(
      Promise.resolve({
        by: "current",
        valid_key: true,
        results: [
          {
            date: "2022-11-17",
            cdi: 13.75,
            selic: 13.75,
            daily_factor: 1.00050788,
            selic_daily: 13.65,
            cdi_daily: 13.65,
          },
        ],
        execution_time: 0,
        from_cache: true,
      })
    );

    const response = await finance.getTaxes();
    const [firstTax] = response["results"];

    expect(Object.keys(response)).toEqual([
      "by",
      "valid_key",
      "results",
      "execution_time",
      "from_cache",
    ]);

    expect(Object.keys(firstTax)).toEqual([
      "date",
      "cdi",
      "selic",
      "daily_factor",
      "selic_daily",
      "cdi_daily",
    ]);
  });
});
