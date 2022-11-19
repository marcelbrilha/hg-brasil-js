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
        by: "teste",
        valid_key: "teste",
        results: {
          [code]: {
            kind: "teste",
            symbol: code,
            name: "teste",
            company_name: "teste",
            document: "teste",
            description: "teste",
            website: "teste",
            region: "teste",
            currency: "teste",
            market_time: "teste",
            market_cap: "teste",
            price: "teste",
            change_percent: "teste",
            updated_at: "teste",
          },
        },
        execution_time: "teste",
        from_cache: "teste",
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
        by: "teste",
        valid_key: "teste",
        results: "teste",
        execution_time: "teste",
        from_cache: "teste",
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
});
