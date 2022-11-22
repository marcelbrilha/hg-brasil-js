import Location from "../lib/Location";

describe("Location module tests", () => {
  let location = null;

  beforeAll(() => {
    location = new Location({ key: "your key" });
  });

  it("Should return location information", async () => {
    const spy = jest.spyOn(location, "getGeoIP");
    spy.mockReturnValue(
      Promise.resolve({
        by: "address_standard",
        valid_key: true,
        results: {
          address: "45.4.155.177",
          type: "ipv4",
          city: "São Paulo",
          region: "São Paulo",
          country_name: "Brasil",
          continent: "América do Sul",
          continent_code: "SA",
          region_code: "SP",
          country: {
            name: "Brasil",
            code: "BR",
            capital: "Brasília",
            flag: {},
            calling_code: "55",
          },
          latitude: -23.6376,
          longitude: -46.6295,
          woeid: 455827,
        },
        execution_time: 0,
        from_cache: true,
      })
    );

    const address = "remote";
    const precision = false;
    const response = await location.getGeoIP(address, precision);

    const keysResponse = Object.keys(response);
    const { results } = response;

    expect(keysResponse).toEqual([
      "by",
      "valid_key",
      "results",
      "execution_time",
      "from_cache",
    ]);
    expect(Object.keys(results)).toEqual([
      "address",
      "type",
      "city",
      "region",
      "country_name",
      "continent",
      "continent_code",
      "region_code",
      "country",
      "latitude",
      "longitude",
      "woeid",
    ]);
    expect(Object.keys(results.country)).toEqual([
      "name",
      "code",
      "capital",
      "flag",
      "calling_code",
    ]);
  });
});
