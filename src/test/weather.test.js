const Weather = require("../lib/Weather");

describe("Testando módulo de tempo", () => {
  let weather = null;

  beforeAll(() => {
    weather = new Weather({ key: "your key" });
  });

  it("Deve retornar as informações de tempo", async () => {
    const response = await weather.getWeather();

    expect(Object.keys(response)).toEqual([
      "by",
      "valid_key",
      "results",
      "execution_time",
      "from_cache",
    ]);

    expect(Object.keys(response["results"])).toEqual([
      "temp",
      "date",
      "time",
      "condition_code",
      "description",
      "currently",
      "cid",
      "city",
      "img_id",
      "humidity",
      "cloudiness",
      "rain",
      "wind_speedy",
      "wind_direction",
      "sunrise",
      "sunset",
      "condition_slug",
      "city_name",
      "forecast",
      "cref",
    ]);
  });

  it("Deve retornar as informações de tempo informando um código específico da cidade", async () => {
    const response = await weather.getWeather("455827");

    expect(Object.keys(response)).toEqual([
      "by",
      "valid_key",
      "results",
      "execution_time",
      "from_cache",
    ]);

    expect(Object.keys(response["results"])).toEqual([
      "temp",
      "date",
      "time",
      "condition_code",
      "description",
      "currently",
      "cid",
      "city",
      "img_id",
      "humidity",
      "cloudiness",
      "rain",
      "wind_speedy",
      "wind_direction",
      "sunrise",
      "sunset",
      "condition_slug",
      "city_name",
      "forecast",
      "cref",
    ]);
  });
});
